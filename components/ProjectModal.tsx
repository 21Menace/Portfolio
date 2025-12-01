import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop: Closes modal on click */}
      <div 
        className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white dark:bg-zinc-900 w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden relative z-10 animate-float opacity-100 scale-100 transition-all">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-black/50 rounded-full text-slate-900 dark:text-white hover:bg-neon-green hover:text-black dark:hover:text-black transition-colors z-20"
        >
          <X size={24} />
        </button>

        {/* Hero Image */}
        <div className="h-64 w-full relative">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>
          <h2 className="absolute bottom-6 left-8 text-4xl font-bold text-slate-900 dark:text-white text-shadow-lg">
            {project.title}
          </h2>
        </div>

        {/* Details Content */}
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-neon-green text-xs font-bold uppercase tracking-wide rounded-full border border-slate-200 dark:border-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a href="#" className="flex-1 bg-neon-green text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg shadow-neon-green/20">
              <ExternalLink size={20} /> Live Demo
            </a>
            <a href="#" className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold py-3 px-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Github size={20} /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;