import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Header from '../components/header'; // Adjust the path to your Header component

function Rentcar() {
    const initScene = (containerId, modelPath, initialPosition, initialScale) => {
        const container = document.getElementById(containerId);

        // Create a Three.js Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0); // Light gray background for contrast

        // Set up the Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            container.offsetWidth / container.offsetHeight,
            0.1,
            1000
        );
        camera.position.set(40, 40, 10); // Adjusted for a better initial view

        // Create a Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Softer ambient light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        const hemisphereLight = new THREE.HemisphereLight(0x606060, 0x404040, 1); // Diffuse light from above
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

                // Automatically center the model within the view
                const boundingBox = new THREE.Box3().setFromObject(model);
                const center = boundingBox.getCenter(new THREE.Vector3());
                const size = boundingBox.getSize(new THREE.Vector3());

                model.position.sub(center); // Center the model
                camera.position.z = size.length() * 2; // Adjust camera distance based on model size
            },
            undefined,
            (error) => console.error(`Error loading model (${modelPath}):`, error)
        );

        // Create OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.minDistance = 5; // Prevent zooming in too close
        controls.maxDistance = 50; // Prevent zooming out too far
        controls.maxPolarAngle = Math.PI / 2.1; // Limit vertical rotation (to prevent going underneath)

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

        // Cleanup function
        return () => {
            window.removeEventListener('resize', onResize);
            container.innerHTML = ''; // Clear renderer
        };
    };

    useEffect(() => {
        const cleanupFunctions = [
            initScene('elephant-container', '/models/2001_crown_victoria_taxi_game_prop.glb', [0, 0, 0], [9, 9, 9]),
            initScene('tree-container', '/models/tuk_tuk_rikshaw.glb', [0, 0, 0], [12.5, 12.5, 12.5]),
            initScene('bird-container', '/models/nissan_van.glb', [0, 0, 0], [-9,9, -9]),
        ];

        // Cleanup on unmount
        return () => cleanupFunctions.forEach((cleanup) => cleanup());
    }, []);

    return (
        <div>
            <Header />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <header
                    style={{
                        textAlign: 'center',
                        padding: '80px 20px',
                        backgroundColor: '#00534e',
                        color: 'white',
                        borderRadius: '8px',
                        marginBottom: '10px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                    }}
                >
                    <h1 style={{ fontSize: '3.5rem', margin: '0' }}>Explore 3D Models</h1>
                    <p style={{ fontSize: '1.6rem', marginTop: '10px' }}>
                        Discover interactive 3D models of various objects.
                    </p>
                </header>
            </div>

            {/* Model Containers */}
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
                {/* car Model */}
                <div
                    id="elephant-container"
                    style={{
                        height: '400px',
                        width: '400px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        margin: '20px',
                    }}
                >
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>Elephant Model</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
            {/* Tree Model */}
            <div
                    id="tree-container"
                    style={{
                        height: '400px',
                        width: '400px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        margin: '20px',
                    }}
                >
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>Tree Model</p>
                </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
                {/* Bird Model */}
                <div
                    id="bird-container"
                    style={{
                        height: '400px',
                        width: '400px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        margin: '20px',
                    }}
                >
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>Bird Model</p>
                </div>
                </div>
        </div>
    );
}

export default Rentcar;
