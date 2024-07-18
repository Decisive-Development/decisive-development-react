'use client';
import { useState } from 'react';

const colorClasses = [
    'text-theme-blue',
    'text-theme-red',
    'text-theme-green',
    'text-theme-orange',
    'text-theme-purple'
];

const ColouredLinks = ({ id, title, lastLinkColour, setLastLinkColour }) => {
    const [hoverColorClass, setHoverColorClass] = useState('');
    const [lastNoneBlankColour, setLastNoneBlankColour] = useState('');

    const getRandomColorClass = () => {
        const otherClasses = colorClasses.filter(
            (colorClass) =>
                colorClass !== lastLinkColour &&
                colorClass !== lastNoneBlankColour &&
                colorClass !== hoverColorClass
        );
        const newColorClass =
            otherClasses[Math.floor(Math.random() * otherClasses.length)];
        return newColorClass;
    };

    const changeColor = () => {
        const newColorClass = getRandomColorClass();
        setHoverColorClass(newColorClass);
        setLastLinkColour(newColorClass);
        setLastNoneBlankColour(newColorClass);
    };

    return (
        <li
            key={id}
            onMouseEnter={changeColor}
            onMouseLeave={() => setHoverColorClass('')}
            className={`hover:-translate-x-7 transform duration-150 w-fit md:w-[150%] ${hoverColorClass}`}
        >
            <a 
                className='w-full block' 
                href={`${id} `}
            >
                {title}
            </a>
        </li>
    );
};

export default ColouredLinks;