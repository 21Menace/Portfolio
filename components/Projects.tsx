import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import RevealOnScroll from './RevealOnScroll';

const Projects: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6 mb-16 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Hover over the deck to reveal the collection. Click a card to explore the details.
          </p>
        </RevealOnScroll>
      </div>

      {/* 
        DESKTOP LAYOUT: Interactive Card Deck 
        Hidden on mobile, visible on medium+ screens.
        Uses CSS transforms in ProjectCard to create the fanning effect.
      */}
      <RevealOnScroll delay={200} className="w-full">
        <div 
          className="hidden md:flex justify-center items-center h-[500px] relative w-full perspective-1000 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-5xl h-full flex justify-center items-center">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={PROJECTS.length}
                isHovered={isHovered}
                onClick={handleCardClick}
              />
            ))}
          </div>
          
          {/* Instruction Tooltip */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-50'}`}>
            <span className="text-slate-400 dark:text-slate-600 text-sm uppercase tracking-widest animate-pulse">Hover to spread</span>
          </div>
        </div>
      </RevealOnScroll>

      {/* 
        MOBILE LAYOUT: Vertical Stack
        Visible on small screens. Standard vertical list of cards.
      */}
      <div className="md:hidden px-6 flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <div 
              onClick={() => handleCardClick(project)}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg active:scale-95 transition-all"
            >
              <div className="h-48 overflow-hidden">
                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;