import Logo from '../assets/logo-white.svg';
import { navLinks } from "../constants";


const Navbar = () => {
  return (
    <nav className="p-10 z-30 fixed left-0 top-0 flex flex-row justify-between w-full items-start pointer-events-none">
        <img
            className="w-52 max-w-full pointer-events-auto"
            src={Logo}
            alt="Decisive Development"
        ></img>
        <ul className="cursor-pointer text-lg pointer-events-auto">
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">Home</a>
            </li>
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">Services</a>
            </li>
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">About</a>
            </li>
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">Projects</a>
            </li>
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">Partners</a>
            </li>				
            <li className="hover:-translate-x-7 hover:text-blue transform duration-150">
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar