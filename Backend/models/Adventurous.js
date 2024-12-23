const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const AdventurousSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    passportNumber: {
        type: String,
        required: false, // Optional field
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    activityName: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    price: {
        type: String,
        required: true, // Now optional
    },
});


// Create and export the model
const Adventurous = mongoose.model("Adventurous", AdventurousSchema);
module.exports = Adventurous;