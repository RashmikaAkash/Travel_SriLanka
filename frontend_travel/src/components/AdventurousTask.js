import React from 'react';
import Header from "../components/header";
import adventurous from "../assets/adventurous.jpg";

function AdventurousTask() {
    

    const cardStyle = {
        marginBottom: '20px',
        padding: '20px',
        border: '2px solid #0288d1',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
        transition: 'transform 0.3s',
    };

    const buttonStyle = {
        backgroundColor: '#0288d1',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s',
    };

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


                <section style={{ padding: '20px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#01579b', textDecoration: 'underline' }}>Available Adventures</h2>
                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        {['Mountain Hiking', 'Scuba Diving', 'Skydiving'].map((activity, index) => (
                            <li
                                key={index}
                                style={cardStyle}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <h3 style={{ margin: '0 0 10px', color: '#01579b' }}>{activity}</h3>
                                <p style={{ margin: '0 0 10px', color: '#555' }}>
                                    {activity === 'Mountain Hiking'
                                        ? 'Conquer towering peaks and explore breathtaking landscapes.'
                                        : activity === 'Scuba Diving'
                                            ? 'Dive deep into the ocean and experience underwater wonders.'
                                            : 'Feel the adrenaline rush as you soar through the skies.'}
                                </p>
                                <button
                                    style={buttonStyle}
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#0277bd'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#0288d1'}
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
