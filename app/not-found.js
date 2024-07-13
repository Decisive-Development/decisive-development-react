import {
    Footer, 
    ParticlesComp
} from '../app/_components/index';
import { ColouredLine } from '../app/_components/index';
import ButtonCTA from '../app/_components/button/ButtonCTA';

export default function NotFound() {
    return <div className='relative'>
        <div  className='h-[90vh] relative overflow-x-hidden'>
            <ColouredLine position="top-0" />
            <div className='flex relative z-30 flex-col items-center justify-center text-center container h-full'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-theme-red mb-5'>
                    404 - Not found!
                </h1>
                <p>
                    Well well well, looks like you've stumbled upon a page that doesn't exist.
                </p>
                <p className='mb-10'>
                    Waste no time, return to safety!
                </p>
                <div>
                    <ButtonCTA 
                        className="w-full" 
                        href="/" 
                        theme="turquoise" 
                        buttonText="Return To Safety" 
                    />
                </div>
            </div>
            <ColouredLine position="bottom-0" />
        </div>        
        <Footer />
        <ParticlesComp />
    </div>
}