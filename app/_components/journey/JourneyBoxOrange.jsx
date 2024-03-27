import Tilt from 'react-parallax-tilt';
import ButtonCTA from '../button/ButtonCTA';
import Image from 'next/image';
import images from '../../../public/index';
import { useInView } from 'react-intersection-observer';

const JourneyBoxRed = ({ themeClass, leftHandJSX }) => {
  const [ref, inView] = useInView({
    threshold: 0.6
  });

  return (
    <div className="grid grid-cols-12 gap-0 sm:gap-x-10 h-full relative">
      <div
        className="col-span-12 lg:col-span-3 h-full relative py-32 pr-10 text-left lg:text-right "
        ref={ref}
      >
        <div className="sticky top-2/4 z-20 pl-5 lg:pl-0">
          <p className="relative z-20 text-theme-complementary">
            <span className="text-theme-neutral font-medium">Here</span> to{' '}
            <span className="text-theme-neutral font-medium">help.</span>
          </p>
          <p className="mb-5 relative z-20 text-theme-complementary">
            Your{' '}
            <span className="text-theme-neutral font-medium">personal</span> web
            developer.
          </p>
          <ButtonCTA
            href="/"
            theme="orange"
            className="mr-auto lg:mr-[unset] lg:ml-auto"
            buttonText="Get Started"
          />
        </div>
        <div
          className={`bg-gradient-to-b from-transparent via-theme-orange to-transparent h-full absolute w-[2px] left-0 lg:left-[unset] right-0 top-0  ease-in-out duration-700 transform ${
            inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } origin-top`}
        ></div>
        <Image
          className="w-10 absolute opacity-100 -left-5 lg:left-[unset] -right-5 -top-5 animate-pulse"
          src={images.vision}
          priority={false}
          alt="circle"
        />
        <Image
          className="w-10 absolute opacity-100 -right-5 -bottom-28 animate-pulse"
          src={images.heart}
          priority={false}
          alt="circle"
        />
      </div>
      <div className="col-span-12 lg:col-span-9 w-full pt-0 pb-32 lg:py-32 relative z-20">
        <Tilt
          className="relative z-20 bg-theme-secondary-background py-10 px-5 sm:p-10 rounded-3xl border border-theme-complementary border-opacity-30"
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#EE9859"
          glarePosition="all"
          glareBorderRadius="24px"
          tiltMaxAngleX={1}
          tiltMaxAngleY={1}
        >
          <div>
            <h3 className="font-bold text-3xl text-theme-orange mb-3">
              Our Process
            </h3>
            <p className="font-medium text-xl mb-10">Sustaining Your Success</p>
            <p className="mb-10 text-theme-complementary">
              We begin every project with a deep dive into your world. We want
              to understand every facet of your business, brand, and goals to
              ensure the website we create resonates with your identity and
              ambitions. This initial phase involves detailed discussions to
              capture your vision, preferences, and expectations, ensuring our
              design aligns perfectly with your business strategy.
            </p>
            <ul className="list-outside">
              <li className="mb-10 ml-0 sm:ml-5">
                <span className="font-bold text-xl">
                  <span className="text-theme-orange">5.</span> Ongoing Support
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 text-theme-complementary">
                  <ul className="list-disc ml-10 mt-2 ">
                    <li className="mb-1">24/7 Assistance.</li>
                    <li className="mb-1">Unlimited small edits & updates.</li>
                    <li className="mb-1">Analytical feedback and advice.</li>
                  </ul>
                  <ul className="list-disc ml-10 mt-0 md:mt-2">
                    <li className="mb-1">
                      Bi-monthly SEO review and suggestions.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <p>
              Your investment in a custom website is an investment in your
              business.
            </p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default JourneyBoxRed;