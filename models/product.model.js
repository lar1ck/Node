import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        maxLength: [500, "Product Exceeds characters"]
    },
    category:{
        type: String,
        required: true,
        trim:true,
        maxLength: [500, "Product Exceeds characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model("Product", productSchema);

export default Product;
