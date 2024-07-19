import ButtonCTA from '../button/ButtonCTA';
import Image from 'next/image';
import images from '../../../public/index';

const Heading = () => {
    return (
        <div className="w-full">
            <div className='w-fit relative z-20'>
                <p className="text-3xl block uppercase font-medium">
                    Bespoke
                </p>
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl mb-5 font-medium hidden sm:inline-block ">
                    <span className="">Web</span>
                    &nbsp;Design&nbsp;
                    <span className="">&&nbsp;</span>
                    Development
                </h1>
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl mb-5 font-medium sm:hidden inline-block ">
                    <span className="">Web </span>
                    Design
                    <span className=""> & </span>
                    Development
                </h1>
                <div className="w-full lg:w-[700px] text-base xl:text-base 2xl:text-lg ">
                    <p>
                        Offering ground up, hand-coded websites with bespoke design and
                        development.
                    </p>
                    <p>
                        I tailor my services to your needs, ensuring your website is unique
                        and thriving above your competition. Perfect for small companies, sole
                        traders and start-ups.
                    </p>
                    <p className="mb-5">
                        Starting at £50/mo.
                    </p>
                    <p className="font-light mb-5 italic">
                        No page builders.
                    </p>
                </div>
            </div>
            <div className="flex flex-col space-y-5 sm:flex-row items-end justify-between w-full md:w-[550px]">
                <ButtonCTA 
                    href="#journey" 
                    theme="turquoise" 
                    buttonText="Journey" 
                />
                <ButtonCTA 
                    href="#pricing" 
                    theme="purple" 
                    buttonText="Pricing" 
                />
                <ButtonCTA 
                    href="#contact" 
                    theme="orange" 
                    buttonText="Contact" 
                />
            </div>
            <div className='translate-y-5'>
                <Image
                    className="hidden lg:block absolute -bottom-5 right-1/2 w-11 left-[48%] z-0 cursor-none select-none duration-500 ease-in-out animate-bounce"
                    src={images.chevron}
                    alt="chevron"
                />
            </div>
        </div>
    );
};

export default Heading;