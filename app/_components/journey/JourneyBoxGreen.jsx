import Tilt from 'react-parallax-tilt';
import ButtonCTA from '../button/ButtonCTA';
import Image from 'next/image';
import images from '../../../public/index';
import { useInView } from 'react-intersection-observer';

const JourneyBoxGreen = ({ themeClass, leftHandJSX }) => {
    const [ref, inView] = useInView({
        threshold: 0.6
    });

    return (
        <div className="grid grid-cols-12 gap-0 sm:gap-x-10 h-full relative">
            <div
                className="col-span-12 lg:col-span-3 h-full relative py-32 pr-10 text-left lg:text-right "
                ref={ref}
            >
                <div className="sticky top-2/4 z-20 pl-5 lg:pl-0">
                    <p className="relative z-20 text-theme-complementary">
                        No stone left unturned.
                    </p>
                    <p className="mb-5 relative z-20 text-theme-complementary">
                        Bring{' '}
                        <span className="text-theme-neutral font-medium">your vision</span>{' '}
                        to <span className="text-theme-neutral font-medium">life</span>.
                    </p>
                    <ButtonCTA
                        href="#contact"
                        theme="green"
                        className="mr-auto lg:mr-[unset] lg:ml-auto"
                        buttonText="Get Started"
                    />
                </div>
                <div
                    className={`bg-gradient-to-b from-transparent via-theme-green to-transparent h-full absolute left-0 lg:left-[unset] w-[2px] right-0 top-0  ease-in-out duration-700 transform ${inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        } origin-top`}
                ></div>
                <Image
                    className="w-10 absolute opacity-100 -left-5 lg:left-[unset] -right-5 -top-5 animate-pulse"
                    src={images.code}
                    priority={false}
                    alt="circle"
                />
            </div>
            <div className="col-span-12 lg:col-span-9 w-full pt-0 pb-32 lg:py-32 relative z-20">
                <Tilt
                    className="relative z-20 bg-theme-secondary-background py-10 px-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
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
                        <p className="font-medium text-xl mb-10">
                            Bringing Your Vision To Life
                        </p>
                        <p className="mb-10 text-theme-complementary">
                            From planning to creation, our design and development phase is where your website starts to take shape. We focus on selecting the right graphics, media, and copy to match your brand. You'll see your site come to life through XD prototypes, which we refine based on your feedback. This step is collaborative, involving ongoing communication to ensure the site meets your needs and you are happy with the direction.
                        </p>
                        <ul className="list-outside">
                            <li className="mb-10 ml-0 sm:ml-5">
                                <span className="font-bold text-xl">
                                    <span className="text-theme-green">3.</span> Design &
                                    Development
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 text-theme-complementary">
                                    <ul className="list-disc ml-10 mt-2 ">
                                        <li className="mb-1">
                                            Graphics, Media, and Copywriting agreed upon
                                        </li>
                                        <li className="mb-1">
                                            XD prototype presented for approval
                                        </li>
                                        <li className="mb-1">
                                            Hand-coded development of the website
                                        </li>
                                    </ul>
                                    <ul className="list-disc ml-10 mt-0 md:mt-2">
                                        <li className="mb-1">
                                            Ongoing feedback and adjustments between parties
                                        </li>
                                        <li className="mb-1">
                                            Mobile optimisation and cross-browser testing
                                        </li>
                                        <li className="mb-1">
                                            SEO strategies implemented
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-outside">
                            <li className="mb-10 ml-0 sm:ml-5">
                                <span className="font-bold text-xl">
                                    <span className="text-theme-green">4.</span> Review & Launch
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 text-theme-complementary">
                                    <ul className="list-disc ml-10 mt-2 ">
                                        <li className="mb-1">
                                            Pre-launch checklist
                                        </li>
                                        <li className="mb-1">
                                            Client approval & final adjustments
                                        </li>
                                        <li className="mb-1">
                                            Google Analytics installed
                                        </li>
                                    </ul>
                                    <ul className="list-disc ml-10 mt-0 md:mt-2">
                                        <li className="mb-1">
                                            Domain, Hosting, and SSL setup
                                            </li>
                                        <li className="mb-1">
                                            Deployment and launch
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <p>
                            Your website is now live and ready to grow your business.
                        </p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default JourneyBoxGreen;
