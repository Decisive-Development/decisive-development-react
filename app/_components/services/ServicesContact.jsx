import Image from "next/image";
import images from "../../../public/index";
import Tilt from 'react-parallax-tilt';
import { FeedbackForm } from '../../_components/contact/FeedbackForm';

import { ColouredLine } from "..";

const ServicesContact = () => {
    return (
        <section className="relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className='py-16 md:py-32'>
                <div className='container grid grid-cols-1 lg:grid-cols-2 gap-20 '>
                    <div className='text-2xl relative z-30 flex flex-col justify-center'>
                        <p>
                            If you have an upcoming project I can help you with I’d love to hear from you. 
                        </p>
                        <p className='mb-10'>
                            Give me a call or drop me an email and we can get started today.
                        </p>
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
                                    <p className="font-thin">
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
                                    <p className="font-thin">
                                        <span className="font-bold text-theme-neutral">WhatsApp:</span> +44 (0) 77 087 545 03
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full ">
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesContact;

