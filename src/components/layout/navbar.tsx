"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Services", "Works", "About", "Blog", "FAQ"];

  return (
    <nav className="fixed top-0 lg:relative w-full bg-[#FFFAF5] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-1" />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
          
          {/* Right side */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Button className="bg-primary text-white hidden lg:flex" >
              Let's Talk
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end p-2 hover:bg-gray-100 rounded-lg transition-colors mb-8"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}