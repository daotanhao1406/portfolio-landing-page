import React from 'react';
import { CURVE_PATH } from './contants';

export const CurvedLine = () => {
  return (
    <path
      className="curved-line"
      d={CURVE_PATH}
      stroke="#613AF7"
      strokeWidth="2"
      strokeLinecap="round"
    />
  );
};