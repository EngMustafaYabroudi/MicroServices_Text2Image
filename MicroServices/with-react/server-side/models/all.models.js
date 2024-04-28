// Import Mongoose

const mongoose = require("mongoose");

// Create Text To Image Style Schema

const textToImageStyleSchema = mongoose.Schema({
    imgSrc: String,
    name: String,
    prompt: String,
    negative_prompt: String,
    num_inference_steps: {
        type: Number,
        default: 50,
    },
    refine: {
        type: String,
        default: "",
    },
    modelName: String,
    categoryName: String,
});

// Create Text To Image Style Model From Style Schema

const textToImageStyleModel = mongoose.model("text-to-image-style", textToImageStyleSchema);

// Create Text To Image Category Schema

const textToImageCategorySchema = mongoose.Schema({
    imgSrc: String,
    name: String,
});

// Create Text To Image Category Model From Category Schema

const textToImageCategoryModel = mongoose.model("text-to-image-categorie", textToImageCategorySchema);

module.exports = {
    mongoose,
    textToImageStyleModel,
    textToImageCategoryModel,
}