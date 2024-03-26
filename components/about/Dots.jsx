import React from 'react';

export function Dots({ count }) {
  const dots = '.'.repeat(count);
  return <span className="opacity-25">{dots}</span>;
}

export default Dots;
