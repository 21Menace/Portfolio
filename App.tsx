import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  // Theme State: Initialize theme from localStorage or system preference, default to dark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Track the current visible section for the active nav link
  const [currentView, setCurrentView] = useState('home');
  
  // Loading State for the Preloader
  const [isLoading, setIsLoading] = useState(true);

  // Effect: Update the HTML class and localStorage when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // ScrollSpy Effect: Uses IntersectionObserver to detect which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Triggers when section is near center/top
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentView(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    
    // Observe all main sections
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]); // Re-run when loading finishes to ensure observers attach

  const toggleTheme = () => setIsDark(!isDark);

  // Smooth scroll handler used by Navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-slate-900 dark:text-slate-200 selection:bg-neon-green selection:text-black dark:selection:text-black transition-colors duration-300">
      
      {/* Show Preloader until animation is complete */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* 
        Main App Content 
        We use an opacity transition to smoothly reveal the content after the preloader finishes.
      */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          currentView={currentView}
          onNavigate={scrollToSection}
        />
        <main className="min-h-screen">
          <Hero onNavigate={scrollToSection} />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;