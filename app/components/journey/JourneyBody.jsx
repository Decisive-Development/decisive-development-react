"use client";
import Tilt from 'react-parallax-tilt';
import Image from "next/image";
import images from "../../../public/index";
import { useInView } from "react-intersection-observer";

const JourneyBody = () => {
    // cant apply the animation twice to different elements
    const [ref, inView ] = useInView({
        threshold: 0.6
    })
    const [ref2, inView2 ] = useInView({
        threshold: 0.6
    })
    const [ref3, inView3 ] = useInView({
        threshold: 0.6
    })
    const [ref4, inView4 ] = useInView({
        threshold: 0.6
    })
    return (
// Convert sections into components
// Add images
// Add page CTAs
        <section className='mr-12 -ml-12 pb-64'>
{/* red */}
            <div className="grid grid-cols-12 h-full ">                
                <div 
                    className="col-span-3 h-full relative py-32 pr-14 text-right "
                    ref={ref}
                >
                    <div className="sticky top-2/4 z-20">
                        <h3 className="mb-5 relative z-20 text-theme-complementary">
                            Your website reflects your business. Make a <span className="text-theme-neutral font-medium">lasting impression</span>.
                        </h3>
                        <a href="" className="bg-theme-primary hover:bg-theme-red text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-red hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                           Get Started
                        </a>
                    </div>
                    <div 
                        className={`bg-gradient-to-b from-transparent via-theme-red to-transparent h-full absolute w-[2px] right-0 top-0  ease-in-out duration-700 transform ${
                            inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        } origin-top`}
                    >
                    </div>
                    <Image
                        className="w-5 absolute opacity-30 -right-[9px] -top-5 animate-pulse"
                        src={images.circle}
                        priority={false}
                        alt="circle"
                    />
                </div>
                <div className="col-span-9 w-full ml-20 py-32 relative z-20">
                    <Tilt 
                        className="relative z-20 bg-theme-secondary-background -m-5 p-10 rounded-3xl border border-theme-complementary border-opacity-30" 
                        glareEnable={true} 
                        glareMaxOpacity={0.2} 
                        glareColor="#e27868" 
                        glarePosition="all" 
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <div >
                        <h3 className="font-bold text-3xl text-theme-red mb-3">
                            Why Choose Decisive Development
                        </h3>
                        <h4 className="font-medium text-xl mb-10">
                            Escape the Ordinary, Embrace the Exceptional
                        </h4>
                        <p className="mb-5 text-theme-complementary">
                            The Problem with Website Builder Platforms:
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            <ul className="list-disc list-outside ">
                                <li className="mb-5 ml-5 text-theme-complementary">
                                    <span className="font-bold text-theme-neutral block">Not Custom-Designed</span> Rely on templates and your website might just disappear into the crowd, missing the chance to highlight what makes your brand special.
                                </li>
                                <li className="mb-5 ml-5 text-theme-complementary">
                                    <span className="font-bold text-theme-neutral block">Poor Google Rankings & SEO</span> Lacking control over SEO details like speed and metadata can leave your site lagging behind in search results.
                                </li>
                                <li className="mb-5 ml-5 text-theme-complementary">
                                    <span className="font-bold text-theme-neutral block">Lack of Customer Support</span> With builder platforms, you're often on your own, without the dedicated support to guide you through issues or updates.
                                </li>
                            </ul>
                            <ul className="list-disc list-outside ">
                                <li className="mb-5 ml-5 text-theme-complementary">
                                    <span className="font-bold text-theme-neutral block">Limited Mobile Experience</span> Even with 'responsive' designs, many builders fall short in truly optimising for mobile, a critical flaw in today's smartphone-centric world.
                                </li>
                                <li className="mb-5 ml-5 text-theme-complementary">
                                    <span className="font-bold text-theme-neutral block">Price</span> While website builders might seem cost-effective at first glance, fee's for add-ons, plugins, features and support can quickly add up. Not to mention the cost of your time.
                                </li>
                            </ul>
                        </div>
                        <p>
                            Your investment in a custom website is an investment in your business.
                        </p>
                        </div>
                    </Tilt>
                </div>	
            </div>	
{/* blue */}
            <div className="grid grid-cols-12 h-full relative">
                <div className="col-span-3 h-full py-32 pr-14 text-right relative" ref={ref2}>
                    <div className="sticky top-2/4 z-20" >
                        <h3 className="relative z-20 text-theme-complementary">
                            Partner with us.
                        </h3>
                        <h3 className="mb-5 relative z-20 text-theme-complementary">
                        <span className="text-theme-neutral font-medium">Your growth</span> is <span className="text-theme-neutral font-medium">our business</span>.
                        </h3>
                        <a href="" className="bg-theme-primary hover:bg-theme-blue text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-blue hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                           Get Started
                        </a>
                    </div>
                    <div 
                        className={`bg-gradient-to-b from-transparent via-theme-blue to-transparent h-full absolute w-[2px] right-0 top-0  ease-in-out duration-700 transform ${
                            inView2 ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        } origin-top`}
                    >
                    </div>
                </div>
                <div className="col-span-9 w-full ml-20 py-32">
                    <Tilt 
                        className="relative z-20 bg-theme-secondary-background -m-5 p-10 rounded-3xl border border-theme-complementary border-opacity-30" 
                        glareEnable={true} 
                        glareMaxOpacity={0.2} 
                        glareColor="#52BBF6" 
                        glarePosition="all" 
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <div>
                            <h3 className="font-bold text-3xl text-theme-blue mb-3">
                                Our Process
                            </h3>
                            <h4 className="font-medium text-xl mb-10">
                                Understanding Your Vision
                            </h4>
                            <p className="mb-10 text-theme-complementary">
                                We begin every project with a deep dive into your world. We want to understand every facet of your business, brand, and goals to ensure the website we create resonates with your identity and ambitions. This initial phase involves detailed discussions to capture your vision, preferences, and expectations, ensuring our design aligns perfectly with your business strategy.
                            </p>
                            <ul className="list-outside">
                                <li className="mb-10 ml-5">
                                    <span className="font-bold text-xl"><span className='text-theme-blue'>1.</span> Initial Consultation</span>
                                    <div className="grid grid-cols-2 gap-5 text-theme-complementary">
                                        <ul className="list-disc ml-10 mt-2 ">
                                            <li className="mb-1">
                                                Get to know one another and discuss your vision.
                                            </li>
                                            <li className="mb-1">
                                                Discuss your business objectives and website expectations.
                                            </li>
                                            <li className="mb-1">
                                                Address any queries to ensure full transparency.
                                            </li>
                                            
                                        </ul>
                                        <ul className="list-disc ml-10 mt-2">
                                            <li className="mb-1">
                                                Consider applications or features you want to include.                                        
                                            </li>
                                            <li className="mb-1">
                                                Establish a clear project scope and timeline.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-outside">
                                <li className="mb-10 ml-5">
                                <span className="font-bold text-xl"><span className='text-theme-blue'>2.</span> Proposal & Contract</span>
                                    <div className="grid grid-cols-2 gap-5 text-theme-complementary">
                                        <ul className="list-disc ml-10 mt-2 ">
                                            <li className="mb-1">
                                                Breakdown of agreements and costs.
                                            </li>
                                            <li className="mb-1">
                                                Realistic project scope and timeline.
                                            </li>
                                            <li className="mb-1">
                                                Outlines goals, deliverables, and expectations for both parties.
                                            </li>
                                        </ul>
                                        <ul className="list-disc ml-10 mt-2">
                                            <li className="mb-1">
                                                Helps identify potential challenges and risks. 
                                            </li>
                                            <li className="mb-1">
                                                Contract signed and payment process explained.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                Your investment in a custom website is an investment in your business.
                            </p>
                        </div>
                    </Tilt>
                    
                </div>	
            </div>	
{/* green */}
            <div className="grid grid-cols-12 h-full relative">
                <div className="col-span-3 h-full py-32 pr-14 text-right relative" ref={ref3}>
                    <div className="sticky top-2/4 z-20" >
                        <h3 className="relative z-20 text-theme-complementary">
                            Partner with us.
                        </h3>
                        <h3 className="mb-5 relative z-20 text-theme-complementary">
                        <span className="text-theme-neutral font-medium">Your growth</span> is <span className="text-theme-neutral font-medium">our business</span>.
                        </h3>
                        <a href="" className="bg-theme-primary hover:bg-theme-green text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-green hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                           Get Started
                        </a>
                    </div>
                    <div 
                        className={`bg-gradient-to-b from-transparent via-theme-green to-transparent h-full absolute w-[2px] right-0 top-0  ease-in-out duration-700 transform ${
                            inView3 ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        } origin-top`}
                    >
                    </div>
                </div>
                <div className="col-span-9 w-full ml-20 py-32">
                    <Tilt 
                        className="relative z-20 bg-theme-secondary-background -m-5 p-10 rounded-3xl border border-theme-complementary border-opacity-30" 
                        glareEnable={true} 
                        glareMaxOpacity={0.2} 
                        glareColor="#A9DC73" 
                        glarePosition="all" 
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <div>
                            <h3 className="font-bold text-3xl text-theme-green mb-3">
                                Our Process
                            </h3>
                            <h4 className="font-medium text-xl mb-10">
                                Bringing Your Vision To Life
                            </h4>
                            <p className="mb-10 text-theme-complementary">
                                We begin every project with a deep dive into your world. We want to understand every facet of your business, brand, and goals to ensure the website we create resonates with your identity and ambitions. This initial phase involves detailed discussions to capture your vision, preferences, and expectations, ensuring our design aligns perfectly with your business strategy.
                            </p>
                            <ul className="list-outside">
                                <li className="mb-10 ml-5">
                                <span className="font-bold text-xl"><span className='text-theme-green'>3.</span> Design & Development</span>
                                    <div className="grid grid-cols-2 gap-5 text-theme-complementary">
                                        <ul className="list-disc ml-10 mt-2 ">
                                            <li className="mb-1">
                                                Graphics, Media, and Copywriting agreed upon.
                                            </li>
                                            <li className="mb-1">
                                                XD prototype presented for approval.
                                            </li>
                                            <li className="mb-1">
                                                Hand-coded development of the website.
                                            </li>
                                        </ul>
                                        <ul className="list-disc ml-10 mt-2">
                                            <li className="mb-1">
                                                Ongoing feedback and adjustments between parties.
                                            </li>
                                            <li className="mb-1">
                                                Mobile optimisation and cross-browser testing.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-outside">
                                <li className="mb-10 ml-5">
                                <span className="font-bold text-xl"><span className='text-theme-green'>4.</span> Review & Launch</span>
                                    <div className="grid grid-cols-2 gap-5 text-theme-complementary">
                                        <ul className="list-disc ml-10 mt-2 ">
                                            <li className="mb-1">
                                                Pre-launch checklist.
                                            </li>
                                            <li className="mb-1">
                                                Client approval & final adjustments.
                                            </li>
                                            <li className="mb-1">
                                                Google Analytics loaded.
                                            </li>
                                        </ul>
                                        <ul className="list-disc ml-10 mt-2">
                                            <li className="mb-1">
                                                Domain, Hosting, and SSL setup.
                                            </li>
                                            <li className="mb-1">
                                                Deployment and launch.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                Your investment in a custom website is an investment in your business.
                            </p>
                        </div>
                    </Tilt>                    
                </div>	
            </div>	
{/* yellow */}
            <div className="grid grid-cols-12 h-full relative">
                <div className="col-span-3 h-full py-32 pr-14 text-right relative" ref={ref4}>
                    <div className="sticky top-2/4 z-20" >
                        <h3 className="relative z-20 text-theme-complementary">
                            Partner with us.
                        </h3>
                        <h3 className="mb-5 relative z-20 text-theme-complementary">
                        <span className="text-theme-neutral font-medium">Your growth</span> is <span className="text-theme-neutral font-medium">our business</span>.
                        </h3>
                        <a href="" className="bg-theme-primary hover:bg-theme-orange text-white hover:text-theme-primary font-semibold py-2 px-4 border border-theme-orange hover:border-transparent rounded transition ease-in-out duration-300 relative z-20">
                           Get Started
                        </a>
                    </div>
                    <div 
                        className={`bg-gradient-to-b from-transparent via-theme-orange to-transparent h-full absolute w-[2px] right-0 top-0  ease-in-out duration-700 transform ${
                            inView4 ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        } origin-top`}
                    >
                    </div>
                </div>
                <div className="col-span-9 w-full ml-20 py-32">
                    <Tilt 
                        className="relative z-20 bg-theme-secondary-background -m-5 p-10 rounded-3xl border border-theme-complementary border-opacity-30" 
                        glareEnable={true} 
                        glareMaxOpacity={0.2} 
                        glareColor="#EE9859" 
                        glarePosition="all" 
                        glareBorderRadius="24px"
                        tiltMaxAngleX={1}
                        tiltMaxAngleY={1}
                    >
                        <div>
                            <h3 className="font-bold text-3xl text-theme-orange mb-3">
                                Our Process
                            </h3>
                            <h4 className="font-medium text-xl mb-10">
                                Sustaining Your Success
                            </h4>
                            <p className="mb-10 text-theme-complementary">
                                We begin every project with a deep dive into your world. We want to understand every facet of your business, brand, and goals to ensure the website we create resonates with your identity and ambitions. This initial phase involves detailed discussions to capture your vision, preferences, and expectations, ensuring our design aligns perfectly with your business strategy.
                            </p>
                            <ul className="list-outside">
                                <li className="mb-10 ml-5">
                                <span className="font-bold text-xl"><span className='text-theme-orange'>5.</span> Ongoing Support</span>
                                    <div className="grid grid-cols-2 gap-5 text-theme-complementary">
                                        <ul className="list-disc ml-10 mt-2 ">
                                            <li className="mb-1">
                                                24/7 Assistance.
                                            </li>
                                            <li className="mb-1">
                                                Unlimited small edits & updates.
                                            </li>
                                            <li className="mb-1">
                                                Analytical feedback and advice.
                                            </li>
                                        </ul>
                                        <ul className="list-disc ml-10 mt-2">
                                            <li className="mb-1">
                                                Bi-monthly SEO review and suggestions.
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                Your investment in a custom website is an investment in your business.
                            </p>
                        </div>
                    </Tilt>
                    
                </div>	
            </div>
        </section>
    );
};

export default JourneyBody;