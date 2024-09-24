import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel

// import mongoose from "mongoose";

// const sizeSchema = new mongoose.Schema({
//   size: { type: String, required: true },  // Example: 'S', 'M', 'L', etc.
//   quantity: { type: Number, required: true, min: 0 }  // The quantity for this size
// });

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: Array, required: true },  // Assuming this is an array of image URLs
//   category: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   sizes: { type: [sizeSchema], required: true },  // Array of size/quantity objects
//   bestseller: { type: Boolean, default: false },
//   date: { type: Number, required: true, default: Date.now }
// });

// const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// export default productModel;
