import React, { useEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const revealBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access global GSAP instance from CDN
    const gsap = (window as any).gsap;
    
    if (!gsap) {
        console.warn("GSAP not found, skipping preloader");
        onComplete();
        return;
    }

    const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
            // After the animation finishes, fade out the entire loader wrapper
            // and then trigger the onComplete callback to unmount/hide it
            gsap.to(wrapperRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: onComplete
            });
        }
    });

    // The Animation Sequence
    tl
    // 1. Expand the gap in the middle (the reveal box)
    .to(revealBoxRef.current, {
        width: "15vw", 
        duration: 1.2,
        delay: 0.2
    })
    // 2. Expand the image inside to fill the entire screen
    .to(revealBoxRef.current, {
        width: "100%",
        height: "100%",
        duration: 1.2,
        margin: 0
    })
    // 3. Move the text parts away (Left goes left, Right goes right)
    .to(textLeftRef.current, {
        x: -300,
        opacity: 0,
        duration: 1
    }, "<0.2") // Starts 0.2s after the previous step begins
    .to(textRightRef.current, {
        x: 300,
        opacity: 0,
        duration: 1
    }, "<");

  }, [onComplete]);

  return (
    <div 
      ref={wrapperRef} 
      className="fixed inset-0 bg-[#e0e0e0] flex justify-center items-center z-[9999] overflow-hidden"
    >
      {/* Left Text Part */}
      <div 
        ref={textLeftRef} 
        className="text-[clamp(3rem,10vw,8rem)] font-bold text-[#201d1d] leading-none z-10 whitespace-nowrap tracking-tighter"
      >
        Sule
      </div>
      
      {/* Center Reveal Box with Image */}
      <div 
        ref={revealBoxRef} 
        className="w-0 h-[140px] overflow-hidden relative mx-1 flex justify-center items-center"
      >
         <img 
            src="/profile.jpg" 
            alt="Profile Reveal"
            className="h-full w-auto min-w-[100vw] min-h-[100vh] object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 brightness-75"
         />
      </div>
      
      {/* Right Text Part */}
      <div 
        ref={textRightRef} 
        className="text-[clamp(3rem,10vw,8rem)] font-bold text-[#201d1d] leading-none z-10 whitespace-nowrap tracking-tighter"
      >
        iman
      </div>
    </div>
  );
};

export default Preloader;