const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const room = new Schema({
    

    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    checkIn: {
        type: String,
        required: true,
    },
    checkOut: {
        type: String,
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    hotelName: { type: String, required: true },  // Add hotelName here
});

// Create and export the model
const HotelRoom = mongoose.model("HotelRoom", room);
module.exports = HotelRoom;