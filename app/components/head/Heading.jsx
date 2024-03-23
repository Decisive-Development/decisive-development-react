import ButtonCTA from "../button/ButtonCTA";
const Heading = () => {
    return (
        <div className="relative z-20">
            <h1 className="text-3xl block uppercase text-theme-complementary font-medium">
                Bespoke
            </h1>
            <h1 className="text-6xl mb-5 font-medium flex h-20 ws-15" >
                <span className="text-theme-complementary">Web</span>&nbsp;Design&nbsp;<span className="text-theme-complementary">&</span> &nbsp;Development
            </h1>
            <p className="w-[700px] text-lg text-theme-complementary">
                Offering ground up, hand-coded websites with bespoke design and development.
            </p>
            <p className="w-[700px] text-lg text-theme-complementary">
                We tailor our services to your needs, ensuring your website is unique and thriving above your competition. Perfect for small companies, sole traders and start-ups.
            </p>
            <p className="w-[700px] mb-5 text-lg text-theme-complementary">
                Starting at £50/mo.
            </p>
            <p className="w-[700px] font-light mb-5 italic">
                No page builders.
            </p>
            {/* Turn these into CTAs  "Get Started" + "Find out more"*/}
            <div className="flex flex-row justify-between w-[550px]">
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
