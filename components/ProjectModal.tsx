import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
// AI Features - Commented out for now
// import { useState } from 'react';
// import { Sparkles, RotateCcw, Loader2 } from 'lucide-react';
// import { useGemini } from '../hooks/useGemini';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // AI Features - Commented out for now
  // const { generateProjectDescription, loading, error } = useGemini();
  // const [currentDescription, setCurrentDescription] = useState<string>('');
  // const [isAiActive, setIsAiActive] = useState(false);
  // const [generationError, setGenerationError] = useState<string | null>(null);

  if (!isOpen || !project) return null;

  // AI Features - Commented out for now
  // const displayDescription = isAiActive && currentDescription 
  //   ? currentDescription 
  //   : project.longDescription;

  // const handleGenerateDescription = async () => {
  //   setGenerationError(null);
  //   try {
  //     const aiDesc = await generateProjectDescription(
  //       project.title,
  //       project.tech,
  //       project.longDescription
  //     );
  //     setCurrentDescription(aiDesc);
  //     setIsAiActive(true);
  //   } catch (err) {
  //     setGenerationError(err instanceof Error ? err.message : 'Failed to generate description');
  //   }
  // };

  // const handleRestoreOriginal = () => {
  //   setIsAiActive(false);
  //   setCurrentDescription('');
  //   setGenerationError(null);
  // };

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

          {/* AI-Generated Badge - Commented out for now */}
          {/* {isAiActive && (
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full flex items-center gap-1">
                <Sparkles size={12} /> AI Enhanced
              </span>
            </div>
          )} */}

          {/* Error Message - Commented out for now */}
          {/* {generationError && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
              {generationError}
            </div>
          )} */}

          {/* AI Generation Controls - Commented out for now */}
          {/* <div className="mb-6 flex gap-2">
            <button
              onClick={handleGenerateDescription}
              disabled={loading}
              className="px-4 py-2 bg-gradient-to-r from-neon-green to-black text-black font-semibold rounded-lg hover:from-green-400 hover:to-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-neon-green/20"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate AI Description
                </>
              )}
            </button>

            {isAiActive && (
              <button
                onClick={handleRestoreOriginal}
                disabled={loading}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all disabled:opacity-50 flex items-center gap-2"
              >
                <RotateCcw size={16} />
                Restore Original
              </button>
            )}
          </div> */}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a href="#" className="flex-1 bg-neon-green text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg shadow-neon-green/20">
              <ExternalLink size={20} /> Live Demo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold py-3 px-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Github size={20} /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;