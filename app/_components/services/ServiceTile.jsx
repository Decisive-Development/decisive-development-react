'use client';
import React from 'react';
import Popup from 'reactjs-popup';
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import ButtonCTA from '../button/ButtonCTA';

const themes = {
    red: 'red border-theme-red',
    blue: 'blue border-theme-blue',
    green: 'green border-theme-green',
    turquoise: 'turquoise border-theme-turquoise',
    orange: 'orange border-theme-orange',
    purple: 'purple border-theme-purple'
};

const ServiceTile = ({ image, title, description, colour, className, glareColor, theme, modalOne, modalTwo, modalThree }) => {
    return (
        <div className='flex flex-col'>
            <Tilt
                className="relative max-w-md m-auto md:max-w-full z-20 bg-theme-secondary-background p-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30 flex-grow"
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor={glareColor}
                glarePosition="all"
                glareBorderRadius="24px"
                tiltMaxAngleX={1}
                tiltMaxAngleY={1}
            >
                <div className={`flex max-w-sm m-auto items-center justify-center flex-col text-center relative z-30 ${className}`}>
                    <div className="h-[200px] block">
                        <Image
                            className="w-32 animate-pulse"
                            src={image}
                            alt="Help Tile"
                        />
                    </div>
                    <h3 className={`text-2xl ${colour} font-bold mb-5 flex-grow`}>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
            </Tilt>
            <div className='relative z-30'>
                <Popup
                    theme={theme} 
                    trigger={
                        <button
                            className={`${themes[theme]} bg-theme-primary cursor-pointer text-white font-semibold py-2 px-4 border rounded transition ease-in-out relative z-40 w-40 block text-center font-code uppercase tracking-wider reactive duration-300 m-auto mt-5`} 
                        > 
                            Read More 
                        </button>
                    }
                    modal
                    nested
                >
                    {close => (
                        <div className="relative z-20 bg-theme-primary p-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30 w-full m-auto md:w-[600px] lg:w-[800px]">
                            <button 
                                className="ml-auto w-fit block text-theme-red text-2xl" 
                                onClick={close}
                            >
                                &times;
                            </button>
                            <div className={`text-2xl ${colour} font-bold mb-5 flex-grow`}> 
                                {title} 
                            </div>
                            <div className='text-sm md:text-base'>
                                <div className="mb-5">
                                    {' '}
                                    {modalOne}
                                </div>
                                <div className="mb-5">
                                    {' '}
                                    {modalTwo}
                                </div>
                                <div className="mb-10">
                                    {' '}
                                    {modalThree ? modalThree : null}
                                </div>
                            </div>
                            <div className="flex flex-row space-x-5 justify-around">
                                <ButtonCTA 
                                    href="/contact" 
                                    theme={theme} 
                                    buttonText="Contact" 
                                    
                                />
                                <button
                                    className={`${themes[theme]} bg-theme-primary cursor-pointer text-white font-semibold py-2 px-4 border rounded transition ease-in-out relative z-40 block text-center font-code uppercase tracking-wider reactive duration-300 w-40`} 
                                    onClick={() => {
                                        console.log('modal closed ');
                                        close();
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    );
};

export default ServiceTile;