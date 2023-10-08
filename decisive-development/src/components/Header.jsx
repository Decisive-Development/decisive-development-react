import { Nav, Heading } from ".";
import designWhite from "../assets/design-clip.png";

const Header = () => {
  return (
    <section className="flex relative items-end p-10 h-screen w-full">
        <Nav />
        <Heading />
        <img
            className="m-auto w-[900px] opacity-20 absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none"
            src={designWhite}
            alt="Design"
        ></img>
    </section>
  )
}

export default Header