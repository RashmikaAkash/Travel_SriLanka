const express = require("express");
const router = express.Router();
const hotelroom = require("../models/room"); // Ensure this path is correct

// POST: Add a new booking (booking a room)
router.post("/bookingroom", async (req, res) => {
    try {
        const { fullName, email, phoneNumber, checkIn, checkOut, roomType, hotelName } = req.body;

        // Basic validation
        if (!fullName || !email || !phoneNumber || !checkIn || !checkOut || !roomType || !hotelName) {
            return res.status(400).send({ error: "All fields are required" });
        }

        // Convert checkIn and checkOut to Date objects if they are strings (ensure proper date format)
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        // Validate that dates are correct
        if (isNaN(checkInDate) || isNaN(checkOutDate)) {
            return res.status(400).send({ error: "Invalid date format" });
        }

        // Create a new booking document using the hotelroom model
        const newBooking = new hotelroom({
            fullName,
            email,
            phoneNumber,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            roomType,
            hotelName,
        });

        await newBooking.save();  // Save to database

        res.status(201).send({ message: "Booking confirmed!" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "An error occurred while processing your booking" });
    }
});

// GET: Get all bookings (rooms)
router.get("/", async (req, res) => {
    try {
        const bookings = await hotelroom.find(); // Fetch all hotelroom data
        res.status(200).json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ error: err.message });
    }
});

// PUT: Update a booking by ID
router.put("/update/:id", async (req, res) => {
    const bookingId = req.params.id;
    const { fullName, email, phoneNumber, checkIn, checkOut, roomType, hotelName } = req.body;

    // Validate that required fields are present
    if (!fullName || !email || !phoneNumber || !checkIn || !checkOut || !roomType || !hotelName) {
        return res.status(400).send({ error: "All fields are required for update" });
    }

    // Convert checkIn and checkOut to Date objects if they are strings (ensure proper date format)
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Validate that dates are correct
    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
        return res.status(400).send({ error: "Invalid date format" });
    }

    const updateBooking = {
        fullName,
        email,
        phoneNumber,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        roomType,
        hotelName,
    };

    try {
        const updatedBooking = await hotelroom.findByIdAndUpdate(bookingId, updateBooking, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json({ message: "Booking updated", updatedBooking });
    } catch (err) {
        console.error("Error updating booking:", err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE: Delete a booking by ID
router.delete("/delete/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const deletedBooking = await hotelroom.findByIdAndDelete(bookingId);
        if (!deletedBooking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted" });
    } catch (err) {
        console.error("Error deleting booking:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// GET: Get a booking by ID
router.get("/get/:id", async (req, res) => {
    const bookingId = req.params.id;

    try {
        const booking = await hotelroom.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json({ message: "Booking fetched", booking });
    } catch (err) {
        console.error("Error fetching booking:", err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
