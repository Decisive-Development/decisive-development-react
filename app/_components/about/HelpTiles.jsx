import Image from "next/image";

const HelpTiles = ({ image, title, description, colour, className }) => {
    return (
        <div className={`flex max-w-sm m-auto items-center justify-center flex-col text-center relative z-30 ${className}`}>
            <div className="h-[200px] block">
                <Image 
                    className="w-32 animate-pulse" 
                    src={image} 
                    alt="Help Tile" 
                />
            </div>
            <h3 className={`text-3xl ${colour} font-bold mb-5 flex-grow`}>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default HelpTiles;