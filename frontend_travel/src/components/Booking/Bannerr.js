import React, { useState, useEffect, useCallback } from "react";
import hotel from "../../assets/hotel.jpg";
import car from "../../assets/car.jpg";
import trip from "../../assets/trip.jpg";
import cruise from "../../assets/cruise.jpg";
import tour from "../../assets/tour.jpg";
import flight from "../../assets/flight.jpg";


function Bannerr(){

    const [currentSlide, setCurrentSlide] = useState(0);
    
    
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
          href: "/adventurous",
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

    return(
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
    )
}



export default Bannerr;