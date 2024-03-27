'use client';
import Tilt from 'react-parallax-tilt';
import ButtonCTA from '../button/ButtonCTA';
import Image from 'next/image';
import images from '../../../public/index';
import { useInView } from 'react-intersection-observer';
import JourneyBoxRed from './JourneyBoxRed';
import JourneyBoxBlue from './JourneyBoxBlue';
import JourneyBoxGreen from './JourneyBoxGreen';
import JourneyBoxOrange from './JourneyBoxOrange';

const JourneyBody = () => {
  // cant apply the animation twice to different elements

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
    // Convert sections into components
    // Add images
    // Add page CTAs
    <section className="pb-16 md:pb-64 journey-move">
      {/* red */}
      <JourneyBoxRed
        themeClass="red"
        leftHandJSX={
          <>
            <p className="mb-5 relative z-20 text-theme-complementary">
              Your website reflects your business. Make a{' '}
              <span className="text-theme-neutral font-medium">
                lasting impression
              </span>
              .
            </p>
            <ButtonCTA
              href="/"
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
