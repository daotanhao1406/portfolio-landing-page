"use client";

import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <div className={`text-primary flex items-center p-1 ${ isOpen && 'bg-primary rounded-full  text-white'} transition-colors`}>
      <button
        onClick={onClick}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}