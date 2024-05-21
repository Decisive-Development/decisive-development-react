import {
    Nav,
    AboutInfo,
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
            <AboutInfo />
            <Contact />
            <Footer />
            <ParticlesComp />
        </main>
    );
}
