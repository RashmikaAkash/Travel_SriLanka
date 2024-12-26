import React, { useState, useEffect } from 'react';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

const PremiumExperience = () => {
  const [animatedStats, setAnimatedStats] = useState({ years: 0, flights: 0, customers: 0 });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(interval);
          return;
        }
        setAnimatedStats({
          years: Math.min(Math.round((12 * currentStep) / steps), 12),
          flights: Math.min(Math.round((12000 * currentStep) / steps), 12000),
          customers: Math.min(Math.round((1400 * currentStep) / steps), 1400),
        });
        currentStep++;
      }, duration / steps);
    };

    setTimeout(animateStats, 500);
  }, []);

  return (
    <div style={styles.container}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.floatingElement,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${15 + i * 2}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(50px, -50px) rotate(90deg); }
            50% { transform: translate(0, -100px) rotate(180deg); }
            75% { transform: translate(-50px, -50px) rotate(270deg); }
          }
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      <div style={styles.contentWrapper}>
        <div style={{ animation: 'slideUp 0.8s ease-out forwards', opacity: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ ...styles.gradientBar }}></div>
            <span style={styles.subHeading}>ABOUT US</span>
          </div>
          <h2 style={styles.heading}>We create unforgettable journeys across the stunning landscapes of Sri Lanka</h2>
          <p style={styles.description}>
          Experience the best of Sri Lanka with our tailor-made travel packages, designed to showcase the island's vibrant culture, breathtaking beaches, lush greenery, and historic sites. From the misty hills of Ella to the golden sands of Mirissa, we bring you closer to the heart of Sri Lanka. Discover the wonders of Sri Lanka and embark on a journey you'll cherish forever.
          </p>
          <button style={styles.button}>
            <span style={styles.buttonInner}>LEARN MORE</span>
          </button>
        </div>

        <div style={styles.imageGrid}>
          <div style={{ ...styles.mainImage, animation: 'scaleIn 0.8s ease-out forwards', opacity: 0 }}>
            <img
              src= {img1}
              alt="Premium service"
              style={styles.image}
            />
          </div>
          <div style={{ ...styles.secondaryImage, animation: 'scaleIn 0.8s ease-out forwards', opacity: 0 }}>
            <img
              src={img2}
              alt="Service detail"
              style={styles.image}
            />
          </div>
        </div>

        <div style={styles.statsSection}>
          {[{ number: animatedStats.years, label: "Years" }, { number: animatedStats.flights, label: "Flights" }, { number: animatedStats.customers, label: "Customers" }].map((stat, i) => (
            <div key={i} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #381b14, #f5dacc, #804831)',
    minHeight: '100vh',
    color: '#ffffff',
    overflow: 'hidden',
    position: 'relative',
    padding: '2rem',
  },
  floatingElement: {
    position: 'absolute',
    width: '16rem',
    height: '16rem',
    background: 'linear-gradient(135deg, rgba(249,115,22,0.4), rgba(236,72,153,0.4))',
    borderRadius: '50%',
    filter: 'blur(24px)',
    animation: 'float 15s linear infinite',
  },
  contentWrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
  },
  gradientBar: {
    height: '4px',
    width: '64px',
    background: 'linear-gradient(to right,rgb(0, 86, 12),rgb(206, 71, 8),rgb(171, 0, 0))',
  },
  subHeading: {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right,rgb(0, 86, 12),rgb(206, 71, 8),rgb(171, 0, 0))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    color: '#F8F8F8',
    margin: '1rem 0',
  },
  button: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: '#381b14',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonInner: {
    color: '#C8C8C8',
    textTransform: 'uppercase',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: '4fr 2fr',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  mainImage: {
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  secondaryImage: {
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '3rem',
  },
  statCard: {
    background: '#381b14',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#94a3b8',
  },
};

export default PremiumExperience;