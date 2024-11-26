const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const userSchema = new Schema({

    uid: {
        type: String,
        required: true,
    },
    Fname: {
        type: String,
        required: true,
    },
    Lname: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
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
const User = mongoose.model("User", userSchema);
module.exports = User;