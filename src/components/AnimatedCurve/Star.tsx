import React from 'react';
import { STAR_PATH } from './contants';

interface StarProps {
  className?: string;
}

export const Star: React.FC<StarProps> = ({ className = '' }) => {
  return (
    <g className={`star-wrapper ${className}`}>
      <path
        className="star"
        d={STAR_PATH}
        fill="#FF7B32"
      />
    </g>
  );
};