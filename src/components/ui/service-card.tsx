"use client";

import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

export function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#242034] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-[#1A1625]">
      
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
          {icon}
        </div>      
      <div className="flex items-end justify-between">
      <h3 className="text-white mt-20 text-xl font-normal">{title}</h3>
        <ArrowUpRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
      </div>
    </div>
  );
}