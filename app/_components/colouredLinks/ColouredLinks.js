'use client';
import { useState } from 'react';

const colorClasses = [
  'text-theme-blue',
  'text-theme-red',
  'text-theme-green',
  'text-theme-orange', 
  'text-theme-purple'
];

// Function to get a random color class

const ColouredLinks = ({ id, title, lastLinkColour, setLastLinkColour }) => {
  // Initialize state with an empty string or a default value
  const [hoverColorClass, setHoverColorClass] = useState('');
  const [lastNoneBlankColour, setLastNoneBlankColour] = useState('');

  // Function to get a random color class
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

  // Enhanced onMouseEnter event handler
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
      className={`hover:-translate-x-7 transform duration-150 ${hoverColorClass}`}
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  );
};

export default ColouredLinks;