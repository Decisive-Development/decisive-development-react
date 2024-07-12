import {
    Nav,
    ServicesHero,
    ServicesBody,
    ServicesContact,
    Footer,
    ParticlesComp
} from '../_components';

export default function About() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <ServicesHero />
            <ServicesBody />
            <ServicesContact />
            <Footer />
            <ParticlesComp />
        </main>
    );
}
