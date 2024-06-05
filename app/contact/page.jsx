import {
    Nav,    
    Footer,
    ParticlesComp
} from '../_components';
import { FeedbackForm } from '../_components/contact/FeedbackForm';

export default async function Contact() {
    return (
        <main className="relative bg-theme-primary text-base">
            <Nav />
            <div className='h-screen flex items-center justify-center'>
            <FeedbackForm />
            </div>
            <Footer />
            {/* <ParticlesComp /> */}
        </main>
    );
}
