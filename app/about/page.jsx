import {
    Nav,
    AboutInfo,
    AboutMe,
    AboutHero,
    Contact,
    Footer,
    ParticlesComp
} from '../_components';

export default function About() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <AboutHero />
            <AboutMe />
            <AboutInfo />
            <Contact />
            <Footer />
            <ParticlesComp />
        </main>
    );
}
