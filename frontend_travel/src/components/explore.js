import React, { useState } from 'react';
// Fix the import for the background image
import back from '../assets/eback.jpg';
import Header from 'C:/Users/rashm/OneDrive/Desktop/Travel_SriLanka/frontend_travel/src/components/header';

function Explore() {
    const [hoveredSection, setHoveredSection] = useState(null); // Track hovered section

    // Container for the whole page
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    // Header styles
    const headerStyle = {
        textAlign: 'center',
        padding: '80px 20px', // Increased padding for better spacing
        backgroundImage: `url(${back})`, // Use background image URL correctly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    };

    const headerTitleStyle = {
        fontSize: '3.5rem',
        margin: '0',
        animation: 'fadeIn 1s ease-out',
        zIndex: 2,
    };

    const headerSubtitleStyle = {
        fontSize: '1.6rem',
        marginTop: '10px',
        zIndex: 2,
    };

    // Content Grid Layout Styles
    const contentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '10px',
    };

    // Section card styles with hover effect
    const sectionStyle = (hovered) => ({
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hovered ? '0 8px 20px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)', // Handle hover state dynamically
        backgroundColor: hovered ? '#f1f1f1' : 'white', // Handle hover state dynamically
    });

    // Section heading and description styles
    const sectionTitleStyle = {
        color: "#00534e",
        fontSize: "1.6rem",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        margin: "10px 0",
    };

    const sectionDescriptionStyle = {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '15px',
    };

    // List styles
    const ulStyle = {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    };

    const liStyle = {
        margin: '10px 0',
        fontSize: '1rem',
        lineHeight: '1.6',
    };

    // Button styles
    const buttonStyle = {
        display: 'inline-block',
        marginTop: '10px',
        padding: '10px 20px',
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
    };

    // Handle mouse hover effect for sections
    const handleMouseEnter = (section) => {
        setHoveredSection(section);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
    };

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                <header style={headerStyle}>
                    <h1 style={headerTitleStyle}>Explore Sri Lanka</h1>
                    <p style={headerSubtitleStyle}>
                        Uncover the beauty, culture, and thrilling adventures of Sri Lanka.
                    </p>
                </header>

                <div style={contentStyle}>
                    {/* Natural Beauty Section */}
                    <section
                        style={sectionStyle(hoveredSection === 'naturalBeauty')}
                        onMouseEnter={() => handleMouseEnter('naturalBeauty')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 style={sectionTitleStyle}>🌴 Natural Beauty</h2>
                        <p style={sectionDescriptionStyle}>
                            Immerse yourself in the pristine beaches, lush mountains, and mesmerizing waterfalls of Sri Lanka.
                        </p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Beaches: Unawatuna, Arugam Bay, Mirissa</li>
                            <li style={liStyle}>Mountains: Ella, Nuwara Eliya, Haputale</li>
                            <li style={liStyle}>Waterfalls: Bambarakanda, Dunhinda</li>
                            <li style={liStyle}>National Parks: Yala, Udawalawe</li>
                            <li style={liStyle}>Rainforests: Sinharaja Forest</li>
                        </ul>
                        <a
                            href=" "
                            style={buttonStyle}
                            aria-label="Learn more about natural beauty"
                        >
                            Learn More
                        </a>
                    </section>

                    {/* Cultural Heritage Section */}
                    <section
                        style={sectionStyle(hoveredSection === 'culturalHeritage')}
                        onMouseEnter={() => handleMouseEnter('culturalHeritage')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 style={sectionTitleStyle}>🏛️ Cultural Heritage</h2>
                        <p style={sectionDescriptionStyle}>
                            Discover the rich history and traditions through ancient cities, temples, and cultural festivals.
                        </p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Ancient Cities: Anuradhapura, Polonnaruwa</li>
                            <li style={liStyle}>Temples: Sacred Tooth Relic, Dambulla</li>
                            <li style={liStyle}>Colonial Heritage: Galle Fort</li>
                            <li style={liStyle}>Festivals: Kandy Perahera</li>
                        </ul>
                        <a
                            href=" "
                            style={buttonStyle}
                            aria-label="Learn more about cultural heritage"
                        >
                            Learn More
                        </a>
                    </section>

                    {/* Wildlife & Adventure Section */}
                    <section
                        style={sectionStyle(hoveredSection === 'wildlifeAdventure')}
                        onMouseEnter={() => handleMouseEnter('wildlifeAdventure')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 style={sectionTitleStyle}>🐘 Wildlife and Adventure</h2>
                        <p style={sectionDescriptionStyle}>
                            Experience thrilling safaris, breathtaking hikes, and adventures in nature's lap.
                        </p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Wildlife: Leopards in Yala, Elephants in Minneriya</li>
                            <li style={liStyle}>Whale Watching: Mirissa, Trincomalee</li>
                            <li style={liStyle}>Bird Watching: Bundala National Park</li>
                            <li style={liStyle}>Hiking: Adam's Peak, Knuckles Range</li>
                            <li style={liStyle}>Water Sports: Surfing, Scuba Diving</li>
                        </ul>
                        <a
                            href=" "
                            style={buttonStyle}
                            aria-label="Learn more about wildlife and adventure"
                        >
                            Learn More
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Explore;
