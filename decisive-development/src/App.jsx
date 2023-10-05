import React, { useEffect } from "react";
import injectParticles from "./js/injectParticles"

import { Header, Services } from "./components";

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
			<Header />
            <Services />
		</main>
	);
};

export default App;