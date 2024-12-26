import React from "react";
import hotel from "../../assets/hotel.jpg";
import car from "../../assets/car.jpg";
import trip from "../../assets/trip.jpg";
import cruise from "../../assets/cruise.jpg";
import tour from "../../assets/tour.jpg";
import flight from "../../assets/flight.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function BookingCards(){
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
    
    ;
    
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
    return(

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

    )
}

export default BookingCards;