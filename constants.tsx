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
    title: "Nebula AI Dashboard",
    description: "Real-time AI analytics platform with predictive modeling.",
    longDescription: "A comprehensive dashboard for visualizing complex AI model outputs in real-time. Features include websocket streaming, WebGL data visualization using Three.js, and a Python backend powering the predictive engine.",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "Three.js"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "CryptoVault",
    description: "DeFi asset management tool with cross-chain support.",
    longDescription: "Secure non-custodial wallet management interface allowing users to swap assets across Ethereum, Solana, and Polygon bridges seamlessly. Built with heavy emphasis on security and audit logs.",
    tech: ["Next.js", "Solidity", "Web3.js", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "Echo Chat",
    description: "End-to-end encrypted messaging app for enterprise.",
    longDescription: "Designed for high-security environments, Echo Chat uses the Signal protocol to ensure message privacy. Includes file sharing, voice messages, and ephemeral messages.",
    tech: ["React Native", "Node.js", "Socket.io", "Redis"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "CloudScale",
    description: "Serverless infrastructure autoscaler.",
    longDescription: "An open-source tool that hooks into AWS CloudWatch to provide more granular autoscaling rules than default AWS policies, saving companies up to 40% on idle resources.",
    tech: ["Go", "AWS Lambda", "Docker", "Terraform"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#"
  },
  {
    id: 5,
    title: "Visionary",
    description: "AR interior design application.",
    longDescription: "Mobile-first web application utilizing the WebXR API to let users place furniture in their room through their camera feed. Integrates with major furniture catalogs.",
    tech: ["Vue.js", "WebXR", "Node.js"],
    imageUrl: "https://picsum.photos/600/400?random=5",
    link: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Computer Science Student",
    company: "University of Technology",
    period: "2023 - Present",
    description: "Currently pursuing a Bachelor's degree in Computer Science. Focusing on algorithms, data structures, and full-stack web development. Active member of the university coding club and hackathon organizer.",
    skills: ["Java", "Python", "Algorithms", "Mathematics"]
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "TechStart Solutions",
    period: "Summer 2023",
    description: "Collaborated with a team of developers to build features for a SaaS platform. Implemented responsive UI components using React and optimized API endpoints for better performance.",
    skills: ["React", "TypeScript", "Node.js", "Git"]
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 - 2023",
    description: "Designed and developed custom websites for local businesses and non-profits. Managed the entire project lifecycle from requirements gathering to deployment and maintenance.",
    skills: ["JavaScript", "HTML/CSS", "WordPress", "SEO"]
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "AWS", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "TensorFlow", category: "ai" },
  { name: "OpenAI API", category: "ai" }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "#", icon: <Github size={20} /> },
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={20} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={20} /> },
  { platform: "Email", url: "mailto:hello@example.com", icon: <Mail size={20} /> }
];