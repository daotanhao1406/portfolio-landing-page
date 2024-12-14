import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface ProjectCardProps {
  title?: string;
  isHighlighted?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, isHighlighted }) => {
  return (
    <div 
      className={`
        relative rounded-2xl p-6 h-[250px]
        ${isHighlighted ? 'bg-violet-600' : 'bg-gray-800'}
      `}
    >
      {title && (
        <h2 className="text-xl md:text-2xl font-medium text-white text-left">{title}</h2>
      )}
      {isHighlighted && (
        <div className="absolute bottom-6 right-6">
          <ArrowUpRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
        </div>
      )}
    </div>
  );
}