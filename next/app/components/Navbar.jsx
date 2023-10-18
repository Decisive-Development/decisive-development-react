import Image from 'next/image';
import Logo from '../../public/logo-white.svg';
import { navLinks } from "../constants";

const Navbar = () => {
    return (
        <nav className="p-10 z-30 fixed left-0 top-0 flex flex-row justify-between w-full items-start pointer-events-none">
           <Image 
                src={Logo}
                alt="Decisive Development"
                className="w-52 max-w-full pointer-events-auto"
            />
            <ul className="cursor-pointer text-lg pointer-events-auto">
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className="hover:-translate-x-7 hover:text-blue transform duration-150"
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar