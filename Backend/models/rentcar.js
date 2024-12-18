const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const rentcar = new Schema({
    

    name: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passportNumber: {
        type: String,
        required: true,
    },
    rentDate: { 
        type: String, 
        required: true 
    }, 
    title: { 
        type: String, 
        required: true 
    }, 
    price: { 
        type: String, 
        required: true 
    },
});

// Create and export the model
const RentCar = mongoose.model("Rentcar", rentcar);
module.exports = RentCar;