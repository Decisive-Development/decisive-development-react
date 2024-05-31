import {
    Nav,
    AboutInfo,
    Photographs,
    Help,
    AboutCTA,
    AboutHero,
    Footer,
    ParticlesComp
} from '../_components';

export default function About() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <AboutHero />
            <Photographs />
            <Help />
            <AboutCTA />
            <AboutInfo />
            <Footer />
            <ParticlesComp />
        </main>
    );
}
