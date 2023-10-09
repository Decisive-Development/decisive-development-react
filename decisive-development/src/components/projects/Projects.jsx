import React from "react";
import { ProjectTile } from "..";

const Projects = () => {
    return (
        <section className="">
            <div className="container relative h-full">
                <div className="bg-theme-blue-600 h-full absolute w-[1px] -left-3 "></div>
                <h3>
                    Some of my favourite projects I've worked on
                </h3>
                <ProjectTile />
            </div>
        </section>
    );
};

export default Projects;