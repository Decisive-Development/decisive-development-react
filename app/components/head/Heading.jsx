// import React, { useEffect } from "react";
// import textType from "../js/textType"

// import { TypeAnimation } from 'react-type-animation';

const Heading = () => {
    // useEffect(() => {
    //     textType();
    // }, []);

    return (
        <div className="relative z-20">
            <h1 className="text-3xl block uppercase text-theme-complementary font-medium">
                Bespoke
            </h1>
            <h1 className="text-6xl mb-5 font-medium flex h-20 up">
                <span className="text-theme-complementary">Web</span>&nbsp;Design&nbsp;<span className="text-theme-complementary">&</span> &nbsp;Development
            </h1>
            <p className="w-[700px] text-lg text-theme-complementary">
                Offering ground up, hand-coded websites with bespoke design and development.
            </p>
            <p className="w-[700px] text-lg text-theme-complementary">
                We tailor our services to your needs, ensuring your website is unique and thriving above your competition. Perfect for small companies, sole traders and start-ups.
            </p>
            <p className="w-[700px] mb-5 text-lg text-theme-complementary">
                Starting at £50/mo. 
            </p>
            <p className="w-[700px] font-light mb-5 italic">
                No page builders. 
            </p>
            {/* Turn these into CTAs  "Get Started" + "Find out more"*/}
            <a
                href="projects"
                className="link-hover border-b-2 border-blue mr-5 uppercase"
            >
                Services
            </a>
            <a
                href="projects"
                className="link-hover border-b-2 border-blue mr-5 uppercase"
            >
                About
            </a>
            <a
                href="projects"
                className="link-hover border-b-2 border-blue mr-5 uppercase"
            >
                Projects
            </a>
            <a
                href="projects"
                className="link-hover border-b-2 border-blue mr-5 uppercase"
            >
                Contact
            </a>
        </div>
    );
};

export default Heading;
