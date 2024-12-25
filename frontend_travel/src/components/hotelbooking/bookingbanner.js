import React from "react";
import Slider from "react-slick";
import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";

function bookingbanner(){
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return(
        <div style={{ marginBottom: "30px", maxWidth: "1200px", margin: "auto" }}>
                    <Slider {...sliderSettings}>
                        <div>
                            <img
                                src={h1}
                                alt="Slider 1"
                                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={h2}
                                alt="Slider 2"
                                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
                            />
                        </div>
                        <div>
                            <img
                                src={h3}
                                alt="Slider 3"
                                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
                            />
                        </div>
                    </Slider>
                </div>
    )
}

export default bookingbanner;