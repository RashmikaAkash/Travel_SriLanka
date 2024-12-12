const express = require("express");
const router = express.Router();
const hotel = require("../models/hotel"); // Ensure this path is correct


// Import the User model
// Add a new User
router.post("/add", async (req, res) => {
    const { uid, hotelname,description,   Email,  ContactNum, Address, City } = req.body;

    const newUser = new hotel({
        uid,
        hotelname,
        description,
        Email,
        ContactNum,
        Address,
        City,
    });

    try {
        await newUser.save();
        res.status(201).json({ message: "Success Full Registration." });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;


// Get all employees
router.get("/", async (req, res) => {
    try {
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        console.error("Error fetching hotel:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update an User
router.put("/update/:id", async (req, res) => {
    const uId = req.params.id;
    const { uid, hotelname,description,   Email,  ContactNum, Address, City } = req.body; // Include DOB here

    const updateUser = {
        uid,
        hotelname,
        description,
        Email,
        ContactNum,
        Address,
        City,
    };

    try {
        const updated = await user.findByIdAndUpdate(uId, updateUser, { new: true });
        if (!updated) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User Updated", updatedUser: updated });
    } catch (err) {
        console.error("Error updating User:", err);
        res.status(500).json({ error: err.message });
    }
});

// Delete an User
router.delete("/delete/:id", async (req, res) => {
    const uId = req.params.id;

    try {
        const deleted = await hotel.findByIdAndDelete(uId);
        if (!deleted) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User Deleted" });
    } catch (err) {
        console.error("Error deleting User:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get an employee by ID
router.get("/get/:id", async (req, res) => {
    const uId = req.params.id;

    try {
        const User = await user.findById(uId);
        if (!User) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User fetched", User });
    } catch (err) {
        console.error("Error fetching User:", err.message);
        res.status(500).json({ error: err.message });
    }
});