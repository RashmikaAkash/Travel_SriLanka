import React from "react";
import banner from "../../assets/banner.png";

function Banner(){
    return(
        <div
        style={{
          position: "relative",
          height: "600px",
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
    )
}

export default Banner;