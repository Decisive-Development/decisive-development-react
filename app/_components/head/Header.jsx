import Image from "next/image";
import { Heading } from "..";
import images from "../../../public/index";

const Header = () => {
    return (
        <section className="flex relative items-end p-5 md:p-9 h-[850px] sm:h-screen w-full" id="home">
            <Heading />
            <div className="opacity-10 m-auto block absolute -top-10 bottom-0 right-0 left-0 z-0 cursor-none select-none w-[110px] h-[110px]">
                <Image
                    className="w-full logo-transform "
                    src={images.ddiconblue}
                    alt="Decisive"
                />
                <Image
                    className="w-full logo-transform "
                    src={images.ddicongreen}
                    alt="Decisive"
                />
                <Image
                    className="w-full logo-transform "
                    src={images.ddiconorange}
                    alt="Decisive"
                />
                <Image
                    className="w-full logo-transform "
                    src={images.ddiconred}
                    alt="Decisive"
                />
                <Image
                    className="w-full logo-transform"
                    src={images.ddiconwhite}
                    alt="Decisive"
                />
                <Image
                    className="w-full logo-transform"
                    src={images.ddiconturquoise}
                    alt="Decisive" 
                />
                <Image
                    className="w-full logo-transform"
                    src={images.ddiconviolet}
                    alt="Decisive"
                />
            </div>
        </section>
    );
};

export default Header;
