import React, { useState } from "react";
import axios from "axios";

export default function AddEmployee() {
    const [uid, setid] = useState("");
    const [hotelname, sethotelName] = useState("");
    const [description, setdescriptionName] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNum, setContactNum] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Email and contact number validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateContactNum = (contact) => {
        const contactRegex = /^[0-9]{10}$/; // Exactly 10 digits
        return contactRegex.test(contact);
    };

    const sendData = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!hotelname || !Email || !ContactNum) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email validation
        if (!validateEmail(Email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Contact number validation
        if (!validateContactNum(ContactNum)) {
            alert("Contact number should be exactly 10 digits.");
            return;
        }

        const newEmp = {
            uid,
            hotelname,
            description,
            Email,
            ContactNum,
            Address,
            City,
        };

        setLoading(true);
        setError("");

        try {
            console.log("Payload being sent:", newEmp); // Debugging log
            await axios.post("http://localhost:8070/hotel/add", newEmp);
            alert("Employee Added");
            // Clear input fields
            setid("");
            sethotelName("");
            setdescriptionName("");
            setEmail("");
            setContactNum("");
            setAddress("");
            setCity("");
        } catch (err) {
            console.error(err);
            const errorMessage = "Error adding employee: " + (err.response?.data?.error || err.message);
            setError(errorMessage);
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                marginBottom: "0px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginTop: "0px",
            }}
        >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div
                        className="container form-container"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                            borderRadius: "10px",
                            marginTop: "30px",
                            marginBottom: "100px",
                        }}
                    >
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <form onSubmit={sendData}>
                                    <h2 style={{ padding: "30px", textAlign: "center" }}>
                                        Register Employee
                                    </h2>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="EID">
                                            Employee ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="EID"
                                            placeholder="Enter Employee ID"
                                            value={uid}
                                            onChange={(e) => setid(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="hotelname">
                                            Employee First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="hotelname"
                                            placeholder="Enter Employee First Name"
                                            value={hotelname}
                                            onChange={(e) => sethotelName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="description">
                                        description
                                        </label>
                                        <input
                                            type="textarea"
                                            className="form-control"
                                            id="description"
                                            placeholder="Enter description"
                                            value={description}
                                            onChange={(e) => setdescriptionName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Employee Email"
                                            value={Email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="contactNum">
                                            Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="contactNum"
                                            placeholder="Enter Contact Number"
                                            value={ContactNum}
                                            onChange={(e) => setContactNum(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="address">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="Enter Address"
                                            value={Address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="city">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder="Enter City"
                                            value={City}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
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
                                            style={{ width: "30%" }}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Submit"}
                                        </button>
                                    </div>
                                    {error && (
                                        <div className="text-danger mt-3">
                                            <strong>{error}</strong>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
