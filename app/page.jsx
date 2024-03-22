import {
    ParticlesComp,
    Header,
    Journey,
    Pricing,
    Services,
    About,
    Projects,
    Partners,
    Contact,
    Footer

} from "./components";

export default function Home() {
    return (
        <main className="relative bg-theme-primary text-base ">
            <ParticlesComp 
            options={
                {
                    fullScreen: {
                        enable: false,
                        zIndex: -1
                    }
                }
            }
            />
            <Header />
            <Journey />
            <Pricing />
            {/* <Services /> */}
            {/* <About /> */}
            {/* <Projects /> */}
            <Partners />
            {/* <Contact /> */}
            <Footer />
        </main>
    );
}
