import Link from 'next/link';

const themes = {
    red: "hover:bg-theme-red border-theme-red",
    blue: "hover:bg-theme-blue border-theme-blue",
    green: "hover:bg-theme-green border-theme-green",
    turquoise: "hover:bg-theme-turquoise border-theme-turquoise",
    orange: "hover:bg-theme-orange border-theme-orange",
    purple: "hover:bg-theme-purple border-theme-purple"
};

const ButtonCTA = ({ href, children, theme, className }) => {
    const baseClass = "bg-theme-primary text-white hover:text-theme-primary font-semibold py-2 px-4 border rounded transition ease-in-out duration-300 relative z-20 w-40 block text-center text-lg";
    const themeClass = themes[theme] || "";
    const combinedClass = `${baseClass} ${themeClass} ${className || ''}`.trim();

    return (
        <Link href={href} passHref className={combinedClass}>
            {children}
        </Link>
    );
};

export default ButtonCTA;
