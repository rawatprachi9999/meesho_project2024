import mongoose from "mongoose";

const clothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category:{ type:String, required:true},
    price: { type: Number, required: true},
    rating : { type: Number, required: true},
    reviews:{ type: Number, required: true},
    image: { type: String, required: true },
    details: { type: String, required: true },
    subcategory :  { type: String, required: true },
   
})


const clothModel = mongoose.models.cloth || mongoose.model("cloth", clothSchema);
export default clothModel;
