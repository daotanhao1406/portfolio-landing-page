"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MenuButton } from "./MenuButton";
import { NavMenu } from "./NavMenu";
import { SocialLinks } from "./SocialLinks";
import { MenuItem } from "@/constants/navigation";

interface MobileNavProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export function MobileNav({ items, isOpen, onClose, onToggle }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:hidden">
      {/* Menu Button - Right Corner */}
      <div className="flex flex-col items-end">
        <MenuButton isOpen={isOpen} onClick={onToggle} />
      </div>
      
      {/* Slide Menu - Right Side */}
      <div
        ref={navRef}
        className={cn(
          "fixed inset-y-0 bg-[#F1DEBB] transform transition-transform duration-300 ease-in-out",
          "w-full md:w-1/2",
          "right-0",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className={cn(
            "fixed inset-0 bg-[#F1DEBB] transition-opacity duration-300",
            "md:block hidden",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={onClose}
        />

        <div className="h-full flex flex-col relative">
          <div className="px-4 py-6 flex justify-end">
            <MenuButton isOpen={isOpen} onClick={onClose} />
          </div>

          <div className="flex-1 px-4 py-2 overflow-y-auto">
            <NavMenu items={items} />
          </div>

          <div className="px-4 py-6 bg-[#F1DEBB] space-y-4 mb-4">
            <button className="w-full bg-primary hover:bg-primary text-white rounded-full py-3 mb-6 transition-colors">
              Let&apos;s Talk →
            </button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}