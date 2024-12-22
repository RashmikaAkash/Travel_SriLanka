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
    const [selectedActivity, setSelectedActivity] = useState("");

    const activities = [
        { name: 'Mountain Hiking', image: mh, description: 'Conquer towering peaks and explore breathtaking landscapes.' },
        { name: 'Scuba Diving', image: sd, description: 'Dive deep into the ocean and experience underwater wonders.' },
        { name: 'Surfing', image: sf, description: 'Sri Lanka is perfect for surfing with warm waters and year-round waves.' },
        { name: 'Safari Tour', image: st, description: 'Embark on an unforgettable journey through the wild.' },
        { name: 'Ziplining', image: ss, description: 'Ziplining in Sri Lanka offers thrilling rides with stunning views.' },
        { name: 'Kayaking', image: kk, description: 'Kayaking in Sri Lanka lets you explore serene rivers and coasts.' },
        { name: 'Hot Air Balloon', image: hb, description: 'Hot air balloon rides in Sri Lanka offer breathtaking aerial views.' },
        { name: 'White water rafting', image: ww, description: 'White water rafting in Sri Lanka offers thrilling rapids and scenic views.' },
    ];

    const handleBookNow = (activityName) => {
        setSelectedActivity(activityName);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedActivity("");
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
                                    onClick={() => handleBookNow(activity.name)}
                                >
                                    Book Now
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                {showForm && (
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
                            <p style={{ marginBottom: '20px' }}>You are booking: <strong>{selectedActivity}</strong></p>
                            <form>
                                <div style={{ marginBottom: '10px' }}>
                                    <input type="text" placeholder="Your Name" style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        marginBottom: '10px',
                                    }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <input type="email" placeholder="Your Email" style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                    }} />
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
                                }}>
                                    Confirm Booking
                                </button>
                            </form>
                            <button
                                onClick={handleCloseForm}
                                style={{
                                    marginTop: '10px',
                                    backgroundColor: '#ddd',
                                    color: '#333',
                                    padding: '10px 20px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontSize: '1em',
                                    cursor: 'pointer',
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdventurousTask;
