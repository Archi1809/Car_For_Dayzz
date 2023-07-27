// import React from 'react'
"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
      const nextSection = document.getElementById("CarCatalogue");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div className="hero">
        {/* <audio autoPlay loop>
      <source src="/car_audio.wav" type="audio/wav" />
    </audio> */}
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Hit the Road with Ease: Discover the Perfect Car Rental for Your Journey!</h1>
            <p className="hero__subtitle">Streamline your car rental searching and prices affordable with current market.</p>
            <CustomButton 
            title="Explore Cars"
            containerStyles="bg-grey text-white rounded-full mt=10"
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/lamborgini.jpg" alt="hero" fill className="object-contain"/>
            </div>
        </div>
    </div>
  )
}

export default Hero