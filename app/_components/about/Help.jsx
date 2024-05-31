import HelpTiles from "./HelpTiles";
import brickwall from "../../../public/icons/brickwall.png";
import magnifyingGlass from "../../../public/icons/magnifying-glass.png";
import statistics from "../../../public/icons/statistics.png";
import { ColouredLine } from "..";

const Help = () => {
    return (
        <section className="bg-theme-secondary bg-opacity-25 py-32 relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className="container h-full ">
                <h2 className="mb-5 text-center text-4xl z-30 relative">
                    How Can I Help?
                </h2>
                <p className="w-[600px] m-auto text-center z-30 relative mb-16">
                I specialise in building websites using code. This allows me to create a website that is quality, both what you see on the screen and what you don't see in the code.
                </p>
                <div className="grid grid-cols-3 gap-20 ">
                    <HelpTiles 
                        image={brickwall} 
                        title="Build Your Idea" 
                        description="Weather you have a new idea or an existing business, I can build a website that will help you achieve your goals and make you stand out from your competition." 
                        colour={"text-theme-blue"}
                    />
                    <HelpTiles 
                        image={magnifyingGlass} 
                        title="Establish Your Brand" 
                        description="Your website will cover all aspects of your brand, from the look and feel to the functionality and user experience. It doesn't stop there..." 
                        colour={"text-theme-orange"}
                    />
                    <HelpTiles 
                        image={statistics} 
                        title="Grow Your Business" 
                        description="My ultimate goal is to grow your business online, through traffic and conversions. It is my business to make sure your business thrives." 
                        colour={"text-theme-green"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Help;