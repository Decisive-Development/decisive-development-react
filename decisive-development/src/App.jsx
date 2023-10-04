import React, { useEffect } from "react";
import injectParticles from "./js/injectParticles"
import designWhite from "./assets/design-white.png";
import { Nav } from "./components";

const App = () => {
	
	useEffect(() => {
		injectParticles();
	}, []);

  return (
    <main className="relative bg-theme-dark text-base">
      <section
        className="h-full w-full absolute z-10"
        id="particles-js"
      ></section>
      <section className="flex relative items-end p-10 h-screen w-full">
        <Nav />
        <div className="relative z-20">
          <p className="text-2xl mb-5 font-light">TOM PENNY</p>
          <h1 className="text-7xl mb-5 font-medium flex h-20">
            Website <span className="ml-5" id="text-type"></span>
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
        <img
          className="m-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none"
          src={designWhite}
          alt="Design"
        ></img>
      </section>
    </main>
  );
};

export default App;
