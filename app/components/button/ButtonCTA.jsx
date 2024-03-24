import Link from 'next/link';

const themes = {
    red: "red border-theme-red",
    blue: "blue border-theme-blue",
    green: "green border-theme-green",
    turquoise: "turquoise border-theme-turquoise",
    orange: "orange border-theme-orange",
    purple: "purple border-theme-purple"
};


const ButtonCTA = ({ href, children, theme, className }) => {
    const baseClass = "bg-theme-primary text-white  font-semibold py-2 px-4 border rounded transition ease-in-out duration-300 relative z-20 w-40 block text-center font-code uppercase tracking-wider reactive duration-300";
    const themeClass = themes[theme] || "";
    const combinedClass = `${baseClass} ${themeClass} ${className || ''}`.trim();

    return (
        <a href={href} passHref className={combinedClass}>
            {children}
        </a>
    );
};

export default ButtonCTA;
