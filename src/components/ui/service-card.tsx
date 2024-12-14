"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string[]
}

export function ServiceCard({ icon, title, subTitle }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} className="group relative hover:bg-primary bg-[#242034] rounded-lg p-6 cursor-pointer transition-all duration-300">
      
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
          {icon}
        </div>      
      <div className={`flex items-end ${isHovered ? 'justify-between' : 'justify-between'} `}>
      
        { isHovered && <div className="mt-4 space-y-1">
        {subTitle?.map((item, index) => (
          <ul key={index} className="text-white flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1 text-white" /> {item}
          </ul>
        ))}
        </div>}
        {isHovered === false && <h3 className="text-white mt-20 text-xl font-normal">
        {title}
        </h3>}
        <ArrowUpRight className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}