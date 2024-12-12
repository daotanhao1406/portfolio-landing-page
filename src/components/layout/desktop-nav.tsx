"use client";

import Link from "next/link";

interface DesktopNavProps {
  links: string[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  return (
    <div className="hidden md:flex gap-8 items-center">
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}