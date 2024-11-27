import React, { useEffect, useState, useCallback } from 'react';
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import q3 from "../assets/q3.jpg";
import q4 from "../assets/q4.jpg";
import q5 from "../assets/q5.jpg";
import q6 from "../assets/q6.jpg";
import q7 from "../assets/q7.jpg";
import q8 from "../assets/q8.jpg";
import q9 from "../assets/q9.jpg";
import q10 from "../assets/q10.jpg";
import q11 from "../assets/q11.jpg";
import q12 from "../assets/q12.jpg";
import q13 from "../assets/q13.jpg";
import q14 from "../assets/q14.jpg";
import q15 from "../assets/q15.jpg";
import q16 from "../assets/q16.jpg";
import q17 from "../assets/q17.jpg";
import q18 from "../assets/q18.jpg";
import q19 from "../assets/q19.jpg";
import q20 from "../assets/q20.jpg";

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setGallery([
      { imageUrl: q1 },
      { imageUrl: q2 },
      { imageUrl: q3 },
      { imageUrl: q5 },
      { imageUrl: q4 },
      { imageUrl: q6 },
      { imageUrl: q7 },
      { imageUrl: q8 },
      { imageUrl: q9 },
      { imageUrl: q10 },
      { imageUrl: q11 },
      { imageUrl: q12 },
      { imageUrl: q13 },
      { imageUrl: q14 },
      { imageUrl: q15 },
      { imageUrl: q16 },
      { imageUrl: q17 },
      { imageUrl: q18 },
      { imageUrl: q19 },
      { imageUrl: q20 },
    ]);
    setIsLoading(false);
  }, []);

  const galleryPageStyles = {
    padding: '30px',
    textAlign: 'center',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f4f4f4',
  };



  const galleryContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    padding: '0 20px',
  };

  const galleryItemStyles = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const galleryImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const modalStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: selectedImage ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    opacity: selectedImage ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const modalImageStyles = {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.5s ease-in-out',
  };

  const closeModalStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1001,
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, closeModal]);

  // Loader Spinner
  const loaderStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    color: '#333',
  };

  return (
    <div style={galleryPageStyles}>
      <h3 style={{
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
        margin: "10px 0",
      }}>එන්න, ශ්‍රී ලංකාවේ අසිරිය අත්විඳින්න.</h3>
      <h3 style={{
        color: "white",
        fontSize: "1.3rem",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
        margin: "10px 0",
      }}>Come, experience the magic of Sri Lanka!</h3>
      <h3 style={{
        color: "white",
        fontSize: "1.3rem",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
        margin: "10px 0"
      }}>இலங்கையின் அற்புதங்களை அனுபவிக்க வாருங்கள்!</h3>

      <br />


      {/* Loading Spinner */}
      {isLoading && <div style={loaderStyles}>Loading...</div>}

      <div style={galleryContainerStyles}>
        {gallery.map((item, index) => (
          <div
            key={index}
            style={galleryItemStyles}
            onClick={() => handleImageClick(item.imageUrl)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={item.imageUrl}
              alt={`Gallery ${index + 1}`}
              style={galleryImageStyles}
            />
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      <div
        style={modalStyles}
        onClick={handleOverlayClick}
      >
        <img
          src={selectedImage}
          alt="Selected Preview"
          style={modalImageStyles}
        />
        <span
          style={closeModalStyles}
          onClick={closeModal}
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default GalleryPage;
