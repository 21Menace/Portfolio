import React from 'react';
import { Project, Skill, SocialLink, Experience } from './types';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * This file serves as a static data source for the application.
 * In a real-world scenario, this data might be fetched from an API or CMS.
 */

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "QuickQuestion",
    description: "Interactive Q&A platform for real-time knowledge sharing.",
    longDescription: "A modern web application that enables users to ask questions and get quick answers from the community. Built with a clean, responsive interface and deployed on Vercel for optimal performance.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "https://quickquestion-delta.vercel.app"
  },
  {
    id: 2,
    title: "Queue Management System",
    description: "Intelligent queue management for institutions.",
    longDescription: "A comprehensive system designed to streamline queue management in educational institutions and service centers. Features include real-time queue monitoring, automated ticket generation, and admin dashboard for analytics.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    imageUrl: "/Queue Management system.png",
    link: "https://github.com/21Menace/Simple-Queue-Management-System"
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "Modern portfolio with 3D animations and dark mode.",
    longDescription: "A stunning portfolio website showcasing projects and skills with interactive 3D elements, smooth scroll animations, and a beautifully designed dark/light theme toggle. Built with modern web technologies for optimal performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/developer_portfolio.png",
    link: "https://github.com/21Menace/Portfolio"
  },
  {
    id: 4,
    title: "ATM Simulation System",
    description: "Console-based ATM interface simulation in C++.",
    longDescription: "A fully functional ATM simulation demonstrating core banking operations including balance inquiry, withdrawals, deposits, and PIN management. Implements object-oriented programming principles and secure transaction handling.",
    tech: ["C++", "OOP", "Data Structures"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "https://github.com/21Menace/TASK-2-ATM-SIMULATION"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineering Student",
    company: "University",
    period: "2023 - Present",
    description: "Third-year Software Engineering student with a strong focus on full-stack development and modern web technologies. Actively working on personal projects and building practical applications to solve real-world problems.",
    skills: ["JavaScript", "PHP", "C++", "Web Development"]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Freelance Projects",
    period: "2024 - Present",
    description: "Building web applications and management systems for various use cases. Specializing in creating intuitive user interfaces and implementing efficient backend solutions. Projects include queue management systems and interactive web platforms.",
    skills: ["React", "TypeScript", "PHP", "MySQL"]
  },
  {
    id: 3,
    role: "Student Developer",
    company: "Academic Projects",
    period: "2023 - Present",
    description: "Developing various academic and personal projects including ATM simulations, portfolio websites, and question-answer platforms. Continuously learning new technologies and best practices in software development.",
    skills: ["HTML/CSS", "JavaScript", "Git", "Problem Solving"]
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "PHP", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Git / GitHub", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Framer Motion", category: "tools" },
  { name: "Problem Solving", category: "tools" }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/21Menace", icon: <Github size={20} /> },
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={20} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={20} /> },
  { platform: "Email", url: "mailto:suleimangishini@gmail.com", icon: <Mail size={20} /> }
];