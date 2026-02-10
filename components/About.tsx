import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SKILLS } from '../constants';
import { ChevronUp, ChevronDown } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  // State to track rotation index for the 3D wheel
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Refs for interaction handling (Mouse Wheel & Touch)
  const touchStartY = useRef<number | null>(null);
  const wheelAccumulator = useRef(0);
  const accumulatorTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Constants for wheel configuration
  const ANGLE_PER_ITEM = 360 / SKILLS.length; // How many degrees each item occupies
  const RADIUS = 160; // Radius of the 3D cylinder
  
  // Helper to update rotation safely
  const rotate = useCallback((direction: 1 | -1) => {
    setRotationIndex(prev => prev + direction);
  }, []);

  // Auto-rotation effect: Rotates the wheel automatically when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setRotationIndex(prev => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle Mouse Wheel to rotate the skill cylinder
  const handleWheel = (e: React.WheelEvent) => {
    wheelAccumulator.current += e.deltaY;
    const THRESHOLD = 60; 
    
    // Only trigger rotation if threshold is met (prevents too fast scrolling)
    if (wheelAccumulator.current > THRESHOLD) {
        rotate(1);
        wheelAccumulator.current = 0;
    } else if (wheelAccumulator.current < -THRESHOLD) {
        rotate(-1);
        wheelAccumulator.current = 0;
    }
    
    // Reset accumulator after a short delay
    if (accumulatorTimeout.current) clearTimeout(accumulatorTimeout.current);
    accumulatorTimeout.current = setTimeout(() => { 
        wheelAccumulator.current = 0; 
    }, 150);
  };

  // Touch Event Handlers for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true); // Pause auto-rotation
    touchStartY.current = e.touches[0].clientY;
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false); // Resume auto-rotation
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    
    // Detect swipe direction
    if (Math.abs(diff) > 40) {
      if (diff > 0) rotate(1);
      else rotate(-1);
    }
  };

  // Calculate the currently "active" (front-facing) index
  const normalizedIndex = ((rotationIndex % SKILLS.length) + SKILLS.length) % SKILLS.length;

  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300 snap-start">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Avatar / Image */}
          <div className="lg:w-1/3 flex justify-center">
            <RevealOnScroll>
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-neon-green rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="relative w-full h-full object-cover rounded-3xl border-2 border-white dark:border-slate-700 z-10 grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-[1.02] shadow-xl"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="lg:w-2/3 w-full">
            <RevealOnScroll delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-12">
                I'm a third-year Software Engineering student passionate about building modern web applications. 
                My journey started with academic projects and has grown into developing real-world solutions like 
                queue management systems and interactive platforms. I'm constantly learning new technologies, 
                focusing on clean code, intuitive user experiences, and solving practical problems through software.
              </p>

              {/* Interactive Skill Wheel Component */}
              <div className="relative">
                 <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-8 text-center lg:text-left">
                    Technical Proficiency (Auto-rotating)
                 </h3>
                 
                 <div 
                   className="relative h-[320px] w-full max-w-lg mx-auto lg:mx-0 perspective-1000 select-none"
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                   onWheel={handleWheel}
                   onTouchStart={handleTouchStart}
                   onTouchEnd={handleTouchEnd}
                   style={{ touchAction: 'pan-y' }}
                 >
                    {/* Wheel Container: Rotates based on rotationIndex */}
                    <div 
                       className="absolute top-1/2 left-1/2 w-full h-full"
                       style={{
                          transformStyle: 'preserve-3d',
                          transform: `translate(-50%, -50%) rotateX(${rotationIndex * -ANGLE_PER_ITEM}deg)`,
                          transition: 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                       }}
                    >
                       {SKILLS.map((skill, index) => {
                          const angle = index * ANGLE_PER_ITEM;
                          const isActive = index === normalizedIndex;
                          
                          return (
                            <div
                               key={skill.name}
                               className="absolute top-1/2 left-1/2 flex items-center justify-center"
                               style={{
                                  width: '280px',
                                  height: '60px',
                                  marginLeft: '-140px', // Center alignment
                                  marginTop: '-30px',
                                  // Position the item in 3D space along the cylinder's circumference
                                  transform: `rotateX(${angle}deg) translateZ(${RADIUS}px)`,
                                  backfaceVisibility: 'hidden', 
                               }}
                            >
                               {/* Individual Skill Card */}
                               <div 
                                 className={`w-full px-6 py-4 rounded-2xl border flex items-center justify-between gap-3 backdrop-blur-md transition-all duration-500
                                   ${isActive 
                                      ? 'bg-white dark:bg-slate-800/90 border-neon-green shadow-lg dark:shadow-[0_0_30px_rgba(0,255,65,0.25)] scale-110 z-10' 
                                      : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60 scale-95 grayscale'
                                   }
                                 `}
                               >
                                  <span className={`text-lg font-bold truncate ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {skill.name}
                                  </span>
                                  <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded ${isActive ? 'bg-slate-100 dark:bg-slate-950/50 text-neon-green' : 'bg-transparent text-slate-500'}`}>
                                    {skill.category}
                                  </span>
                               </div>
                            </div>
                          );
                       })}
                    </div>
                    
                    {/* Gradient Overlay for Fade Effect - Reduced opacity to keep neighbors visible */}
                    <div className="absolute -inset-x-4 top-0 h-12 bg-gradient-to-b from-slate-50 via-slate-50/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 dark:to-transparent pointer-events-none z-20 transition-colors duration-300"></div>
                    <div className="absolute -inset-x-4 bottom-0 h-12 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 dark:to-transparent pointer-events-none z-20 transition-colors duration-300"></div>

                    {/* Side Indicators (Dots) */}
                    <div className="absolute right-0 top-1/2 transform -translate-x-1/2 flex flex-col gap-3 z-30 pr-4">
                       {SKILLS.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                              ${i === normalizedIndex 
                                ? 'bg-neon-green shadow-[0_0_8px_rgba(0,255,65,0.8)] scale-125' 
                                : 'bg-slate-300 dark:bg-slate-700'
                              }`}
                          />
                       ))}
                    </div>
                    
                    {/* Helper Text / Controls */}
                    <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-60'}`}>
                        <ChevronUp size={16} className="text-slate-400 dark:text-slate-500 animate-bounce" />
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">Hover to Pause</span>
                    </div>
                 </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;