"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/constants/navigation";

interface NavMenuProps {
  items: MenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title} className="relative">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center gap-1 text-primary hover:text-primary py-2"
                >
                  {item.title}
                  <ChevronDown
                    size={20}
                    className={cn(
                      "transform transition-transform duration-200",
                      activeDropdown === item.title ? "rotate-180" : ""
                    )}
                  />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute left-0 top-full mt-2 w-80 bg-[#FFF0D6] backdrop-blur-sm rounded-lg shadow-lg p-4 z-50">
                    {/* Arrow indicator */}
                    <div className="absolute -top-2 left-4 w-4 h-4 bg-[#FFF0D6] transform rotate-45" />
                    <ul className="space-y-1 relative">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.path}
                            className="block px-4 py-2 text-primary hover:text-primary hover:bg-purple-50 rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className="block text-primary hover:text-primary py-2"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}