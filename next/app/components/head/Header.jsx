// import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Nav, Heading } from "..";
import images from "../../../public/index";

const Header = () => {
    // const [activeImageIndex, setActiveImageIndex] = useState(1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const nextImageIndex = (activeImageIndex % 4) + 1;

    //         const currentImage = document.querySelector(`.image-${activeImageIndex}`);
    //         const nextImage = document.querySelector(`.image-${nextImageIndex}`);

    //         currentImage.style.transition = "opacity 1s ease-in-out";
    //         nextImage.style.transition = "opacity 1s ease-in-out";

    //         setTimeout(() => {
    //             currentImage.style.opacity = 0;
    //         }, 1000);

    //         setTimeout(() => {
    //             nextImage.style.opacity = 0.3;
    //         }, 1000);

    //         setActiveImageIndex(nextImageIndex);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [activeImageIndex]);

    return (
        <section
            className="flex relative items-end p-10 h-screen w-full"
            id="home"
        >
            <Nav />
            <Heading />
            <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-1 opacity-30"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-2 opacity-0"
                src={images.develop}
                alt="Develop"
            />
            <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-3 opacity-0"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-4 opacity-0"
                src={images.design}
                alt="Design"
            />
        </section>
    );
};

export default Header;
