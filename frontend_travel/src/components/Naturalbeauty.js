import React from "react";
import Header from "../components/exploreheader"; // Adjust the path to your Header component
import Banner from "./NaturalBeauty/Banner";
import MainContent from "./NaturalBeauty/mainContent";

function NaturalBeauty() {
    const styles = {
        container: {
            fontFamily: "'Roboto', sans-serif",
            margin: "0 auto",
            padding: "20px",
            maxWidth: "1200px",
            color: "#333",
        },
    };

    return (
        <div>
            <Header />
            <div style={styles.container}>
                {/*Banner*/}
                <Banner/>

                {/*mainContent*/}
                <MainContent/>
                
            </div>
        </div>
    );
}

export default NaturalBeauty;
