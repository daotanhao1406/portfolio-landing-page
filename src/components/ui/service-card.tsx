"use client";

import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

export function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#242034] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-[#1A1625]">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
          {icon}
        </div>
        <ArrowUpRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-white mt-20 text-lg font-medium">{title}</h3>
    </div>
  );
}