import React from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-24 bg-white dark:bg-black relative overflow-hidden snap-start transition-colors duration-300">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              My career path and the companies I've had the privilege to work with.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              // Alternate left/right alignment for desktop
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-8`}>
                  
                  {/* Desktop Center Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-neon-green z-10 shadow-[0_0_10px_rgba(0,255,65,0.5)] mt-1.5 hidden md:block"></div>
                  
                  {/* Mobile Timeline Dot (Aligned Left) */}
                  <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-neon-green md:hidden mt-2"></div>

                  {/* Spacer to push content to the side on desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} pl-6 md:pl-0`}>
                    <RevealOnScroll delay={index * 100}>
                      <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 hover:border-neon-green/50 dark:hover:border-neon-green/50 transition-all duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] relative overflow-hidden">
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-green/5 rounded-full blur-3xl group-hover:bg-neon-green/10 transition-colors duration-500"></div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-green transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-1 text-xs font-medium text-neon-green bg-neon-green/5 px-2 py-1 rounded-full border border-neon-green/20">
                              <Calendar size={12} />
                              {exp.period}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 font-medium">
                            <Briefcase size={16} />
                            {exp.company}
                          </div>

                          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-black border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:border-neon-green/30 transition-colors">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;