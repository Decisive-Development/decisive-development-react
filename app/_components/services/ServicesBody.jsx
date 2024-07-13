import Image from "next/image";
import images from "../../../public/index";
import Tilt from 'react-parallax-tilt';
import brickwall from "../../../public/icons/brickwall.png";
import { ColouredLine, ServiceTile } from "..";

const ServicesBody = () => {
    return (
        <section className="bg-theme-secondary bg-opacity-25 pb-16 pt-32 md:py-32 relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-0 md:gap-10 xl:gap-20">
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#52BBF6"}
                    title="Bespoke Websites" 
                    description="If you’re looking for a premium, bespoke and effective website I can take your project from concept through to delivery and beyond. I’ll work with you to make sure you get fantastic results at every step and help you with ongoing support as needed." 
                    colour={"text-theme-blue"}
                    theme={"blue"}
                    modalOne="Test 1"
                    modalTwo="Test 2"
                />
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#B9FF33"}
                    title="HTML Emails" 
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    colour={"text-theme-green"}
                    theme={"green"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#FF8400"}
                    title="Project Support" 
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    colour={"text-theme-orange"}
                    theme={"orange"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#E46EED"}
                    title="Hosting & Maintenance" 
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    colour={"text-theme-purple"}
                    theme={"purple"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#48EDE8"}
                    title="SEO & Analytics" 
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    colour={"text-theme-turquoise"}
                    theme={"turquoise"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ServiceTile 
                    image={brickwall} 
                    glareColor={"#FF4848"}
                    title="Landing Pages" 
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    colour={"text-theme-red"}
                    theme={"red"}
                    modalOne="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalTwo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </section>
    );
};

export default ServicesBody;
// explain website build services
// lump sum option
// project based contract work
// HTML emails / landing pages
// Show CWV scores
// Show analytics screenshots
