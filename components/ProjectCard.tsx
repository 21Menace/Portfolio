import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  isHovered: boolean;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, isHovered, onClick }) => {
  // Calculations for the "Deck Fan" effect
  // 1. Determine center index to fan out from the middle
  const centerIndex = (total - 1) / 2;
  const offset = index - centerIndex;
  
  // 2. Default State: Stacked closely with slight rotation for "messy deck" look
  const defaultTransform = `translateY(${offset * 2}px) translateX(${offset * 1}px) rotate(${offset * 2}deg)`;
  
  // 3. Hover State: Spread out horizontally and rotate for visibility
  const hoverTransform = `translateX(${offset * 260}px) rotate(${offset * 5}deg) translateY(${Math.abs(offset) * 10}px)`;

  return (
    <div
      onClick={() => onClick(project)}
      className="absolute w-64 h-80 md:w-72 md:h-96 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl cursor-pointer transition-all duration-500 ease-out overflow-hidden group/card hover:z-50 hover:border-neon-green/50 dark:hover:border-neon-green/50"
      style={{
        transform: isHovered ? hoverTransform : defaultTransform,
        zIndex: isHovered ? 100 : index, // Bring hovered items to front if needed, otherwise stack by index
        left: '50%',
        marginLeft: '-9rem', // Half of width to center
      }}
    >
      {/* Top Image Section */}
      <div className="h-1/2 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover/card:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" 
        />
      </div>

      {/* Bottom Content Section */}
      <div className="p-5 h-1/2 flex flex-col justify-between bg-white dark:bg-zinc-900 relative z-20 transition-colors duration-300">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover/card:text-neon-green transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Footer with Tech Tags & Icon */}
        <div className="flex justify-between items-center mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
          <div className="flex space-x-2">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500 group-hover/card:text-neon-green transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;