import React from "react";

const TextLine = ({ children }) => {
    return <div className="w-full z-30 row-highlight relative line-number">{children}</div>;
};

export default TextLine;