import clothModel from "../models/clothModel.js";
import fs from 'fs'

// all cloth list
const listcloth = async (req, res) => {
    try {
        const cloths = await clothModel.find({})
        res.json({ success: true, data: cloths })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add cloth
const addcloth = async (req, res) => {

    try {
        console.log('File uploaded:', req.file); 
        let image_filename = req.file ? `${req.file.filename}` : '';

        const cloth = new clothModel({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            rating: req.body.rating,
            reviews: req.body.reviews,
            image: image_filename,
            details: req.body.details,
            sizesAvailable: req.body.sizesAvailable,
            subcategory: req.body.subcategory,
            
        })
       

        await cloth.save();
        res.json({ success: true, message: "cloth Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete cloth
const removecloth = async (req, res) => {
    try {

        const cloth = await clothModel.findById(req.body.id);
        fs.unlink(`uploads/${cloth.image}`, () => { })

        await clothModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "cloth Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listcloth, addcloth, removecloth }