import Image from 'next/image';
import { Heading } from '..';
import images from '../../public/index';

const Header = () => {
  return (
    <section
      className="flex relative items-end p-9 h-[850px] sm:h-screen w-full"
      id="home"
    >
      <Heading />
      {/* <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-1 opacity-10"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-2 opacity-10"
                src={images.develop}
                alt="Develop"
            />
            <Image
                className="m-auto h-[110px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-3 opacity-10"
                src={images.decisive}
                alt="Decisive"
            />
            <Image
                className="m-auto h-[100px] w-auto absolute top-0 bottom-0 right-0 left-0 z-0 cursor-none select-none image-4 opacity-10"
                src={images.design}
                alt="Design"
            /> */}
    </section>
  );
};

export default Header;