import React, { useState, useEffect, useCallback } from "react";
import hotel from "../assets/hotel.jpg";
import car from "../assets/car.jpg";
import trip from "../assets/trip.jpg";
import cruise from "../assets/cruise.jpg";
import tour from "../assets/tour.jpg";
import flight from "../assets/flight.jpg";
import bus from "../assets/bus.jpg";
import train from "../assets/train.jpg";
import tuktuk from "../assets/tuktuk.jpg";
import domesticFlight from "../assets/domesticFlight.jpg";
import Header from 'C:/Users/rashm/OneDrive/Desktop/Travel_SriLanka/frontend_travel/src/components/header';

const Booking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hotel,
      title: "Book Your Hotel",
      description: "Find the best hotels at the best prices.",
      buttonText: "Hotel Booking",
    },
    {
      image: car,
      title: "Rent a Car",
      description: "Explore your destination with convenient car rentals.",
      buttonText: " Car Rent",
    },
    {
      image: trip,
      title: "adventurous task.",
      description: "Thrilling hikes, wildlife, water sports adventures.",
      buttonText: "Booking Tasks",
    },
    {
      image: cruise,
      title: "Cruise Booking",
      description: "Set sail to exotic locations with our amazing cruise packages.",
      buttonText: "Book Cruise",
    },
    {
      image: tour,
      title: "Guided Tours",
      description: "Explore new places with a local guide.",
      buttonText: "Book Tour",
    },
    {
      image: flight,
      title: "Flight Booking",
      description: "Find the best flight deals to your next destination.",
      buttonText: "Book Flight",
    },
  ];

  const transportSlides = [
    {
      image: bus,
      title: "Bus Services",
      description:
        "Bus services in Sri Lanka provide affordable travel across the country, with both public and private buses. They connect cities, towns, and rural areas, offering different levels of comfort, from ordinary to luxury services. Buses are essential for daily commuting and tourism.",
      website: "https://sltb.eseat.lk/",
    },
    {
      image: train,
      title: "Train Rides",
      description:
        "Train rides in Sri Lanka are a scenic and affordable way to travel. The network connects major cities and tourist destinations, offering different comfort levels. Popular routes like Colombo to Kandy and Colombo to Ella offer beautiful views of the countryside and mountains.",
      website: "https://www.railway.gov.lk",
    },
    {
      image: tuktuk,
      title: "Tuk-Tuk Rentals",
      description:
        "Tuk-tuk rentals in Sri Lanka offer a convenient and affordable way to travel short distances. Available for hire with or without a driver, they are commonly used for sightseeing or local trips. Fares are often negotiated, and tuk-tuks are ideal for crowded areas.",
      website: "https://tuktukrental.com/",
    },
    {
      image: domesticFlight,
      title: "Domestic Flights",
      description:
        "Domestic flights in Sri Lanka offer quick travel between major cities and tourist destinations, with airlines like SriLankan Airlines and Cinnamon Air serving routes to places like Jaffna and Trincomalee. While pricier, they are convenient for reaching remote areas swiftly.",
      website: "https://www.srilankan.com",
    },

  ];

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  const slideStyle = {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    filter: "brightness(70%)",
    transition: "transform 0.8s ease-in-out",
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
  };

  const textOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    animation: "fadeIn 1s",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    margin: "10px 0",
    animation: "fadeIn 1.5s",
  };




  const carouselButtonStyle = {
    position: "absolute",
    top: "50%",
    padding: "15px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    border: "none",
    fontSize: "2.5rem",
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  };

  const carouselButtonHoverStyle = {
    transform: "scale(1.2)",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  };

  const cardStyle = {
    width: "280px",
    backgroundColor: "white",
    borderRadius: "12px",
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const cardImageStyle = {
    width: "100%",
    height: "180px",
    borderRadius: "10px 10px 0 0",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    margin: "15px 0",
    color: "#333",
  };

  const cardDescriptionStyle = {
    fontSize: "1rem",
    color: "#777",
  };

  const cardButtonStyle = {
    padding: "12px 25px",
    fontSize: "1rem",
    marginTop: "15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const cardButtonHoverStyle = {
    backgroundColor: "#45a049",
  };

  // Function to handle click on transport cards
  const handleTransportClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Header />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "20px auto" }}>

        {/* Banner Section */}
        <div style={containerStyle}>
          <div
            style={{
              ...containerStyle,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.8s ease-in-out",
            }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              style={slideStyle}
            />
            <div style={textOverlayStyle}>
              <h2 style={headingStyle}>{slides[currentSlide].title}</h2>
              <p style={paragraphStyle}>{slides[currentSlide].description}</p>
            </div>

            <button
              onClick={handlePrevSlide}
              style={{
                ...carouselButtonStyle,
                left: "20px",
              }}
              onMouseOver={(e) => (e.target.style.transform = carouselButtonHoverStyle.transform)}
              onMouseOut={(e) => (e.target.style.transform = carouselButtonHoverStyle.transform)}
            >
              &#8249;
            </button>
            <button
              onClick={handleNextSlide}
              style={{
                ...carouselButtonStyle,
                right: "20px",
              }}
              onMouseOver={(e) => (e.target.style.transform = carouselButtonHoverStyle.transform)}
              onMouseOut={(e) => (e.target.style.transform = carouselButtonHoverStyle.transform)}
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* Booking Cards Section */}
        <div style={cardContainerStyle}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => {
                e.target.style.transform = "rotateY(10deg)";
                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "rotateY(0deg)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={cardImageStyle}
              />
              <h3 style={cardTitleStyle}>{slide.title}</h3>
              <p style={cardDescriptionStyle}>{slide.description}</p>
              <button
                style={cardButtonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = cardButtonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
              >
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Transport Cards Section */}
        <div style={cardContainerStyle}>
          {transportSlides.map((slide, index) => (
            <div
              key={index}
              style={cardStyle}
              onClick={() => handleTransportClick(slide.website)}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={cardImageStyle}
              />
              <h3 style={cardTitleStyle}>{slide.title}</h3>
              <p style={cardDescriptionStyle}>{slide.description}</p>
              {/*<button
              style={cardButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = cardButtonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
            >
              View More
            </button>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
