'use client'
import { useState } from 'react'

interface FAQItemProps {
  question: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b border-gray-200 py-4'>
      <button className='w-full flex justify-between items-center text-left' onClick={() => setIsOpen(!isOpen)}>
        <span className='text-sm font-medium'>{question}</span>
        <span className={`p-2 bg-[#F1DEBB] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
            <path d='M6 9L12 3H0L6 9Z' fill='currentColor' />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className='mt-2 text-sm text-gray-600'>
          {`You can pay with a credit card or via bank transfer. If you choose the annual billing option, you'll get 2 months free and your subscription automatically at the end of every billing`} cycle.
        </div>
      )}
    </div>
  )
}

export default FAQItem
