import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
import back from '../assets/eback.jpg';
import Header from '../components/header'; // Adjust the path to your Header component

function Explore() {
    const [hoveredSection, setHoveredSection] = useState(null); // Track hovered section

    useEffect(() => {
        // Select the container for Three.js
        const container = document.getElementById('three-container');

        // Create a Three.js Scene
        const scene = new THREE.Scene();

        // Set up the Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            container.offsetWidth / container.offsetHeight,
            0.1,
            1000
        );
        camera.position.set(20, 2, 31);

        // Create a Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0xffffff, 1); // Set background color to white
        container.appendChild(renderer.domElement);

        // Add Lighting
        const light = new THREE.DirectionalLight(0xffffff, 6); // Increased intensity to 6
        light.position.set(1, 5, 7.5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040, 4); // Increased intensity to 4
        scene.add(ambientLight);

        // Additional light for extra brightness from different angles
        const pointLight1 = new THREE.PointLight(0xffffff, 4, 100); // Increased intensity to 4
        pointLight1.position.set(10, 5, 10); // Light from above
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 4, 100); // Increased intensity to 4
        pointLight2.position.set(10, -5, 10); // Light from below
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xffffff, 4, 100); // Increased intensity to 4
        pointLight3.position.set(10, 0, 10); // Light from the right
        scene.add(pointLight3);

        const pointLight4 = new THREE.PointLight(0xffffff, 4, 100); // Increased intensity to 4
        pointLight4.position.set(-10, 0, 10); // Light from the left
        scene.add(pointLight4);

        // Hemisphere Light to brighten from all angles
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040, 3); // Increased intensity to 3
        scene.add(hemisphereLight);

        // Load Elephant Model
        const loader = new GLTFLoader();
        loader.load(
            '/models/elephant_cycle.glb', // Path to your public/models directory
            (gltf) => {
                const elephant = gltf.scene;
                elephant.scale.set(5, 5, -5); // Adjust the scale as needed
                elephant.position.set(0, -10, 0); // Move the elephant down to avoid floating above
                scene.add(elephant);
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        // Create OrbitControls for mouse interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooths camera movement
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2; // Prevents the camera from going below the scene
        controls.minPolarAngle = Math.PI / 2; // Prevents the camera from moving above the scene

        // Update the camera aspect ratio when the window is resized
        const onResize = () => {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };

        window.addEventListener('resize', onResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping = true, or if controls.auto-rotation is enabled
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', onResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    // Content Grid Layout Styles
    const contentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '10px',
        maxWidth: '1200px'
        , margin: '0 auto',
        marginTop: '10px',
        marginBottom: '40px',



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

    // Handle mouse hover effect for sections
    const handleMouseEnter = (section) => {
        setHoveredSection(section);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
    };

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

    return (
        <div>
            <Header />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <header
                    style={{
                        textAlign: 'center',
                        padding: '80px 20px',
                        backgroundImage: `url(${back})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        borderRadius: '8px',
                        marginBottom: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                    }}
                >
                    <h1 style={{ fontSize: '3.5rem', margin: '0' }}>Explore Sri Lanka</h1>
                    <p style={{ fontSize: '1.6rem', marginTop: '10px' }}>
                        Uncover the beauty, culture, and thrilling adventures of Sri Lanka.
                    </p>
                </header>
            </div>

            <div style={{
                height: '80vh',
            
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
                //display: "flex",
                //justifyContent: "space-between",
                //flexWrap: "wrap",
                //margin: "50px auto",
                //width: "98%",
                maxWidth: "1900px",
            }}>
                {/* 3D Animation Container */}
                <div id="three-container" style={{
                    height: '80vh',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}></div>

                <div style={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                    color: "black",
                    padding: "40px",
                    marginRight: '50px',
                }}>

                    <>
                        <strong>Elephants hold significant cultural and religious value in Sri Lanka. They are deeply revered in both Buddhist traditions and local customs, symbolizing strength, wisdom, and grace. Here are some key aspects of their cultural value:</strong><br /><br></br>
                        <ol>
                            <li>Religious Significance: Elephants are associated with Buddhism in Sri Lanka, particularly in the context of the country's most sacred relic, the Tooth Relic of the Buddha, which is housed in the Temple of the Tooth (Sri Dalada Maligawa) in Kandy. Elephants play a key role in the annual Kandy Esala Perahera, a grand religious procession. The elephants carry the sacred relic in the parade, and their presence is believed to bring blessings to the people.</li>

                            <li>Conservation and Preservation: Sri Lanka is home to a significant population of wild elephants, and there are various cultural and national efforts to protect them. <strong>The Sri Lankan elephant</strong> (Elephas maximus maximus) is considered an endangered species, and conservation projects often involve local communities, with a cultural focus on preserving their traditional role in Sri Lankan life.</li>

                        </ol>
                        <h6>Their cultural presence is revered and protected, with many Sri Lankans viewing elephants as sacred beings with deep spiritual significance.</h6>

                    </>
                </div>


            </div>

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
                        href="/naturalbeauty"
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
    );
}

export default Explore;
