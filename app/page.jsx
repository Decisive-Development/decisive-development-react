import {
    Services,
    Header,
    About,
    Projects,
    Partners,
    Contact,
    ParticlesComp,
    Footer

} from "./components";

export default function Home() {
    return (
        <main className="relative bg-theme-primary text-base ">
            <ParticlesComp />
            <Header />
            <Services />
            <About />
            <Projects />
            <Partners />
            <Contact />
            <Footer />
        </main>
    );
}
