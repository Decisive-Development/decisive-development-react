import {
    Nav,    
    ContactForm,
    Footer,
    ParticlesComp
} from '../_components';

export default function Contact() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <ContactForm />
            <Footer />
            <ParticlesComp />
        </main>
    );
}
