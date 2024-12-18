import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header';
import back from '../../assets/rentback.png';
import axios from "axios";

function BookingPage() {
    const location = useLocation();
    const { title, price, details } = location.state || {};

    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        address: '',
        nic: '',
        passportNumber: '',
        rentDate: ''
    });

    const [loading, setLoading] = useState(false);  // Fix here
    const [error, setError] = useState("");  // Fix here

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const validateContactNum = (contactNum) => /^\d{10}$/.test(contactNum);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, contactNumber, email, address, nic, passportNumber, rentDate } = formData;

        // Basic validation
        if (!name || !contactNumber || !email || !address || !nic || !passportNumber || !rentDate) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Contact number validation
        if (!validateContactNum(contactNumber)) {
            alert("Contact number should be exactly 10 digits.");
            return;
        }

        const bookingData = {
            name,
            contactNumber,
            email,
            address,
            nic,
            passportNumber,
            rentDate,
            title, // Adding the title from the location state
            price, // Adding the price from the location state
            details, // Adding the details from the location state
        };

        setLoading(true);
        setError("");

        try {
            console.log("Payload being sent:", bookingData); // Debugging log
            await axios.post("http://localhost:8070/rent/rent", bookingData);
            alert("Booking Confirmed");
            // Clear input fields
            setFormData({
                name: '',
                contactNumber: '',
                email: '',
                address: '',
                nic: '',
                passportNumber: '',
                rentDate: ''
            });
        } catch (err) {
            console.error(err);
            const errorMessage = "Error confirming booking: " + (err.response?.data?.error || err.message);
            setError(errorMessage);
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />       
            <div
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                Width: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
              
            }}
        >
            
            <div style={{
                padding: '30px',
                maxWidth: '700px',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '70px',
                marginTop: '70px'
            }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#333' }}>Booking Page</h1>
                {title ? (
                    <div>
                        <h2 style={{ margin: '20px 0', fontSize: '1.8rem', fontWeight: 'bold', color: '#4CAF50' }}>{title}</h2>
                        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>{details}</p>
                        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', margin: '15px 0' }}>
                            Price per 1km: <span style={{ color: '#4CAF50' }}>{price}</span>
                        </p>

                        <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Contact Number:</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Enter your contact number"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>NIC:</label>
                                <input
                                    type="text"
                                    name="nic"
                                    placeholder="Enter your NIC number"
                                    value={formData.nic}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Passport Number:</label>
                                <input
                                    type="text"
                                    name="passportNumber"
                                    placeholder="Enter your passport number"
                                    value={formData.passportNumber}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Rent Date:</label>
                                <input
                                    type="date"
                                    name="rentDate"
                                    value={formData.rentDate}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    padding: '15px 30px',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'block',
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                ) : (
                    <p style={{ textAlign: 'center', color: '#888', fontSize: '1.2rem' }}>Booking details not available. Please select a vehicle.</p>
                )}
            </div>
        </div>
        </div>
    );
}

export default BookingPage;
