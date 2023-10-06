// import React, { useEffect } from "react";
// import textType from "../js/textType"

import { TypeAnimation } from 'react-type-animation';


const Heading = () => {

// useEffect(() => {
//     textType();
// }, []);

  return (
    <div className="relative z-20">
        <p className="text-2xl mb-5 font-light">TOM PENNY</p>
        <h1 className="text-7xl mb-5 font-medium flex h-20">
            Website <span className=" ml-5">
            <TypeAnimation
                sequence={[
                    'Developer', // Types 'One'
                    1000, // Waits 1s
                    'Two', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Two Three', // Types 'Three' without deleting 'Two'
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                />
            </span>
        </h1>
        <div id="particles-js" />
        <p className="w-[700px] mb-5 text-lg">
            Enabling individuals and small businesses to thrive online.
            Enhancing your digital presence, helping you reach more people and
            achieve greater revenue. My services include bespoke design,
            reliable development, effective SEO, and valuable advice.
        </p>
        <a href="projects" className="link-hover border-b-2 border-blue">
            SEE PROJECTS
        </a>
    </div>
  )
}

export default Heading