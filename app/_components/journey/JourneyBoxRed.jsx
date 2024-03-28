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
                className="col-span-12 lg:col-span-3 h-full relative py-32 pr-10 text-left lg:text-right "
                ref={ref}
            >
                <div className="sticky top-2/4 z-20 pl-5 lg:pl-0">{leftHandJSX}</div>
                <div
                    className={`bg-gradient-to-b from-transparent via-theme-${themeClass} to-transparent h-full absolute w-[2px] left-0 lg:left-[unset] lg:right-0 top-0  ease-in-out duration-700 transform ${inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        } origin-top`}
                ></div>
                <Image
                    className="w-5 absolute opacity-30 -left-[9px] lg:left-[unset] lg:-right-[9px] -top-5 animate-pulse"
                    src={images.circle}
                    priority={false}
                    alt="circle"
                />
            </div>
            <div className="col-span-12 lg:col-span-9 w-full pt-0 pb-32 lg:py-32 relative z-20">
                <Tilt
                    className="relative z-20 bg-theme-secondary-background py-10 px-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glareColor="#e27868"
                    glarePosition="all"
                    glareBorderRadius="24px"
                    tiltMaxAngleX={1}
                    tiltMaxAngleY={1}
                >
                    <div>
                        <h3 className={`font-bold text-3xl text-theme-${themeClass} mb-3`}>
                            Avoid Cookie Cutter Platforms
                        </h3>
                        <p className="font-medium text-xl mb-10">
                            Escape the Ordinary, Embrace the Exceptional
                        </p>
                        <p className="mb-5 text-theme-complementary">
                            The Problem with Website Builder Platforms:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 ml-5 gap-0 md:gap-10 text-theme-complementary">
                            <ul className="list-disc list-outside ">
                                <li className="mb-5 ">
                                    <span className="font-bold text-theme-neutral block">
                                        Not Custom-Designed
                                    </span>{' '}
                                    Rely on templates and your website might just disappear into
                                    the crowd, missing the chance to highlight what makes your
                                    brand special
                                </li>
                                <li className="mb-5 ">
                                    <span className="font-bold text-theme-neutral block">
                                        Poor Google Rankings & SEO
                                    </span>{' '}
                                    Lacking control over SEO details like speed and metadata can
                                    leave your site lagging behind in search results
                                </li>
                                <li className="mb-5 ">
                                    <span className="font-bold text-theme-neutral block">
                                        Lack of Customer Support
                                    </span>{' '}
                                    With builder platforms, you're often on your own, without the
                                    dedicated support to guide you through issues or updates
                                </li>
                            </ul>
                            <ul className="list-disc list-outside ">
                                <li className="mb-5 ">
                                    <span className="font-bold text-theme-neutral block">
                                        Limited Mobile Experience
                                    </span>{' '}
                                    Even with 'responsive' designs, many builders fall short in
                                    truly optimising for mobile, a critical flaw in today's
                                    smartphone-centric world
                                </li>
                                <li className="mb-5 ">
                                    <span className="font-bold text-theme-neutral block">
                                        Price
                                    </span>{' '}
                                    While website builders might seem cost-effective at first
                                    glance, fee's for add-ons, plugins, features and support can
                                    quickly add up. Not to mention the cost of your time
                                </li>
                            </ul>
                        </div>
                        <p>
                            Your investment in a custom website is an investment in your
                            business.
                        </p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default JourneyBoxRed;
