const express = require("express");
const router = express.Router();
const Bookingss = require("../models/Adventurous"); // Ensure the model is correct

// Add a new Booking
router.post("/booktask", async (req, res) => {
    const { name, nic, passportNumber, address, contactNumber, email, activityName, bookingDate, price } = req.body;

    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
        return res.status(400).json({ error: "Invalid price value." });
    }

    const newBooking = new Bookingss({
        name,
        nic,
        passportNumber,
        address,
        contactNumber,
        email,
        activityName,
        bookingDate,
        price: parsedPrice,
    });

    try {
        await newBooking.save();
        res.status(201).json({ message: "Booking successfully created." });
    } catch (err) {
        console.error("Booking Error:", err);
        res.status(500).json({ error: err.message });
    }
});


// Get all Bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await Bookingss.find();
        res.status(200).json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update a Booking
router.put("/update/:id", async (req, res) => {
    const bookingId = req.params.id;
    const { name, nic, passportNumber, address, contactNumber, email, activityName, bookingDate, price } = req.body;

    const updatedBooking = {
        name,
        nic,
        passportNumber,
        address,
        contactNumber,
        email,
        activityName,
        bookingDate,
        price,
    };

    try {
        const updated = await Bookingss.findByIdAndUpdate(bookingId, updatedBooking, { new: true });
        if (!updated) {
            return res.status(404).json({ error: "Booking not found." });
        }
        res.status(200).json({ message: "Booking updated successfully.", updatedBooking: updated });
    } catch (err) {
        console.error("Error updating booking:", err);
        res.status(500).json({ error: err.message });
    }
});

// Delete a Booking
router.delete("/delete/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const deleted = await Bookingss.findByIdAndDelete(bookingId);
        if (!deleted) {
            return res.status(404).json({ error: "Booking not found." });
        }
        res.status(200).json({ message: "Booking deleted successfully." });
    } catch (err) {
        console.error("Error deleting booking:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get a Booking by ID
router.get("/get/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const booking = await Bookingss.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found." });
        }
        res.status(200).json({ message: "Booking fetched successfully.", booking });
    } catch (err) {
        console.error("Error fetching booking:", err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
