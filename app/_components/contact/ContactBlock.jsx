"use client";

import { ColouredLine } from "..";
import Image from "next/image";
import images from "../../../public/index";
import { FeedbackForm } from '../contact/FeedbackForm';
import Tilt from 'react-parallax-tilt';

const ContactBlock = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-x-hidden" id="contact">
            <ColouredLine position="top-0" />
            <div className="container relative">
                <Tilt
                    className="relative mb-10 z-20 bg-theme-secondary-background py-10 px-5 rounded-3xl border border-theme-turquoise border-opacity-30"
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glareColor="#48EDE8"
                    glarePosition="all"
                    glareBorderRadius="24px"
                    tiltMaxAngleX={1}
                    tiltMaxAngleY={1}
                >
                    <div>
                        <div>
                            <h2 className="text-4xl font-bold text-theme-turquoise mb-10">
                                Contact
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <p className="mb-3">
                                        Please get in touch for any enquiries, a simple question or a scheduled meeting! 
                                    </p>
                                    <p className="mb-3">
                                        I aim to reply to all enquiries within 24 hours. Leave me either an email or message on WhatsApp. If you need an urgent response, its best to call me.
                                    </p>
                                    <p>
                                        I look forward to hearing from you! 
                                    </p>
                                </div>
                                <div>
                                    <a href="mailto:tom@decisive-development.com" className="w-fit block">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-5 ">
                                            <div className="p-2 bg-theme-blue mr-5 mb-2 sm:mb-0 w-fit rounded-xl transition-all">
                                                <Image
                                                    className="w-10 "
                                                    src={images.email}
                                                    alt="email"
                                                />
                                            </div>
                                            <p className="">
                                                <span className="font-bold text-theme-neutral">Email:</span> tom@decisive-development.com
                                            </p>
                                        </div>
                                    </a>
                                    <a href="tel:+447708754503" className="w-fit block">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                            <div className="p-2 bg-theme-green mr-5 mb-2 sm:mb-0 w-fit rounded-xl">
                                                <Image
                                                    className="w-10 "
                                                    src={images.phone}
                                                    alt="phone"
                                                />
                                            </div>
                                            <p className="">
                                                <span className="font-bold text-theme-neutral">WhatsApp:</span> +44 (0) 77 087 545 03
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <div className="w-full lg:w-[500px] m-auto">
                    <FeedbackForm />
                </div>
            </div>
        </section>
    );
};

export default ContactBlock;