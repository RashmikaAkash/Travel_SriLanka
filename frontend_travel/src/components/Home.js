import React from "react";
import Header from './header';
import TopValues from './home/TopValues';
import Banner from './home/Banner';
import Cards from './home/Cards';
import Levy from './home/Levy';
import AboutUs from './home/aboutUs';
import Travellaws from './home/travellaws';
import TestimonialSection from './home/TestimonialSection';

function Home() {

  return (
    
    <div>
      {/* Header Section */}
      <Header />

      {/* Banner Section */}
      <Banner />

      {/* Cards Section */}
      <Cards/>
      
      {/* Top Values Section */}  
      <TopValues/>
      <AboutUs/>
      <Travellaws/>

      {/* Article Box Section */}
      <TestimonialSection />
  

      

      {/* Tourism Development Levy Section */}
      <Levy />
    </div>
  );
}

export default Home;
