import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface HeroProps {
  onNavigate: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300 snap-start">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-neon-green/10 dark:bg-neon-green/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-green/10 dark:bg-neon-green/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <RevealOnScroll>
            <div className="inline-block px-4 py-1.5 mb-6 border border-neon-green/30 rounded-full bg-neon-green/5 backdrop-blur-sm">
              <span className="text-neon-green text-xs font-semibold tracking-wider uppercase">Available for Hire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-slate-500 to-neon-green dark:via-slate-200">
                Digital Future
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I'm Suleiman, a Software Engineering student and aspiring Full-Stack Developer. 
              I build modern web applications with React, TypeScript, and PHP, turning ideas 
              into functional, user-friendly solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 bg-neon-green text-black font-bold rounded-full hover:bg-slate-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight size={20} />
              </button>
              <a 
                href="/Resume.pdf" 
                download="Suleiman_Resume.pdf"
                className="px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-full hover:border-slate-900 dark:hover:border-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Download CV <Download size={20} />
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Side: 3D Code Card Graphic */}
        <div className="w-full md:w-1/3 mt-16 md:mt-0 relative hidden md:block">
           <RevealOnScroll delay={200}>
             <div className="relative w-80 h-96 mx-auto perspective-1000">
               {/* Decorative background layers for depth */}
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl transform rotate-6 border border-slate-300 dark:border-slate-700/50 shadow-2xl z-10 transition-colors duration-300"></div>
               <div className="absolute inset-0 bg-gradient-to-bl from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl transform -rotate-6 border border-slate-300 dark:border-slate-700/50 shadow-2xl z-0 transition-colors duration-300"></div>
               
               {/* Main Code Editor Card */}
               <div className="absolute inset-0 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-neon-green/30 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,255,65,0.15)] z-20 overflow-hidden flex flex-col p-6 transition-all duration-300">
                  {/* Window Controls */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Syntax Highlighted Code Snippet */}
                  <div className="space-y-3 font-mono text-xs text-slate-600 dark:text-slate-400">
                    <p><span className="text-green-600 dark:text-neon-green">const</span> <span className="text-slate-700 dark:text-white">engineer</span> = &#123;</p>
                    <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">'Suleiman'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">'Full Stack'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Node'</span>],</p>
                    <p className="pl-4">hardWorker: <span className="text-yellow-600 dark:text-yellow-400">true</span></p>
                    <p>&#125;;</p>
                    <p className="animate-pulse text-neon-green">_</p>
                  </div>
               </div>
             </div>
           </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;