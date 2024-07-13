import React from "react";
import { ProjectTile } from "..";
import { ColouredLine } from '..';

const Projects = () => {
    return (
        <section className="bg-theme-secondary bg-opacity-30 relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className="container relative h-full pb-0 md:pb-16 pt-16 md:pt-32">
                <div className="flex justify-center flex-col items-center text-center mb-16">
                    <h3 className="font-bold text-5xl mb-5 relative ws-15 z-20">
                        My <span className="text-theme-neutral">Clients</span>
                    </h3>
                    <div className="relative z-20">
                        <p className="text-lg font-bold mb-3 w-full md:w-[750px] m-auto">
                            I collaborate with businesses across <span className="text-theme-green">all</span> industries, from startups to large corporations, as well as with individuals and teams of <span className="text-theme-blue">any</span> size.
                        </p>
                        <p>
                            I'm proud of the work I do and I always strive to deliver the best results for my clients.
                        </p>
                    </div>
                </div>
                <ProjectTile />
            </div>
        </section>
    );
};

export default Projects;
