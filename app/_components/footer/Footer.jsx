'use client';
import { useState } from 'react';
import Image from 'next/image';
import images from '../../../public/index';
import { ColouredLine } from '..';
import { footerLinks, companyLinks, legalLinks } from '../../_constants';
import { ColouredLinks } from '../index';

const Footer = () => {
    const [lastLinkColour, setLastLinkColour] = useState('');

    return (
        <footer className="overflow-x-hidden">
            <section className="bg-theme-secondary bg-opacity-25 z-20 relative py-16 md:py-32">
                <ColouredLine />
                <div className="container relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-10">
                        <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-1">
                            <Image
                                src={images.logoWhite}
                                alt="Decisive Development"
                                className="w-52 mb-5 max-w-full pointer-events-auto"
                            />
                            <a className="mb-2" href="mailto:tom@decisive-development.com">
                                <span className="font-bold">Email:</span>&nbsp;
                                <span className="text-theme-complementary">
                                    tom@decisive-development.com
                                </span>
                            </a>
                            <a href="tel:+447708754503" className="mb-5">
                                <span className="font-bold">Phone:</span>&nbsp;
                                <span className="text-theme-complementary">
                                    +44 (0) 77 087 545 03
                                </span>
                            </a>
                            <div>
                                <ul className="cursor-pointer grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 font-light pointer-events-auto">
                                    {companyLinks.map((companyLink) => (
                                        <ColouredLinks
                                            key={companyLink.id}
                                            id={companyLink.id}
                                            title={companyLink.title}
                                            lastLinkColour={lastLinkColour}
                                            setLastLinkColour={setLastLinkColour}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">Services</h6>
                                <ul className="cursor-pointer text-base font-light pointer-events-auto">
                                    {footerLinks.map((footerLink) => (
                                        <ColouredLinks
                                            key={footerLink.id}
                                            id={footerLink.id}
                                            title={footerLink.title}
                                            lastLinkColour={lastLinkColour}
                                            setLastLinkColour={setLastLinkColour}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-center">
                            <div>
                                <h6 className="text-2xl font-bold mb-5">Legal Notices</h6>
                                <ul className="cursor-pointer text-base font-light pointer-events-auto">
                                    {legalLinks.map((legalLink) => (
                                        <ColouredLinks
                                            key={legalLink.id}
                                            id={legalLink.id}
                                            title={legalLink.title}
                                            lastLinkColour={lastLinkColour}
                                            setLastLinkColour={setLastLinkColour}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container relative">
                <div className="bg-theme-primary text-theme-complementary font-light text-center py-10">
                    <p className="mb-2">
                        © 2021 - 2024 Decisive Development Ltd. All rights reserved.
                    </p>
                    <p className="mb-2">
                        Global Freelance Web Design, Development, Management, Maintenance
                        and Support.
                    </p>
                    <div>
                        {/* add nav links */}
                        Copyright. Terms. Privacy.
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
