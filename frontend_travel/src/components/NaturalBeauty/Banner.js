import React from "react";
import culturalheritage from "../../assets/culturalheritage.webp";

function Banner(){
    const styles = {
            header: {
                position: "relative",
                textAlign: "center",
                padding: "80px 20px",
                backgroundImage: `url(${culturalheritage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                color: "white",
            },
            headerOverlay: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "10px",
            },
            headerContent: {
                position: "relative",
                zIndex: 1,
            },
        };
    return(
        <header style={styles.header}>
            <div style={styles.headerOverlay}></div>
            <div style={styles.headerContent}>
                <h1>Discover the Natural Beauty of Sri Lanka</h1>
                <p>A journey through paradise on earth!</p>
            </div>
        </header>

    )
}


export default Banner;