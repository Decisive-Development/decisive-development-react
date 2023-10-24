// import React, { useEffect } from "react";
// import textType from "../js/textType"

// import { TypeAnimation } from 'react-type-animation';

const Heading = () => {
  // useEffect(() => {
  //     textType();
  // }, []);

  return (
    <div className="relative z-20">
      <p className="text-2xl mb-5 font-light animate-pulse">TOM PENNY</p>
      <h1 className="text-7xl mb-5 font-medium flex h-20">
        Website
        <span className=" ml-5"></span>
      </h1>
      {/* <div id="particles-js" /> */}
      <p className="w-[700px] mb-5 text-lg">
        Enabling individuals and small businesses to thrive online. Enhancing
        your digital presence, helping you reach more people and achieve greater
        revenue. My services include bespoke design, reliable development,
        effective SEO, and valuable advice.
      </p>
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
