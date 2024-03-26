'use client';
import { useState } from 'react'; // Correct import of useState

const colorClasses = [
  'text-theme-blue',
  'text-theme-red',
  'text-theme-green',
  'text-theme-yellow',
  'text-theme-purple'
];

// Function to get a random color class
const getRandomColorClass = (currentClass) => {
  let newColorClass;
  do {
    newColorClass =
      colorClasses[Math.floor(Math.random() * colorClasses.length)];
  } while (newColorClass === currentClass);
  return newColorClass;
};

const ColouredLinks = ({ id, title }) => {
  // Initialize state with an empty string or a default value
  const [hoverColorClass, setHoverColorClass] = useState('');
  // Enhanced onMouseEnter event handler
  const changeColor = () => {
    const newColorClass = getRandomColorClass();
    setHoverColorClass(newColorClass);
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
