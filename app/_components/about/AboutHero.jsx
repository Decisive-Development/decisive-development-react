'use client';
import Image from "next/image";
import images from "../../../public/index";
import Tilt from 'react-parallax-tilt';
import React from 'react';
import VideoPlayer from '../animations/VideoPlayer';

const AboutHero = () => {
    return (
        <section className="pt-16">
            <div className="container h-full">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 h-full 2xl:h-[800px] my-auto py-32">
                    <div className="flex flex-col justify-end">
                        <div className="z-20">
                            <p className="font-bold uppercase text-lg text-theme-purple">
                                About Me
                            </p>
                            <h1 className="text-6xl mb-10 text-theme-turquoise">
                                Hello!
                            </h1>
                            <div>
                                <p className="text-lg mb-7">
                                    I'm Tom, a self taught website developer. My focus is to design, develop and deliver <span className="text-theme-green font-bold">beautiful</span> and <span className="text-theme-orange">functional</span> websites. My goal is to provide high quality websites that are tailored to your needs, which grow your business and help you achieve your goals. 
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-end ">
                                <p className="text-theme-blue">
                                    I work around the world...
                                </p>
                                <div className="cursor-none select-none -z-10 w-fit">
                                    <iframe 
                                        src="https://giphy.com/embed/vTUs60YG8Cdgl3s0Ky" 
                                        width="100" 
                                        height="100" 
                                        className="giphy-embed cursor-none select-none animate-bounce duration-1000" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[600px] white-shadow h-fit z-20 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
                        <VideoPlayer />
                        <Image 
                            src={images.hover}
                            className="right-0 bottom-0 z-40 w-8 absolute animate-pulse"
                            alt="Sunset"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <Tilt
                        className="relative z-20 bg-theme-secondary-background p-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareColor="#52BBF6"
                        glarePosition="all"
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <p>
                            My development journey started in 2019, when I decided to change directions from physiotherapy to web development. I have always been interested in technology and the internet, so I decided to switch from helping people in a physical sense to helping people in a digital sense. 
                        </p>
                    </Tilt>
                    <Tilt
                        className="relative z-20 bg-theme-secondary-background p-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareColor="#52BBF6"
                        glarePosition="all"
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <p>
                            I have always been a creative person, I like to paint, photograph and record video. I decided to combine my creativity, knowledge of internet technology and combine it with my desire to provide people with a service they will be happy with. 
                        </p>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
