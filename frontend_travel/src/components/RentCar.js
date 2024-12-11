import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Header from '../components/header'; // Adjust the path to your Header component
import rentbanner from "../assets/rentbanner.jpg";

const ModelContainer = ({ id, modelName, modelPath, initialPosition, initialScale, title, price, details }) => {
    useEffect(() => {
        const container = document.getElementById(id);

        if (!container) return;

        // Create a Three.js Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        // Set up the Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            container.offsetWidth / container.offsetHeight,
            0.1,
            1000
        );
        camera.position.set(500, 50, 0);

        // Create a Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        const hemisphereLight = new THREE.HemisphereLight(0x606060, 0x404040, 1);
        scene.add(hemisphereLight);

        // Load Model
        const loader = new GLTFLoader();
        loader.load(
            modelPath,
            (gltf) => {
                const model = gltf.scene;
                model.position.set(...initialPosition);
                model.scale.set(...initialScale);
                scene.add(model);

                // Center the model
                const boundingBox = new THREE.Box3().setFromObject(model);
                const center = boundingBox.getCenter(new THREE.Vector3());
                const size = boundingBox.getSize(new THREE.Vector3());

                model.position.sub(center); // Center the model
                camera.position.z = size.length() * 2;
            },
            undefined,
            (error) => console.error(`Error loading model (${modelPath}):`, error)
        );

        // Create OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.minDistance = 5;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI / 2.1;

        // Handle window resize
        const onResize = () => {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };

        window.addEventListener('resize', onResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
            container.innerHTML = ''; // Clear renderer
        };
    }, [id, modelPath, initialPosition, initialScale]);

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '350px',
                height: '450px', // Set fixed height for consistency
                margin: '15px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
            }}
        >
            <div
                id={id}
                style={{
                    height: '250px', // Ensure the model container has a consistent height
                    backgroundColor: '#f9f9f9',
                    borderBottom: '1px solid #ddd',
                    position: 'relative',
                }}
            ></div>
            <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 15px', fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h3>
                <p style={{ margin: '0 0 10px', fontSize: '1rem', color: '#666' }}>{details}</p>
                <p style={{ margin: '0 0 15px', fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>
                    Price per 1km: {price}
                </p>
                <button
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#4CAF50', // Updated background color
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onClick={() => alert(`Booking ${title}`)}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')} // Slight darkening on hover
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')} // Original color
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

function Rentcar() {
    const models = [
        {
            id: 'car-container',
            name: 'Car',
            path: '/models/2001_crown_victoria_taxi_game_prop.glb',
            position: [0, 0, 0],
            scale: [9, 9, 9],
            title: 'Car',
            price: '$0.50/km',
            details: 'Comfortable spacious car ideal for rides.',
        },
        {
            id: 'tuk-container',
            name: 'Tuk',
            path: '/models/tuk_tuk_rikshaw.glb',
            position: [0, 0, 0],
            scale: [15.5, 15.5, 15.5],
            title: 'Tuk Tuk',
            price: '$0.30/km',
            details: 'A quirky ride for short city commutes.',
        },
        {
            id: 'van-container',
            name: 'Van',
            path: '/models/nissan_van.glb',
            position: [0, 0, 0],
            scale: [10, 10, 10],
            title: 'Family Van',
            price: '$0.70/km',
            details: 'Perfect group travel, ample storage space.',
        },
        {
            id: 'bike-container',
            name: 'Bike',
            path: '/models/ktm_dirt_bike.glb',
            position: [0, 0, 0],
            scale: [25.5, 25.5, 25.5],
            title: 'Dirt Bike',
            price: '$0.40/km',
            details: 'Ideal for adventurous and off-road trips.',
        },
        {
            id: 'scooter-container',
            name: 'Scooter',
            path: '/models/vino.glb',
            position: [0, 0, 0],
            scale: [26.5, 26.5, 26.5],
            title: 'Electric Scooter',
            price: '$0.20/km',
            details: 'Eco-friendly and easy for short trips.',
        },
        {
            id: 'bus-container',
            name: 'Bus',
            path: '/models/japanese_bus_nagoya_city_bus_aichi.glb',
            position: [0, 0, 0],
            scale: [5, 5, 5],
            title: 'City Bus',
            price: '$1.50/km',
            details: 'Perfect for large groups and city tours.',
        },
    ];

    return (
        <div>
            <Header />
            <div
    style={{
        textAlign: 'center',
        padding: '100px 20px',
        backgroundImage: `url(${rentbanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
    }}
>
    {/* Gradient overlay to improve text visibility */}
    <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
            zIndex: 1,
        }}
    ></div>
    <h1
        style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            zIndex: 2,
            position: 'relative',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)', // Text shadow for contrast
        }}
    >
        Rent Your Ride
    </h1>
    <p
        style={{
            fontSize: '1.3rem',
            maxWidth: '900px',
            margin: '0 auto',
            zIndex: 2,
            position: 'relative',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)', // Text shadow for contrast
        }}
    >
        Choose from a wide variety of vehicles, perfect for every need and adventure.
    </p>
</div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    margin: '0 auto',
                    maxWidth: '1200px',
                    paddingBottom: '50px',
                }}
            >
                {models.map((model, index) => (
                    <ModelContainer
                        key={index}
                        id={model.id}
                        modelName={model.name}
                        modelPath={model.path}
                        initialPosition={model.position}
                        initialScale={model.scale}
                        title={model.title}
                        price={model.price}
                        details={model.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Rentcar;
