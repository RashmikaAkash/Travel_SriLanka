import React from 'react';
import Header from "../components/header";
import adventurous from "../assets/adventurous.jpg";

function AdventurousTask() {




    return (
        <div>
            <Header />
            <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0', boxSizing: 'border-box', animation: 'fadeIn 1.5s ease-in-out' }}>
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
                        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '20px',
                    }}>
                        <h1 style={{
                            fontSize: '2.5em',
                            marginBottom: '10px',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                        }}>
                            Adventure Awaits
                        </h1>
                        <p style={{
                            fontSize: '1.2em',
                            lineHeight: '1.5',
                            maxWidth: '800px',
                            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                        }}>
                            Choose from a variety of adventurous activities tailored to your preferences. Let the excitement begin!
                        </p>
                    </div>
                </section>


                <section style={{
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        color: '#01579b',
                        textDecoration: 'underline',
                        fontSize: '2em',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                    }}>
                        Available Adventures
                    </h2>
                    <ul style={{
                        listStyleType: 'none',
                        padding: '0',
                        margin: '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}>
                        {['Mountain Hiking', 'Scuba Diving', 'Skydiving', 'Safari Tour'].map((activity, index) => (
                            <li
                                key={index}
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '15px',
                                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    width: '23%', // Ensures 4 cards fit in a row
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <h3 style={{
                                    margin: '0 0 10px',
                                    color: '#01579b',
                                    fontSize: '1.5em',
                                    fontWeight: 'bold',
                                }}>
                                    {activity}
                                </h3>
                                <p style={{
                                    margin: '0 0 20px',
                                    color: '#555',
                                    lineHeight: '1.5',
                                    fontSize: '1em',
                                }}>
                                    {activity === 'Mountain Hiking'
                                        ? 'Conquer towering peaks and explore breathtaking landscapes.'
                                        : activity === 'Scuba Diving'
                                            ? 'Dive deep into the ocean and experience underwater wonders.'
                                            : activity === 'Skydiving'
                                                ? 'Feel the adrenaline rush as you soar through the skies.'
                                                : 'Embark on an unforgettable journey through the wild.'}
                                </p>
                                <button
                                    style={{
                                        backgroundColor: '#0288d1',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '1em',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#0277bd';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = '#0288d1';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Book Now
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>


            </div>
        </div>
    );
}

export default AdventurousTask;
