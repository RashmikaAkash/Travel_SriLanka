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
import Header from "../components/header";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Booking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const slides = [
    {
      image: hotel,
      title: "Book Your Hotel",
      description: "Find the best hotels at the best prices.",
      buttonText: "Hotel Booking",
      href: "/hotelbooking",
    },
    {
      image: car,
      title: "Rent a Car",
      description: "Explore your destination with convenient car rentals.",
      buttonText: "Car Rent",
      href: "/rentcar",
    },
    {
      image: trip,
      title: "Adventurous Task",
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
        "Bus services in Sri Lanka provide affordable travel across the country, with both public and private buses.",
      website: "https://sltb.eseat.lk/",
    },
    {
      image: train,
      title: "Train Rides",
      description:
        "Train rides in Sri Lanka are a scenic and affordable way to travel, connecting cities and tourist destinations.",
      website: "https://www.railway.gov.lk",
    },
    {
      image: tuktuk,
      title: "Tuk-Tuk Rentals",
      description:
        "Tuk-tuk rentals in Sri Lanka offer a convenient and affordable way to travel short distances.",
      website: "https://tuktukrental.com/",
    },
    {
      image: domesticFlight,
      title: "Domestic Flights",
      description:
        "Domestic flights in Sri Lanka offer quick travel between major cities and tourist destinations.",
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

  const handleTransportClick = (url) => {
    window.open(url, "_blank");
  };

  const handleCardMouseOver = (e) => {
    e.currentTarget.style.transform = "rotateY(10deg)";
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
  };

  const handleCardMouseOut = (e) => {
    e.currentTarget.style.transform = "rotateY(0deg)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  };
  const handleCardButtonClick = (href) => {
    if (href) {
      navigate(href); // Navigate to the specified page
    }
  };

  return (
    <div>
      <Header />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "20px auto" }}>
        {/* Banner Section */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px", boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)" }}>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              filter: "brightness(70%)",
              transition: "transform 0.8s ease-in-out",
            }}
          />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white", zIndex: 1 }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", animation: "fadeIn 1s" }}>{slides[currentSlide].title}</h2>
            <p style={{ fontSize: "1.2rem", margin: "10px 0", animation: "fadeIn 1.5s" }}>{slides[currentSlide].description}</p>
          </div>
          <button
            onClick={handlePrevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              padding: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "white",
              border: "none",
              fontSize: "2.5rem",
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            &#8249;
          </button>
          <button
            onClick={handleNextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              padding: "15px",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "white",
              border: "none",
              fontSize: "2.5rem",
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            &#8250;
          </button>
        </div>

        {/* Booking Cards Section */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                backgroundColor: "white",
                borderRadius: "12px",
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={handleCardMouseOver}
              onMouseOut={handleCardMouseOut}
              onClick={() => handleCardButtonClick(slide.href)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "10px 10px 0 0",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3 style={{ fontSize: "1.5rem", margin: "15px 0", color: "#333" }}>{slide.title}</h3>
              <p style={{ fontSize: "1rem", color: "#777" }}>{slide.description}</p>
              <button
                style={{
                  padding: "12px 25px",
                  fontSize: "1rem",
                  marginTop: "15px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                {slide.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Transport Cards Section */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}>
          {transportSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                backgroundColor: "white",
                borderRadius: "12px",
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => handleTransportClick(slide.website)}
              onMouseOver={handleCardMouseOver}
              onMouseOut={handleCardMouseOut}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "10px 10px 0 0",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3 style={{ fontSize: "1.5rem", margin: "15px 0", color: "#333" }}>{slide.title}</h3>
              <p style={{ fontSize: "1rem", color: "#777" }}>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
