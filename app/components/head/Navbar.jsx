import Image from "next/image";
import images from "../../../public/index";
import { navLinks } from "../../constants";

const Navbar = () => {
    return (
       <div>
            <div className="pt-10 pb-5 px-10 z-30 fixed left-0 top-0 w-full bg-theme-primary ">
                <Image
                    src={images.logoWhite}
                    alt="Decisive Development"
                    className="w-52 max-w-full pointer-events-auto select-none"
                />
                <div className="absolute left-0 bottom-0 h-12 w-full translate-y-full nav-fade"></div>
            </div>
            <nav className="p-10 z-30 fixed right-0 top-0 pointer-events-none ">
                <ul className="cursor-pointer text-lg pointer-events-auto">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="hover:-translate-x-7 hover:text-blue transform duration-150"
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
       </div>
    );
};

export default Navbar;
