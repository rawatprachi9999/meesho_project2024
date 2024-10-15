
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";
import nodemailer from 'nodemailer';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

     
        const token = createToken(user._id);
        
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,  
            },
        });

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`; 
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset',  
            html: `<p>You requested a password reset. Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
        });

        res.json({ success: true, message: 'Reset link sent to your email!' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

       
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid token or user does not exist.' });
        }

      
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

       
        user.password = hashedPassword;
        await user.save();

        res.json({ success: true, message: 'Password updated successfully!' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: 'Failed to reset password.' });
    }
};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { loginUser, registerUser, forgotPassword, adminLogin , resetPassword };
    

