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
            <div className='h-screen flex items-center justify-center '>
                <div className="w-full mx-5 sm:mx-10 lg:mx-0">
                    <FeedbackForm />
                </div>
            </div>
            <Footer />
            {/* <ParticlesComp /> */}
        </main>
    );
}
