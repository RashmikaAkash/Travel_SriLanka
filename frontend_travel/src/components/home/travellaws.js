import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

const ExploreIsland = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      title: 'TRAVEL DOCUMENTS',
      image: img1,
      description:
        'Ensure you carry a valid passport, visa, and travel insurance. Visitors are required to obtain an ETA (Electronic Travel Authorization) before entering Sri Lanka.',
    },
    {
      title: 'CULTURAL RESPECT',
      image: img2,
      description:
        'When visiting temples or religious sites, dress modestly and remove footwear. Taking photographs inside some religious places might be restricted.',
    },
    {
      title: 'WILDLIFE PROTECTION',
      image: img3,
      description:
        'Avoid activities that harm animals, such as riding elephants or purchasing products made from wildlife. These are regulated under strict laws in Sri Lanka.',
    },
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '2rem',
      gap: '2rem',
      overflow: 'hidden',
      marginTop: '100px',
      marginBottom: '100px',
    },
    cardSection: {
      display: 'flex',
      position: 'relative',
      flex: 1,
      gap: '1rem',
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      backgroundColor: 'white',
      borderRadius: '50%',
      padding: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    card: (isActive, isPrev, isNext) => ({
      position: 'relative',
      flex: 1,
      overflow: 'hidden',
      borderRadius: '0.5rem',
      opacity: isActive ? 1 : 0.7,
      transform: `scale(${isActive ? 1 : 0.95}) translateX(${isPrev ? '-1rem' : isNext ? '1rem' : 0})`,
      transition: 'all 0.7s ease-in-out',
    }),
    cardImage: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      transition: 'background-color 0.5s ease',
    },
    cardContent: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1.5rem',
      color: 'white',
      transform: 'translateY(0.5rem)',
      transition: 'transform 0.5s ease',
    },
    contentSection: {
      width: '20rem',
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#804831',
    },
    description: {
      color: '#4B5563',
      marginTop: '1rem',
    },
    button: {
      backgroundColor: '#804831',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.375rem',
      marginTop: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Card Section */}
      <div style={styles.cardSection}>
        <button
          onClick={prevSlide}
          style={{ ...styles.navButton, left: '-1rem' }}
          aria-label="Previous Slide"
          onMouseOver={(e) => (e.target.style.transform = 'translateY(-50%) scale(1.1)')}
          onMouseOut={(e) => (e.target.style.transform = 'translateY(-50%)')}
        >
          <ChevronLeft size={24} />
        </button>

        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index === activeIndex - 1 || (activeIndex === 0 && index === cards.length - 1);
          const isNext =
            index === activeIndex + 1 || (activeIndex === cards.length - 1 && index === 0);

          return (
            <div
              key={card.title}
              style={styles.card(isActive, isPrev, isNext)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = `scale(${isActive ? 1.05 : 0.95})`;
                e.currentTarget.querySelector('.overlay').style.backgroundColor =
                  'rgba(0, 0, 0, 0.3)';
                e.currentTarget.querySelector('.content').style.transform = 'translateY(0)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = `scale(${isActive ? 1 : 0.95})`;
                e.currentTarget.querySelector('.overlay').style.backgroundColor =
                  'rgba(0, 0, 0, 0.4)';
                e.currentTarget.querySelector('.content').style.transform = 'translateY(0.5rem)';
              }}
            >
              <img src={card.image} alt={card.title} style={styles.cardImage} />
              <div className="overlay" style={styles.overlay}></div>
              <div className="content" style={styles.cardContent}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.875rem' }}>{card.description}</p>
              </div>
            </div>
          );
        })}

        <button
          onClick={nextSlide}
          style={{ ...styles.navButton, right: '-1rem' }}
          aria-label="Next Slide"
          onMouseOver={(e) => (e.target.style.transform = 'translateY(-50%) scale(1.1)')}
          onMouseOut={(e) => (e.target.style.transform = 'translateY(-50%)')}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Content Section */}
      <div style={styles.contentSection}>
        <h2 style={styles.title}>EXPLORE THE LAWS</h2>
        <p style={styles.description}>
        Each regulation ensures the safety of travelers and the preservation of Sri Lanka’s rich heritage. Abiding by these guidelines ensures a worry-free journey through paradise!
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#8d5a46';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#804831';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ExploreIsland;
