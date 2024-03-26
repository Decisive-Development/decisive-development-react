import React from 'react';

const TextLine = ({ children }) => {
  return (
    <div className="w-full z-40 row-highlight relative line-number">
      {children}
    </div>
  );
};

export default TextLine;
