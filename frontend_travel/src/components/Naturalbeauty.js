import React, { useState } from "react";
import Header from "../components/exploreheader"; // Adjust the path to your Header component
import culturalheritage from "../assets/culturalheritage.webp";
import ellanature from "../assets/ellanature.jpg";
import Sigiriya from "../assets/sigiriyanature.jpg";
import NuwaraEliya from "../assets/NuwaraEliya.jpg";

function NaturalBeauty() {
    const styles = {
        container: {
            fontFamily: "'Roboto', sans-serif",
            margin: "0 auto",
            padding: "20px",
            maxWidth: "1200px",
            color: "#333",
        },
        header: {
            position: "relative",
            textAlign: "center",
            padding: "80px 20px",
            backgroundImage: `url(${culturalheritage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            color: "white",
        },
        headerOverlay: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
        },
        headerContent: {
            position: "relative",
            zIndex: 1,
        },
        mainContent: {
            marginTop: "20px",
        },
        section: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            color: "black",
        },
        image: {
            width: "40%",
            borderRadius: "10px",
        },
        text: {
            flex: 1,
            marginLeft: "20px",
            fontSize: "16px",
            lineHeight: "1.6",
        },
        title: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
    };

    const locations = [
        {
            title: "Ella",
            description: (
                <>
                    Ella is a small town in the central highlands of Sri Lanka,
                    renowned for its stunning natural beauty, tea plantations,
                    and cool climate. <br /><br />
                    <strong>Popular Attractions in Ella:</strong>
                    <ul>
                        <li>Ella Rock</li>
                        <li>Nine Arches Bridge</li>
                        <li>Little Adam's Peak</li>
                        <li>Ravana Falls</li>
                    </ul>
                    <strong>Cultural and Historical Significance:</strong>
                    <ul>
                        <li>The nearby Ravana Cave is believed to be part of this ancient epic.</li>
                        <li>Ella has a strong connection to local folklore, including the story of King Ravana from the Ramayana.</li>
                    </ul>
                    <strong>Activities:</strong>
                    <ul>
                        <li>Hiking and Trekking: Popular trails include Ella Rock and Little Adam's Peak.</li>
                        <li>Tea Plantations: Visit tea estates to learn about tea production.</li>
                        <li>Relaxation: Enjoy the tranquil ambiance and cool weather.</li>
                    </ul>
                </>
            ),
            image: ellanature,
            href: "https://www.visitella.com/", // Update with actual link if necessary
        },
        {
            title: "Sigiriya - The Lion Rock of Sri Lanka",
            description: (
                <>
                    Sigiriya, also known as Lion Rock, is one of Sri Lanka's most iconic landmarks and a UNESCO World Heritage Site. It is a massive rock fortress and palace located in the Matale District, near the town of Dambulla. Sigiriya is celebrated for its archaeological, historical, and artistic significance. <br /><br />
                    <strong>Historical Background</strong>
                    <ul>
                        <li>Built by King Kashyapa I (477–495 CE), Sigiriya served as his royal residence and fortress.</li>
                        <li>After King Kashyapa's death, it was transformed into a Buddhist monastery until the 14th century.</li>
                    </ul>
                    <strong>Key Attractions at Sigiriya</strong>
                    <ol>
                        <li>Lion's Staircase:</li>
                        
                        <ul>
                            <li>The name "Sigiriya" (Sinhala: Sinhagiri) means "Lion Rock.</li>
                            <li>The rock’s entrance features a gigantic lion statue, now partially destroyed. The paws still remain, showcasing the grand scale of the sculpture.</li>
                        </ul><br/>

                        <li>Sigiriya Frescoes:</li>

                        <ul>
                            <li>On the rock face are ancient frescoes, believed to depict celestial maidens or apsaras. These paintings are considered masterpieces of Sri Lankan art.</li>
                        </ul><br/>
                    </ol>
                    <strong>Significance</strong>
                    <ul>
                        <li>Architectural Marvel: Sigiriya is an incredible combination of natural beauty and human ingenuity.</li>
                        <li>Cultural Value: It reflects Sri Lanka's rich history, art, and architecture.</li>
                        <li>Tourism: A must-visit destination, it draws visitors from around the globe.</li>
                    </ul>
                </>
            ),
            image: Sigiriya,
            href: "/sigiriya", // Update with actual link if necessary
        },
        {
            title: "Nuwara Eliya - The Little England of Sri Lanka",
            description: (
                <>
                    Nuwara Eliya is a charming hill station town in central Sri Lanka, often referred to as "Little England" due to its colonial architecture and cool, temperate climate. It is known for its lush green landscapes, tea plantations, and serene atmosphere, making it a popular destination for tourists seeking a retreat from the heat of the lowlands.<br /><br />
                    <strong>Key Attractions in Nuwara Eliya</strong>
                    <ol>
                        <li>Gregory Lake</li>
                        <li>Hakgala Botanical Gardens</li>
                        <li>Nuwara Eliya Golf Course</li>
                        <li>Tea Plantations and Factories</li>
                        <li>Seetha Amman Temple</li>
                        <li>Lovers' Leap Waterfall</li>
                        <li>Victoria Park</li>
                    </ol>
                    <strong>Cultural and Historical Significance</strong>
                    <ul>
                        <li>Colonial Heritage: The town was developed during the British colonial era and many buildings reflect English-style architecture. It became a popular retreat for British officials seeking cooler weather during the hot months.</li>
                        <li>Climate: The cool climate of Nuwara Eliya, with temperatures ranging from 15°C to 20°C, makes it an ideal escape from the tropical heat of the lowlands.</li>
                    </ul>
                    <strong>Best Time to Visit</strong>
                    <ul>
                        <li>The best time to visit is between December and April, when the weather is cooler and more pleasant for sightseeing and outdoor activities.</li>
                        <li>Be prepared for occasional rain during the monsoon season (May to September).</li>
                    </ul>
                </>
            ),
            image: NuwaraEliya, // Replace with actual path
            href: "/nuwara-eliya", // Update with actual link if necessary
        },
    ];

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div>
            <Header />
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={styles.headerOverlay}></div>
                    <div style={styles.headerContent}>
                        <h1>Discover the Natural Beauty of Sri Lanka</h1>
                        <p>A journey through paradise on earth!</p>
                    </div>
                </header>
                <main style={styles.mainContent}>
                    {locations.map((location, index) => (
                        <a href={location.href} key={index} style={{ textDecoration: 'none' }}>
                            <section
                                style={{
                                    ...styles.section,
                                    transform: hoverIndex === index ? "scale(1.02)" : "scale(1)",
                                    boxShadow: hoverIndex === index ? "0 6px 12px rgba(0, 0, 0, 0.2)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
                                }}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <img
                                    src={location.image}
                                    alt={location.title}
                                    style={styles.image}
                                />
                                <div style={styles.text}>
                                    <h2 style={styles.title}>{location.title}</h2>
                                    <p>{location.description}</p>
                                </div>
                            </section>
                        </a>
                    ))}
                </main>
            </div>
        </div>
    );
}

export default NaturalBeauty;
