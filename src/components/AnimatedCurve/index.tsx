import React from 'react'
import { Star } from './Star'
import { CurvedLine } from './CurvedLine'
import './styles.css'

const AnimatedCurve = () => {
  return (
    <div className='w-full mx-[auto] my-[0] flex justify-center'>
      <svg className='w-[100px] h-3 sm:w-[150px] sm:h-3 lg:w-[259px] lg:h-[23px]' preserveAspectRatio='xMidYMid meet' viewBox='0 0 259 23' fill='none'>
        <CurvedLine />
        <Star />
      </svg>
    </div>
  )
}

export default AnimatedCurve
