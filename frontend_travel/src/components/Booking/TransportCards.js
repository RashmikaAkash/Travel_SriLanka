import React from "react";
import bus from "../../assets/bus.jpg";
import train from "../../assets/train.jpg";
import tuktuk from "../../assets/tuktuk.jpg";
import domesticFlight from "../../assets/domesticFlight.jpg";

function TransportCards(){
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
    return(
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

    )
}


export default TransportCards;