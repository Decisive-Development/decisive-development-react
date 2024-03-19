"use client"
import Image from "next/image";
import { useState } from 'react'; // Correct import of useState
import images from "../../../public/index";
import { footerLinks, companyLinks, legalLinks } from "../../constants";

const Footer = () => {
    const gradients = ['theme-blue', 'theme-red', 'theme-green', 'theme-turquoise', 'theme-orange', 'theme-purple'];
    const colorClasses = ['text-theme-blue', 'text-theme-red', 'text-theme-green', 'text-theme-turquoise', 'text-theme-orange', 'text-theme-purple'];

    // Function to get a random color class
    const getRandomColorClass = (currentClass) => {
        let newColorClass;
            do {
                newColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
            } while (newColorClass === currentClass);
            return newColorClass;
        };
    return (
        <>
            <style jsx>{`
                .animate-slide-in {
                    display: flex;
                    width: 250%;
                    animation: slideIn 15s linear infinite;
                }
                .animate-slide-out {
                    display: flex;
                    width: 250%;
                    animation: slideOut 15s linear infinite;
                }
                @keyframes slideIn {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .slide-content span {
                    width: 20vw;
                }
            `}</style>
            <footer className="overflow-x-hidden">
                <section className="bg-theme-secondary bg-opacity-25 z-30 relative mt-32 py-32">
                    
                    <div className="animate-slide-out absolute w-full bottom-0 left-0">
                        {[...Array(2)].flatMap((_, idx) => (
                            gradients.map((color, index) => (
                                <span 
                                    key={`slide-out-${color}-${idx}-${index}`}
                                    className={`slide-content h-[1px] w-full bg-gradient-to-r from-transparent via-${color} to-transparent`}></span>
                            ))
                        ))}
                    </div>
                {/* <span className="bg-theme-primary h-5 mt-10 w-full block absolute -top-5"></span> */}
                <div className="container relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-10">
                        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-1">
                            <Image
                                src={images.logoWhite}
                                alt="Decisive Development"
                                className="w-52 mb-5 max-w-full pointer-events-auto"
                            />
                            <a 
                                className="mb-2"
                                href="mailto:tom@decisive.development.com"
                            >
                                <span className="font-bold">Email:</span>&nbsp;<span className="text-theme-complementary">tom@decisive.development.com</span> 
                            </a>
                            <a 
                                href="tel:+447708754503"
                                className="mb-5"
                            >
                                <span className="font-bold">Phone:</span>&nbsp;<span className="text-theme-complementary">+44 (0) 77 087 545 03</span>  
                            </a>
                            <div>
                                <ul className="cursor-pointer grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 font-light pointer-events-auto">
                                    {companyLinks.map((companyLink) => {
                                        // Initialize state with an empty string or a default value
                                        const [hoverColorClass, setHoverColorClass] = useState('');
                                        // Enhanced onMouseEnter event handler
                                        const changeColor = () => {
                                            const newColorClass = getRandomColorClass();
                                            setHoverColorClass(newColorClass);
                                        };
                                        return (
                                            <li
                                                key={companyLink.id}
                                                onMouseEnter={changeColor}
                                                onMouseLeave={() => setHoverColorClass('')}
                                                className={`hover:-translate-x-7 transform duration-150 ${hoverColorClass}`}
                                            >
                                                <a href={`#${companyLink.id}`}>{companyLink.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">
                                    Services
                                </h6>
                                <ul className="cursor-pointer text-base font-light pointer-events-auto">
                                    {footerLinks.map((footerLink) => {
                                        // Initialize state with an empty string or a default value
                                        const [hoverColorClass, setHoverColorClass] = useState('');
                                        // Enhanced onMouseEnter event handler
                                        const changeColor = () => {
                                            const newColorClass = getRandomColorClass();
                                            setHoverColorClass(newColorClass);
                                        };
                                        return (
                                            <li
                                                key={footerLink.id}
                                                onMouseEnter={changeColor}
                                                onMouseLeave={() => setHoverColorClass('')}
                                                className={`hover:-translate-x-7 transform duration-150 ${hoverColorClass}`}
                                            >
                                                <a href={`#${footerLink.id}`}>{footerLink.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">
                                    Legal Notices
                                </h6>
                                <ul className="cursor-pointer text-base font-light pointer-events-auto">
                                    {legalLinks.map((legalLink) => {
                                        const [hoverColorClass, setHoverColorClass] = useState('');
                                        const changeColor = () => {
                                            const newColorClass = getRandomColorClass();
                                            setHoverColorClass(newColorClass);
                                        };
                                        return (
                                            <li
                                                key={legalLink.id}
                                                onMouseEnter={changeColor}
                                                onMouseLeave={() => setHoverColorClass('')}
                                                className={`hover:-translate-x-7 transform duration-150 ${hoverColorClass}`}
                                            >
                                                <a href={`#${legalLink.id}`}>{legalLink.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <span className="bg-theme-primary h-5 mt-10 w-full block absolute bottom-5"></span> */}
            </section>
            <section className="container relative">
                <div className="bg-theme-primary text-theme-complementary font-light text-center py-10">
                    <p className="mb-2">
                        © 2021 - 2024 Decisive Development Ltd. All rights reserved.                        
                    </p>
                    <p className="mb-2">
                        Global Freelance Web Design, Development, Management, Maintenance and Support.
                    </p>
                    <div>
                        {/* add nav links */}
                        Copyright. Terms. Privacy.
                    </div>
                </div>
            </section>
        </footer>
        </>
    );
};

export default Footer;