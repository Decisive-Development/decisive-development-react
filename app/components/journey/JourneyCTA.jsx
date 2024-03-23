import ButtonCTA from "../button/ButtonCTA";

const JourneyCTA = () => {
    return (
        <section className="flex justify-center flex-col items-center text-center mb-64" >
            <h2 className="font-bold text-5xl text-theme-complementary mb-5 relative ws-15 z-20">
                <span className="text-theme-neutral">Your</span> Journey
            </h2>
            <div className="relative z-20">
                <p className="text-lg font-bold mb-3">
                    Discover why Decisive Development outpaces template builders like Wix, Squarespace or GoDaddy.
                </p>
                <p className="text-theme-complementary">
                    Unveil the advantages of choosing custom-crafted solutions tailored to your business's unique needs.
                </p>
            </div>
            <ButtonCTA href="/" theme="turquoise" className="mt-5">
                Get Started
            </ButtonCTA>
        </section>
    );
};

export default JourneyCTA;