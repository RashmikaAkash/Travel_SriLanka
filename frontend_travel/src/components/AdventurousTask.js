import React from 'react';
import Header from "../components/header";

function AdventurousTask() {
    return (
        <div>
            <Header />
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0', boxSizing: 'border-box', animation: 'fadeIn 1.5s ease-in-out' }}>
            

            <section style={{ padding: '20px', textAlign: 'center' }}>
                <img 
                    src="https://example.com/adventure.jpg" 
                    alt="Adventure" 
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', marginBottom: '20px', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <p style={{ fontSize: '1.2em', color: '#555', margin: '20px 0' }}>
                    Choose from a variety of adventurous activities tailored to your preferences. Let the excitement begin!
                </p>
            </section>

            <section style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2E7D32', textDecoration: 'underline' }}>Available Adventures</h2>
                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    <li style={{ marginBottom: '20px', padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s', background: 'linear-gradient(to right, #e8f5e9, #f1f8e9)' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <h3 style={{ margin: '0 0 10px', color: '#1B5E20' }}>Mountain Hiking</h3>
                        <p style={{ margin: '0 0 10px', color: '#555' }}>Conquer towering peaks and explore breathtaking landscapes.</p>
                        <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#388E3C'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
                            Book Now
                        </button>
                    </li>
                    <li style={{ marginBottom: '20px', padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s', background: 'linear-gradient(to right, #e8f5e9, #f1f8e9)' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <h3 style={{ margin: '0 0 10px', color: '#1B5E20' }}>Scuba Diving</h3>
                        <p style={{ margin: '0 0 10px', color: '#555' }}>Dive deep into the ocean and experience underwater wonders.</p>
                        <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#388E3C'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
                            Book Now
                        </button>
                    </li>
                    <li style={{ marginBottom: '20px', padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s', background: 'linear-gradient(to right, #e8f5e9, #f1f8e9)' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <h3 style={{ margin: '0 0 10px', color: '#1B5E20' }}>Skydiving</h3>
                        <p style={{ margin: '0 0 10px', color: '#555' }}>Feel the adrenaline rush as you soar through the skies.</p>
                        <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#388E3C'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
                            Book Now
                        </button>
                    </li>
                </ul>
            </section>
        </div>
        </div>
    );
}

export default AdventurousTask;
