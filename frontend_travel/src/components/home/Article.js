import React from "react";
import Articlee from "../../assets/Article.jpg";

function Article(){
    return(
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
                  src={Articlee}
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

    )
}

export default Article;