import React, { useEffect } from "react";
import injectParticles from "./js/injectParticles"

import { Header, Services, About } from "./components";

const App = () => {

	useEffect(() => {
		injectParticles();
	}, []);

    // useEffect(() => {
    //     if (!document.getElementById("particles-js-script")) {
    //       inject();
    //     }
    //   }, []);

	return (
		<main className="relative bg-theme-dark text-base">
			<section
				className="h-full w-full absolute z-10"
				id="particles-js"
			></section>
			<Header />
            <Services />
            <About />
		</main>
	);
};

export default App;