import React, { useState } from "react";
import banner from "../assets/banner.jpg";
import card1 from "../assets/c1.jpg";
import card2 from "../assets/c2.jpg";
import card3 from "../assets/c3.jpg";
import card4 from "../assets/c4.jpg";
import card5 from "../assets/c5.jpg";
import Article from "../assets/Article.jpg";

function Home() {
  const [amount, setAmount] = useState("");
  const [levy, setLevy] = useState(null);

  const calculateLevy = () => {
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    const levyRate = 0.02; // Example: 2% Tourism Development Levy
    setLevy(amount * levyRate);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          height: "400px",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            margin: "10px 0",
          }}
        >
          ආයුබෝවන් ශ්‍රී ලංකා
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            margin: "10px 0",
          }}
        >
          Welcome to Sri Lanka
        </h2>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            margin: "10px 0",
          }}
        >
          இலங்கைக்கு வரவேற்கிறோம்
        </h2>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
          gap: "20px",
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
          {
            img: card5,
            title: "Adventure Sports",
            description:
              "Dive into thrilling water sports, hiking, and adventure-filled experiences.",
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

      {/* Article Box Section */}
      <div
        style={{
          margin: "40px auto",
          maxWidth: "900px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={Article}
          alt="Buddhism in Sri Lanka"
          style={{
            width: "40%",
            height: "auto",
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        />
        <div style={{ padding: "30px", width: "60%" }}>
          <h3
            style={{
              fontSize: "2rem",
              color: "#333",
              fontWeight: "600",
              marginBottom: "15px",
              lineHeight: "1.4",
            }}
          >
            Buddhism in Sri Lanka
          </h3>
          <p
            style={{
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Buddhism has flourished in Sri Lanka for over two thousand years,
            making it a central part of the nation's cultural and spiritual
            identity. The island is dotted with ancient temples, stupas, and
            sacred sites, each with a rich history of devotion and meditation.
            From the sacred city of Anuradhapura to the renowned Temple of the
            Tooth in Kandy, Sri Lanka offers travelers a chance to connect with
            the deep roots of Buddhism in a peaceful and reflective environment.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Buddhism_in_Sri_Lanka#:~:text=Buddhism%20has%20been%20declared%20as,the%20oldest%20traditionally%20Buddhist%20countries."
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#4CAF50",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Tourism Development Levy Section */}
      <div
        style={{
          margin: "40px auto",
          maxWidth: "600px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "15px" }}>
          Tourism Development Levy Calculator
        </h3>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Calculate the 2% Tourism Development Levy (TDL) for your business or activity.
        </p>
        <input
          type="number"
          placeholder="Enter amount (LKR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: "calc(100% - 40px)",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
        <br />
        <button
          onClick={calculateLevy}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Calculate Levy
        </button>
        {levy !== null && (
          <p style={{ marginTop: "15px", fontSize: "1.2rem", color: "#333" }}>
            Tourism Development Levy: <strong>LKR {levy.toFixed(2)}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
