import React from 'react';

// Defines the structure for a Project item in the portfolio
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[]; // Array of technologies used (e.g., "React", "Node.js")
  imageUrl: string;
  link?: string;
  aiDescription?: string; // AI-generated description
  isAiGenerated?: boolean; // Flag to track if AI description is active
}

// Defines a Skill item for the About section
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

// Defines a Work Experience entry
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

// Defines a Social Media link
export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}