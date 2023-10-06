import React from "react";
import { TextLine } from "..";

const About = () => {
    return (
        <section className="bg-theme-dark-600 bg-opacity-25 h-screen font-code">
            <div className="container relative h-full">
                <div className="bg-theme-blue-600 h-full absolute w-[1px] -left-3 "></div>
                <TextLine>
                    <p>
                        <span className="text-red-100">class</span>{" "}
                        <span className="text-blue-50">Author</span> {"= {"} 
                    </p>
                </TextLine>
            </div>
        </section>
    );
};

export default About;