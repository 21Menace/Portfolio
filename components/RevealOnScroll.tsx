import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
}

/**
 * RevealOnScroll Component
 * Wraps any content and applies a spring-loaded slide-up animation when it enters the viewport.
 */
const RevealOnScroll: React.FC<Props> = ({ children, className = "", delay = 0 }) => {
  // Framer Motion Variants defining the hidden (offscreen) and visible (onscreen) states
  const variants: Variants = {
    offscreen: { 
      y: 150, // Start 150px below final position
      opacity: 0
    },
    onscreen: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4, // Bouncy spring effect
        duration: 0.8,
        delay: delay / 1000 // Convert ms to seconds
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the element is visible
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;