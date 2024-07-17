import Image from "next/image";
import images from "../../../public/index";
import Tilt from 'react-parallax-tilt';

const ServicesHero = () => {
    return (
        <section className="relative">
            <div className="container h-screen flex flex-col items-center justify-center text-center">
                <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mb-5 text-theme-blue z-30 relative">
                    SERVICES
                </h1>
                <div className="w-fit z-30 relative">
                    <h2 className="text-2xl mb-5 font-bold text-white">
                        I don't just build full websites...
                    </h2>
                    <h3 className="text-3xl mb-5 font-thin">
                        From HTML emails to UX/UI redesigns...
                    </h3>
                    <p className="font-bold text-4xl text-theme-complementary">
                    <span className="text-white">Here</span> to <span className="text-white">Help</span> 
                    </p>
                </div>
            </div>
            <div>
                <Image
                    className="hidden lg:block absolute bottom-0 right-1/2 w-11 left-1/2 z-0 cursor-none select-none duration-500 ease-in-out animate-bounce"
                    src={images.chevron}
                    alt="chevron"
                />
            </div>
        </section>
    );
};

export default ServicesHero;
// explain website build services
// lump sum option
// project based contract work
// HTML emails / landing pages
// Show CWV scores
// Show analytics screenshots
