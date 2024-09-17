// routes/clothRoute.js
import express from 'express';
import multer from 'multer';
import path from 'path';

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Initialize router
const router = express.Router();

// Route for adding a cloth item
router.post('/add', upload.single('image'), (req, res) => {
  try {
    // Extract form data and file
    const { name, description, price, category } = req.body;
    const image = req.file; // `req.file` is the uploaded image

    if (!image) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }

    // Add your logic to handle the data here
    // For example, save the data to the database

    res.status(200).json({ success: true, message: 'Cloth added successfully!' });
  } catch (error) {
    console.error('Error adding cloth:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
