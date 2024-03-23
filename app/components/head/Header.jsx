import Image from "next/image";
import { Nav, Heading } from "..";
import images from "../../../public/index";

const Header = () => {
    return (
        <section className="flex relative items-end p-10 h-screen w-full" id="home">
            <Nav />
            <Heading />
            <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-1 opacity-30"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-2 opacity-0"
                src={images.develop}
                alt="Develop"
            />
            <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-3 opacity-0"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-4 opacity-0"
                src={images.design}
                alt="Design"
            />
        </section>
    );
};

export default Header;
