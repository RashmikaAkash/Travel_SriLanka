const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const hotelSchema = new Schema({

    uid: {
        type: String,
        required: true,
    },
    hotelname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    ContactNum: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
});

// Create and export the model
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;