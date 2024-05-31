import ButtonCTA from '../button/ButtonCTA';
import { ColouredLine } from "..";

const AboutCTA = () => {
    return (
        <section className="py-32 relative overflow-x-hidden">
            <ColouredLine position="top-0" />
            <div className="container h-full flex">
                <div className="flex flex-col items-center justify-center w-full relative z-30">
                    <h4 className="font-bold text-3xl text-theme-purple mb-10">
                        Got a project in mind? Let's chat.
                    </h4>
                    <ButtonCTA href="#contact" theme="orange" buttonText="Contact" />
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;