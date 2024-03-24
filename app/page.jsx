import {
    ParticlesComp,
    Nav,
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
        <main className="relative bg-theme-primary text-base overflow-x-hidden">
            <ParticlesComp id="particles"/>
            <Nav />
            <Header />
            <Journey />
            <Pricing />
            {/* <Services /> */}
            {/* <About /> */}
            {/* <Projects /> */}
            {/* <Partners /> */}
            {/* <Contact /> */}
            <Footer />
        </main>
    );
}
