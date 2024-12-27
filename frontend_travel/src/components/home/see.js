import React, { useState } from 'react';
import img3 from "../../assets/see3.jpg";
import img2 from "../../assets/see2.jpg";
import img1 from "../../assets/see1.jpg";

const TravelSite = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    container: {
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      fontFamily: "'Inter', sans-serif" // Ensure you have the font loaded in your project
    },
    header: {
      textAlign: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f5dacc 0%, #804831 100%)',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    },
    title: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #2d3436 0%, #1a1c1d 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeIn 0.8s ease-out'
    },
    subtitle: {
      color: '#666',
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      animation: 'slideUp 0.8s ease-out'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: (index) => ({
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: hoveredCard === index 
        ? '0 22px 40px rgba(0,0,0,0.1)' 
        : '0 4px 12px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      animation: `slideIn 0.6s ease-out ${index * 0.2}s`,
      opacity: 1
    }),
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    content: {
      padding: '28px'
    },
    category: {
      color: '#2d3436',
      fontSize: '13px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '12px',
      display: 'inline-block',
      background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)',
      padding: '6px 12px',
      borderRadius: '4px'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#2d3436',
      marginBottom: '16px',
      lineHeight: '1.3'
    },
    description: {
      color: '#666',
      lineHeight: '1.7',
      marginBottom: '20px',
      fontSize: '16px'
    },
    date: {
      color: '#94a3b8',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideIn {
            from { 
              opacity: 0;
              transform: translateX(-20px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      <header style={styles.header}>
        <h1 style={styles.title}>WHAT'S TO SEE</h1>
        <p style={styles.subtitle}>
          Id sollicitudin lectus gravida quis. Aenean auctor velit justo, 
          ac vulputate magna semper quis.
        </p>
      </header>

      <section style={styles.grid}>
        {[ 
          {
            category: 'Cultural',
            topic: 'Sigiriya',
            para: 'A UNESCO World Heritage site, Sigiriya is an ancient rock fortress with stunning views and historical significance. The climb to the top rewards you with panoramic views of the surrounding landscapes.',
            date: 'From June 11 till Jan 31, 2021',
            image: img1,
          },
          {
            category: 'Nature',
            para: 'Yala National Park, in southeastern Sri Lanka, is known for its leopards, elephants, and diverse wildlife. Its beautiful landscapes make it a popular spot for safaris.',
            topic: 'Yala National Park',
            image: img2,
            date: 'Mon, 12th'
          },
          {
            category: 'Cultural',
            para:'One of the ancient capitals of Sri Lanka, Anuradhapura is known for its well-preserved ruins, including ancient stupas, temples, and ponds.',
            topic: 'Anuradhapura',
            date: 'Open every day',
            image: img3,
          }
        ].map((item, index) => (
          <div
            key={index}
            style={styles.card(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.category}
                style={{
                  ...styles.image,
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />
            )}
            <div style={styles.content}>
              <span style={styles.category}>{item.category}</span>
              <h2 style={styles.cardTitle}>{item.topic}</h2>
              <p style={styles.description}>{item.para}
              </p>
              {item.date && <p style={styles.date}>{item.date}</p>}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TravelSite;
