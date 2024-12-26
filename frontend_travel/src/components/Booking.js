import React from "react";
import Header from "../components/header";
import Banner from './Booking/Bannerr';
import BookingCards from './Booking/BookingCards';
import TransportCards from './Booking/TransportCards';

const Booking = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "20px auto" }}>
        {/* Banner Section */}
        <Banner/>

        {/* Booking Cards Section */}
        <BookingCards/>

        {/* Transport Cards Section */}
        <TransportCards/>
        
      </div>
    </div>
  );
};

export default Booking;
