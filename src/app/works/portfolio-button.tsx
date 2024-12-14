'use client'
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavButtonProps {
  label: string;
  items: string[];
  isActive?: boolean;
}

export default function PortfolioButton({ label, items, isActive = false }: NavButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "px-6 py-2 rounded-full text-sm font-medium transition-all",
          isActive 
            ? "bg-white text-primary border-2 border-[#F1DEBB]" 
            : "bg-[#F4F4F4] text-[#312D42]"
        )}
      >
        {label}
      </button>
      
      {isOpen && (
        <div className={`absolute -left-10 top-full max-w-2xl min-w-96 w-svw mt-5 bg-[#FFF0D6] backdrop-blur-sm rounded-lg shadow-lg p-4 z-50`}>
          <div className="absolute -top-2 left-20 w-6 h-6 bg-[#FFF0D6] transform rotate-45" />
          <div className={`grid-cols-4 p-2 grid grid-rows-2 gap-x-1`} role="menu">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:text-primary"
                role="menuitem"
              >
                <span className="h-4 w-4 mr-2 rounded-full bg-gray-200" />
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}