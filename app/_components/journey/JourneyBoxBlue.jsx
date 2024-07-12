import Tilt from 'react-parallax-tilt';
import ButtonCTA from '../button/ButtonCTA';
import Image from 'next/image';
import images from '../../../public/index';
import { useInView } from 'react-intersection-observer';

const JourneyBoxRed = ({ themeClass, leftHandJSX }) => {
    const [ref, inView] = useInView({
        threshold: 0.6
    });

    return (
        <div className="grid grid-cols-12 gap-0 sm:gap-x-10 h-full relative">
            <div
                className="col-span-12 lg:col-span-3 h-full relative py-16 md:py-32 pr-10 text-left lg:text-right "
                ref={ref}
            >
                <div className="sticky top-2/4 z-20 pl-5 lg:pl-0">
                    <p className="relative z-20 ">
                        Partner with us.
                    </p>
                    <p className="mb-5 relative z-20 ">
                        <span className="text-theme-neutral font-medium">Your growth</span>{' '}
                        is{' '}
                        <span className="text-theme-neutral font-medium">our business</span>
                        .
                    </p>
                    <ButtonCTA
                        href="#contact"
                        theme="blue"
                        className="mr-auto lg:mr-[unset] lg:ml-auto"
                        buttonText="Get Started"
                    />
                </div>
                <div
                    className={`bg-gradient-to-b from-transparent via-theme-blue to-transparent h-full absolute w-[2px] left-0 lg:left-[unset] right-0 top-0 ease-in-out duration-700 transform ${inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        } origin-top`}
                ></div>
                <Image
                    className="w-10 absolute -left-5 lg:left-[unset] -right-5 -top-5 animate-pulse"
                    src={images.lightBulb}
                    priority={false}
                    alt="circle"
                />
            </div>
            <div className="col-span-12 lg:col-span-9 w-full pt-0 py-16 md:pb-32 lg:py-32 relative z-20">
                <Tilt
                    className="relative z-20 bg-theme-secondary-background py-10 px-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
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
                            Collaborate
                        </h3>
                        <p className="font-medium text-xl mb-10">
                            Understanding Your Vision
                        </p>
                        {/* <p className="mb-10 ">
                            We begin every project with a deep dive into your world. We want
                            to understand every facet of your business, brand, and goals to
                            ensure the website we create resonates with your identity and
                            ambitions. This initial phase involves detailed discussions to
                            capture your vision, preferences, and expectations, ensuring our
                            design aligns perfectly with your business strategy.
                        </p> */}
                        <ul className="list-outside">
                            <li className="mb-10 ml-0 sm:ml-5">
                                <span className="font-bold text-xl">
                                    <span className="text-theme-blue">1.</span> Initial
                                    Consultation
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 ">
                                    <ul className="list-disc ml-10 mt-2 ">
                                        <li className="mb-1">
                                            Get to know one another and discuss your vision
                                        </li>
                                        <li className="mb-1">
                                            Discuss your business objectives and website expectations
                                        </li>
                                        <li className="mb-1">
                                            Address any queries to ensure full transparency
                                        </li>
                                    </ul>
                                    <ul className="list-disc ml-10 mt-0 md:mt-2">
                                        <li className="mb-1">
                                            Consider applications or features you want to include
                                        </li>
                                        <li className="mb-1">
                                            Establish a clear project scope and timeline
                                        </li>
                                        <li className="mb-1">
                                            Payment process explained
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-outside">
                            <li className="mb-10 ml-0 sm:ml-5">
                                <span className="font-bold text-xl">
                                    <span className="text-theme-blue">2.</span> Proposal &
                                    Contract
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 ">
                                    <ul className="list-disc ml-10 mt-2 ">
                                        <li className="mb-1">
                                            Breakdown of agreements and costs
                                        </li>
                                        <li className="mb-1">
                                            Agreed project scope and timeline
                                        </li>
                                        <li className="mb-1">
                                            Outlines goals, deliverables, and expectations for both
                                            parties
                                        </li>
                                    </ul>
                                    <ul className="list-disc ml-10 mt-0 md:mt-2">
                                        <li className="mb-1">
                                            Potential challenges and risks discussed
                                        </li>
                                        <li className="mb-1">
                                            Contract signed 
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <p>
                            Establish yourself as a leader in your industry with a website to be proud of.
                        </p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default JourneyBoxRed;
