import {
    Nav,    
    Footer,
    ParticlesComp
} from '../_components';
import { FeedbackForm } from '../_components/contact/FeedbackForm';
import Image from "next/image";
import images from "../../public/index";

export default async function Contact() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <div className='h-full mt-48 container'>
                <div className='mb-32'>
                    <h1 className='font-bold text-6xl mb-10 relative z-30'>
                        Get in touch<span className='text-theme-purple'>.</span>
                    </h1>
                    <span className='h-[2px] ml-1 w-48 bg-theme-green block mb-12'></span>
                    <p className='text-3xl font-thin relative z-30'>
                        I'd love to have a conversation about how I can help you.
                    </p>
                    <p className='font-bold text-3xl text-theme-blue relative z-30'>
                        Let's get started…
                    </p>
                </div>                
            </div>
            <div className='bg-opacity-50 bg-theme-secondary-background py-16'>
                <div className='container grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 '>
                    <div className='text-2xl relative z-30 flex flex-col justify-center'>
                        <p>
                            If you have an upcoming project I can help you with I’d love to hear from you. 
                        </p>
                        <p className='mb-10'>
                            Give me a call or drop me an email and we can get started.
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
            <div className='py-16 container'>
                <div className="flex flex-row items-center z-30 relative">
                    <p className="text-theme-blue">
                        I work around the world...
                    </p>
                    <div className="cursor-none select-none -z-10 w-fit">
                        <iframe 
                            src="https://giphy.com/embed/vTUs60YG8Cdgl3s0Ky" 
                            width="100" 
                            height="100" 
                            className="giphy-embed animate-bounce duration-1000" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
            <ParticlesComp />
        </main>
    );
}
