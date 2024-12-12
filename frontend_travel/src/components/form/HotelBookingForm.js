import React, { useState } from "react";
import axios from "axios";

export default function HotelBookingForm({ hotelName, bgImage }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        hotelName: hotelName || "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

    const validateDates = (checkIn, checkOut) => {
        const today = new Date().toISOString().split("T")[0];
        if (checkIn < today || checkOut < today) {
            return "Dates cannot be in the past.";
        }
        if (checkIn >= checkOut) {
            return "Check-In date must be before Check-Out date.";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, email, phoneNumber, checkIn, checkOut, roomType, hotelName } = formData;

        if (!fullName || !email || !phoneNumber || !checkIn || !checkOut || !roomType || !hotelName) {
            setError("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        const dateError = validateDates(checkIn, checkOut);
        if (dateError) {
            setError(dateError);
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const payload = {
                fullName,
                email,
                phoneNumber,
                checkIn,
                checkOut,
                roomType,
                hotelName,
            };
            console.log("Payload being sent:", payload); // Debugging log
            await axios.post("http://localhost:8070/room/bookingroom", payload);
            setSuccess("Booking Confirmed!");
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                checkIn: "",
                checkOut: "",
                roomType: "",
                hotelName: hotelName || "",
            });
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.error || err.message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="row justify-content-center" style={{ width: "100vh", }}>
            <div className="col-md-6">
                <div
                    className="container form-container"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        width: "40vw",
                        maxHeight: "80vh", // Limit the height of the container
                        overflowY: "auto", // Enable vertical scrolling
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <form onSubmit={handleSubmit}>
                                <h2
                                    style={{
                                        padding: "30px",
                                        textAlign: "center",
                                        fontSize: "28px",
                                        fontWeight: "600",
                                        color: "#333",
                                    }}
                                >
                                    Hotel Booking Form
                                </h2>

                                {/* Input fields */}
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Enter your full name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneNumber"
                                        placeholder="Enter your phone number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkIn">
                                        Check-In Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkIn"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkOut">
                                        Check-Out Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkOut"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="roomType">
                                        Room Type
                                    </label>
                                    <select
                                        className="form-control"
                                        id="roomType"
                                        name="roomType"
                                        value={formData.roomType}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px", borderRadius: "8px" }}
                                    >
                                        <option value="">Select Room Type</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                        <option value="suite">Suite</option>
                                    </select>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                >
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{
                                            width: "50%",
                                            padding: "15px",
                                            borderRadius: "8px",
                                            fontWeight: "bold",
                                            transition: "background-color 0.3s ease",
                                        }}
                                        disabled={loading}
                                    >
                                        {loading ? "Loading..." : "Submit"}
                                    </button>
                                </div>

                                {error && (
                                    <div
                                        className="alert alert-danger mt-3"
                                        style={{
                                            textAlign: "center",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {error}
                                    </div>
                                )}
                                {success && (
                                    <div
                                        className="alert alert-success mt-3"
                                        style={{
                                            textAlign: "center",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {success}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}