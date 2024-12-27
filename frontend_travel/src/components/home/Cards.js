import React from "react";
import card1 from "../../assets/c1.jpg";
import card2 from "../../assets/c2.jpg";
import card3 from "../../assets/c3.jpg";
import card4 from "../../assets/c4.jpg";

function Cards(){
    return(
    <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "20px",
              gap: "20px",
              marginTop: "110px",
            }}
          >
            {[
              {
                img: card1,
                title: "Beautiful Beaches",
                description:
                  "Explore Sri Lanka's stunning coastline with crystal-clear waters and golden sands.",
              },
              {
                img: card2,
                title: "Tea Plantations",
                description:
                  "Visit the lush tea estates and learn about Sri Lanka's world-famous tea production.",
              },
              {
                img: card3,
                title: "Wildlife",
                description:
                  "Discover the rich biodiversity and unique wildlife of Sri Lanka's national parks.",
              },
              {
                img: card4,
                title: "Cultural Heritage",
                description:
                  "Experience the rich culture and historical landmarks of ancient Sri Lanka.",
              },
              
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "15px" }}>
                  <h3 style={{ fontSize: "1.5rem", color: "#333" }}>{card.title}</h3>
                  <p style={{ color: "#555", fontSize: "1rem" }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          )
}

export default Cards;