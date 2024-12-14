'use client'
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';

interface ProjectCardProps {
  title?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`
        relative rounded-2xl p-6 h-[250px]
        ${isHovered ? 'bg-violet-600' : 'bg-gray-800'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <h2 className="text-xl md:text-2xl font-medium text-white text-left">{title}</h2>
      )}
      {isHovered && (
        <div className="absolute bottom-6 right-6">
          <ArrowUpRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
        </div>
      )} 
    </div>
  );
}