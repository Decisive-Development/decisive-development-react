import ButtonCTA from "../button/ButtonCTA";
const Heading = () => {
    return (
        <div className="relative z-20 w-full">
            <p className="text-3xl block uppercase text-theme-complementary font-medium">
                Bespoke
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 font-medium ws-15" >
                <span className="text-theme-complementary">Web</span>&nbsp;Design&nbsp;<span className="text-theme-complementary">&&nbsp;</span> Development
            </h1>
            <div className="w-full lg:w-[700px] text-base md:text-lg text-theme-complementary">
                <p>
                    Offering ground up, hand-coded websites with bespoke design and development.
                </p>
                <p>
                    We tailor our services to your needs, ensuring your website is unique and thriving above your competition. Perfect for small companies, sole traders and start-ups.
                </p>
                <p className="mb-5">
                    Starting at £50/mo.
                </p>
                <p className="font-light mb-5 italic">
                    No page builders.
                </p>
            </div>
            <div className="flex flex-col space-y-5 sm:flex-row items-end justify-between w-full md:w-[550px]">
                <ButtonCTA href="#journey" theme="turquoise" className="">
                    Journey
                </ButtonCTA>
                <ButtonCTA href="#pricing" theme="purple" className="">
                    Pricing
                </ButtonCTA>
                <ButtonCTA href="/" theme="orange" className="">
                    Contact
                </ButtonCTA>
            </div>
        </div>
    );
};

export default Heading;
