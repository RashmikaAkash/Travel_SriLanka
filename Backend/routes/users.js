const express = require("express");
const router = express.Router();
const user = require("../models/user"); // Ensure this path is correct

// Import the User model
// Add a new User
router.post("/add", async (req, res) => {
    const { uid, Fname, Lname, Gender, age,  Email,  ContactNum, Address, City } = req.body;

    const newUser = new user({
        uid,
        Fname,
        Lname,
        Gender,
        age,
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
        const users = await user.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching Users:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update an User
router.put("/update/:id", async (req, res) => {
    const uId = req.params.id;
    const { uid, Fname, Lname, Gender, age, Email, ContactNum, Address, City} = req.body; // Include DOB here

    const updateUser = {
        uid,
        Fname,
        Lname,
        Gender,
        age,
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
        const deleted = await user.findByIdAndDelete(uId);
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