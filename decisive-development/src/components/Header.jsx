import React, { useState, useEffect } from "react";
import { Nav, Heading } from ".";
import images from "../assets/index";

const Header = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index in a cyclic manner (1 -> 2 -> 3 -> 1 -> ...)
      const nextImageIndex = (activeImageIndex % 4) + 1;

      // Get references to the current and next images
      const currentImage = document.querySelector(`.image-${activeImageIndex}`);
      const nextImage = document.querySelector(`.image-${nextImageIndex}`);

      // Apply CSS transitions for smooth fading
      currentImage.style.transition = "opacity 1s ease-in-out";
      nextImage.style.transition = "opacity 1s ease-in-out";

      // Delay the fade-out of the current image by 1 second
      setTimeout(() => {
        currentImage.style.opacity = 0;
      }, 1000);

      // Delay the fade-in of the next image by 1 second
      setTimeout(() => {
        nextImage.style.opacity = 0.3;
      }, 1000);

      // Update the active image index
      setActiveImageIndex(nextImageIndex);
    }, 3000); // Change images every 4 seconds (1 second delay + 3 seconds for fade)


    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <section 
        className="flex relative items-end p-10 h-screen w-full"
        id="home"    
    >
      <Nav />
      <Heading />
      <img
        className="m-auto h-[110px] absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-1 opacity-30"
        src={images.decisive}
        alt="Decisive"
      ></img>
      <img
        className="m-auto h-[110px] absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-2 opacity-0"
        src={images.develop}
        alt="Develop"
      ></img>
      
      <img
        className="m-auto h-[110px] absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-3 opacity-0"
        src={images.decisive}
        alt="Decisive"
      ></img>
      <img
        className="m-auto h-[110px] absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-4 opacity-0"
        src={images.design}
        alt="Design"
      ></img>
    </section>
  );
};

export default Header;
