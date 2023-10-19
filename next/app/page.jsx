// import React, { useEffect } from "react";
// import injectParticles from "./js/injectParticles"

import { Services, Header, About, Projects, Partners, Contact } from "./components";

export default function Home() {

    // useEffect(() => {
    // 	injectParticles();
    // }, []);

    return (
        <main className="relative bg-theme-dark text-base ">
            <section
                className="h-full w-full absolute z-10"
                id="particles-js"
            ></section>
            <Header />
            <Services />
            <About />
            <Projects />
            <Partners />
            <Contact />
        </main>
    )
}
