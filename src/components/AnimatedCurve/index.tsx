import React from 'react';
import { Star } from './Star';
import { CurvedLine } from './CurvedLine';
import './styles.css';

const AnimatedCurve = () => {
  return (
    <div className="curve-container">
      <svg 
        className="curve-svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 259 23" 
        fill="none"
      >
        <CurvedLine />
        <Star className="desktop-only" />
      </svg>
    </div>
  );
};

export default AnimatedCurve