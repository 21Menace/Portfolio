import React from 'react';
import { Sun, Moon, Home, User, FolderGit2, Mail, Briefcase } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, currentView, onNavigate }) => {
  
  // Handlers navigation clicks to perform smooth scrolling via the parent logic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: string) => {
    e.preventDefault();
    onNavigate(view);
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: <Home size={20} /> },
    { name: 'About', id: 'about', icon: <User size={20} /> },
    { name: 'Experience', id: 'experience', icon: <Briefcase size={20} /> },
    { name: 'Projects', id: 'projects', icon: <FolderGit2 size={20} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* 
        TOP BAR: Logo & Theme Toggle 
        Positioned absolute/fixed at top. 
        Note: The container is pointer-events-none so it doesn't block clicks on the page,
        but the interactive elements (buttons/links) are pointer-events-auto.
      */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="pointer-events-auto font-mono text-xl md:text-2xl font-bold tracking-tighter hover:scale-105 transition-transform duration-200 group"
        >
          {/* Logo styled to look like a code tag: <Suleiman.dev /> */}
          <span className="text-slate-400 dark:text-slate-600 group-hover:text-neon-green transition-colors duration-300">&lt;</span>
          <span className="text-slate-900 dark:text-white transition-colors duration-300">Suleiman</span>
          <span className="text-neon-green">.dev</span>
          <span className="text-slate-400 dark:text-slate-600 group-hover:text-neon-green transition-colors duration-300"> /&gt;</span>
        </a>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="pointer-events-auto p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-lg hover:scale-110 active:scale-95 hover:text-neon-green dark:hover:text-neon-green"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* 
        BOTTOM FLOATING DOCK 
        Centered at bottom, glassmorphism effect.
        Contains the main navigation links.
      */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/10 dark:shadow-black/50">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`
                  relative px-3 py-3 md:px-5 md:py-3 rounded-full flex items-center gap-2 transition-all duration-300 group
                  ${isActive 
                    ? 'bg-slate-100 dark:bg-slate-800 text-neon-green' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }
                `}
              >
                {/* Icon with scaling effect */}
                <span className={`relative z-10 ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
                  {link.icon}
                </span>
                
                {/* Text Label - Hidden on small mobile, visible on desktop or on hover */}
                <span className={`
                  text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 hidden md:block
                  ${isActive ? 'max-w-[100px] opacity-100 ml-1' : 'max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-1'}
                `}>
                  {link.name}
                </span>

                {/* Mobile Active Indicator Dot */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green md:hidden"></span>
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;