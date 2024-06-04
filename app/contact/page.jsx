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
            <div className='h-screen flex items-center justify-center'>
                <ContactForm />
            </div>
            <Footer />
            {/* <ParticlesComp /> */}
        </main>
    );
}
