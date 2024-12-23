import React, { useState } from 'react';
import Header from "../components/header";
import adventurous from "../assets/adventurous.jpg";
import mh from "../assets/mh.jpg";
import sd from "../assets/sd.jpg";
import sf from "../assets/sf.jpg";
import st from "../assets/st.jpg";
import ss from "../assets/ss.jpg";
import kk from "../assets/kk.jpg";
import hb from "../assets/hb.jpg";
import ww from "../assets/ww.jpg";

function AdventurousTask() {
    const [showForm, setShowForm] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        nic: '',
        passportNumber: '',
        address: '',
        contactNumber: '',
        email: '',
        price: 0,  // Add a price field to store the selected activity's price
    });

    const activities = [
        { name: 'Mountain Hiking', image: mh, description: 'Conquer towering peaks and explore breathtaking landscapes.', price: 150 },
        { name: 'Scuba Diving', image: sd, description: 'Dive deep into the ocean and experience underwater wonders.', price: 200 },
        { name: 'Surfing', image: sf, description: 'Sri Lanka is perfect for surfing with warm waters and year-round waves.', price: 100 },
        { name: 'Safari Tour', image: st, description: 'Embark on an unforgettable journey through the wild.', price: 180 },
        { name: 'Ziplining', image: ss, description: 'Ziplining in Sri Lanka offers thrilling rides with stunning views.', price: 120 },
        { name: 'Kayaking', image: kk, description: 'Kayaking in Sri Lanka lets you explore serene rivers and coasts.', price: 90 },
        { name: 'Hot Air Balloon', image: hb, description: 'Hot air balloon rides in Sri Lanka offer breathtaking aerial views.', price: 250 },
        { name: 'White water rafting', image: ww, description: 'White water rafting in Sri Lanka offers thrilling rapids and scenic views.', price: 130 },
    ];

    const handleBookNow = (activity) => {
        setSelectedActivity(activity);
        setShowForm(true);
        // Set the price for the activity when it's selected
        setFormData((prevState) => ({
            ...prevState,
            price: activity.price,
        }));
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedActivity(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            ...formData,
            activityName: selectedActivity.name, // Activity name
            activityPrice: selectedActivity.price, // Price from selected activity
            bookingDate: new Date(),
        };

        try {
            const response = await fetch('http://localhost:8070/booktask/booktask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData), // Ensure price is included
            });

            const result = await response.json();
            if (response.ok) {
                alert('Booking successfully confirmed!');
                handleCloseForm(); // Close the form after successful booking
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to confirm booking.');
        }
    };

    return (
        <div>
            <Header />
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0', boxSizing: 'border-box' }}>
                <section style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    backgroundImage: `url(${adventurous})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    overflow: 'hidden',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '20px',
                    }}>
                        <h1 style={{ fontSize: '2.5em', marginBottom: '10px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
                            Adventure Awaits
                        </h1>
                        <p style={{ fontSize: '1.2em', lineHeight: '1.5', maxWidth: '800px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
                            Choose from a variety of adventurous activities tailored to your preferences. Let the excitement begin!
                        </p>
                    </div>
                </section>

                <section style={{ padding: '40px' }}>
                    <h4 style={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        color: 'rgba(169, 169, 169, 0.8)',
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        letterSpacing: '1.9px',
                        textTransform: 'uppercase',
                        padding: '10px',
                        borderBottom: '2px solid rgba(169, 169, 169, 0.8)',
                    }}>
                        Available Adventures
                    </h4>

                    <ul style={{
                        listStyleType: 'none',
                        padding: '0',
                        margin: '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}>
                        {activities.map((activity, index) => (
                            <li
                                key={index}
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '15px',
                                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    width: '23%',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                        marginBottom: '15px',
                                    }}
                                />
                                <h3 style={{ margin: '0 0 10px', color: '#45a049', fontSize: '1.5em', fontWeight: 'bold' }}>
                                    {activity.name}
                                </h3>
                                <p style={{ margin: '0 0 20px', color: '#555', lineHeight: '1.5', fontSize: '1em' }}>
                                    {activity.description}
                                </p>
                                <p style={{ margin: '0 0 20px', fontWeight: 'bold', color: '#333' }}>
                                    Price: ${activity.price}
                                </p>
                                <button
                                    style={{
                                        backgroundColor: "#4CAF50",
                                        color: '#fff',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '1em',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                                    }}
                                    onClick={() => handleBookNow(activity)}
                                >
                                    Book Now
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                {showForm && selectedActivity && (
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
                    }}>
                        <div style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '400px',
                            textAlign: 'center',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}>
                            <h2 style={{ marginBottom: '20px', color: '#45a049' }}>Book Your Adventure</h2>
                            <p style={{ marginBottom: '20px' }}>
                                You are booking: <strong>{selectedActivity.name}</strong><br />
                                Price: <strong>${selectedActivity.price}</strong>
                            </p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                                <input
                                    placeholder="NIC"
                                    type="text"
                                    name="nic"
                                    value={formData.nic}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                                <input
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                                <input
                                    placeholder="Passport Number"
                                    type="text"
                                    name="passportNumber"
                                    value={formData.passportNumber}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                                <textarea
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    style={textareaStyle}
                                ></textarea>
                                <input
                                    placeholder="Contact Number"
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                                <button type="submit" style={submitStyle}>Confirm Booking</button>
                            </form>
                            <button onClick={handleCloseForm} style={closeButtonStyle}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    height: '100px',
};

const submitStyle = {
    backgroundColor: '#45a049',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const closeButtonStyle = {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
};

export default AdventurousTask;
