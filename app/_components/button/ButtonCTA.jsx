import cx from 'classix';

const themes = {
    red: 'red border-theme-red',
    blue: 'blue border-theme-blue',
    green: 'green border-theme-green',
    turquoise: 'turquoise border-theme-turquoise',
    orange: 'orange border-theme-orange',
    purple: 'purple border-theme-purple'
};

const ButtonCTA = ({ href, buttonText, theme, className, isExternal = false }) => {
    const baseClass =
        'bg-theme-primary cursor-pointer text-white font-semibold py-2 px-4 border rounded transition ease-in-out relative z-20 w-40 block text-center font-code uppercase h-fit tracking-wider reactive duration-300';

    return (
        <a
            href={href}
            className={cx(
                baseClass,
                themes[theme] ? themes[theme] : '',
                className ? className : ''
            )}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {buttonText}
        </a>
    );
};

export default ButtonCTA;