// import React, { useEffect } from "react";
// import injectParticles from "./js/injectParticles"

// import { Header, Services, About, Projects, Contact } from "../components";
import Header from "./components/Header";

export default function Home() {

    // useEffect(() => {
	// 	injectParticles();
	// }, []);
    
  return (
    <main className="relative bg-theme-dark text-base h-screen">
        <section
            className="h-full w-full absolute z-10"
            id="particles-js"
        ></section>
        <Header />
       {/*<Services />
        <About />
        <Projects /> 
        <Partners />
        <Contact />  */}
    </main>
  )
}
