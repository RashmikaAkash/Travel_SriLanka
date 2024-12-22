import React, { useState } from 'react';

function BookingForm({ activityName, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        participants: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call or console log)
        console.log('Booking Details:', { activityName, ...formData });
        alert('Your booking has been submitted successfully!');
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                width: '400px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
            }}>
                <h2 style={{ marginBottom: '20px', color: '#45a049' }}>Book Your Adventure</h2>
                <p style={{ marginBottom: '20px' }}>You are booking: <strong>{activityName}</strong></p>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="number"
                            name="participants"
                            min="1"
                            placeholder="Number of Participants"
                            value={formData.participants}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                            }}
                        />
                    </div>
                    <button type="submit" style={{
                        backgroundColor: "#4CAF50",
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1em',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}>
                        Confirm Booking
                    </button>
                    <button type="button" onClick={onClose} style={{
                        backgroundColor: "#ddd",
                        color: '#333',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1em',
                        cursor: 'pointer',
                    }}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
