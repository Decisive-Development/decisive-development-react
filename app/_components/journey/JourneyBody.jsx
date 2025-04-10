'use client';
import ButtonCTA from '../button/ButtonCTA';
import { useInView } from 'react-intersection-observer';
import JourneyBoxRed from './JourneyBoxRed';
import JourneyBoxBlue from './JourneyBoxBlue';
import JourneyBoxGreen from './JourneyBoxGreen';
import JourneyBoxOrange from './JourneyBoxOrange';

const JourneyBody = () => {
    
    const [ref2, inView2] = useInView({
        threshold: 0.6
    });
    const [ref3, inView3] = useInView({
        threshold: 0.6
    });
    const [ref4, inView4] = useInView({
        threshold: 0.6
    });

    return (
        <section className="pb-8 md:pb-32 journey-move">
            {/* red */}
            <JourneyBoxRed
                themeClass="red"
                leftHandJSX={
                    <>
                        <p className="mb-5 relative z-20 ml-0 lg:-ml-5">
                            Your website reflects your business. Make a{' '}
                            <span className="text-theme-neutral font-medium">
                                lasting impression
                            </span>
                            .
                        </p>
                        <ButtonCTA
                            href="#contact"
                            theme={'red'}
                            className="mr-auto lg:mr-[unset] lg:ml-auto"
                            buttonText="Get Started"
                        />
                    </>
                }
            />
            {/* blue */}
            <JourneyBoxBlue />
            {/* green */}
            <JourneyBoxGreen />
            {/* yellow */}
            <JourneyBoxOrange />
        </section>
    );
};

export default JourneyBody;
