"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileNavProps {
  links: string[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-10">
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          {/* <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4">
            Let's Talk
          </Button> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}