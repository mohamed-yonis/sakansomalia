import React from "react";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import "tailwindcss/tailwind.css";
import pageheader from "../assets/page-header.jpg";
const Hero = () => {
  return (
    <div className="relative overflow-hidden h-96 lg:h-[520px]">
      <div className="absolute inset-0 w-full h-full">
       
      
        <img
          src={pageheader}
          alt="Slide 3"
          className="w-full h-full object-cover absolute animate-slide3"
        />
      </div>
    </div>
  );
};

export default Hero;
