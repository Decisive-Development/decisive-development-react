import Image from "next/image";
import images from "../../../public/index";
import { navLinks } from "../../_constants";
import { ColouredLine } from '..';

const Navbar = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between bg-theme-secondary-background py-5 px-5 md:px-10 z-30 fixed left-0 top-0">
            <a href="/">
                <Image
                    src={images.logoWhite}
                    alt="Decisive Development"
                    className="w-40 sm:w-52 max-w-full pointer-events-auto select-none mb-5 md:mb-0"
                />
            </a>
            <nav className="flex items-center justify-normal md:justify-end w-full pointer-events-none">
                <ul className="cursor-pointer text-lg pointer-events-auto flex flex-row w-full md:w-[500px] justify-between">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="md:hover:-translate-x-7 hover:text-blue transform duration-150 w-fit md:w-[150%] text-center md:text-right"
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="absolute left-0 bottom-0 h-12 w-full translate-y-full nav-fade"></div>
            <ColouredLine />
        </div>
    );
};

export default Navbar;
