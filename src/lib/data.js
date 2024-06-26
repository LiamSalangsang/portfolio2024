import techverse from "../assets/techverse.png";
import shoes from "../assets/shoes.png";
import React from "react";
import { MdWork } from "react-icons/md";
import { FaReact, FaHotel } from "react-icons/fa";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Portfolio", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

export const projects = [
  {
    title: "TechVerse",
    description:
      "Tech Ecommerce Store. Always been interested in the current tech trends",
    skills: ["MONGODB", "NestJS", "React", "NodeJS"],
    image: techverse,
  },
  {
    title: "Exclusive Shoes Store",
    description: "Exclusive Shoes Only Store. I love collecting shoes",
    skills: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    image: shoes,
  },
];

export const experience = [
  {
    title: "Web Developer Intern",
    location: "Remote",
    timeWorked: "April 2024 - Present",
    achievements: [
      "Designed Elegant Website Templates on the QuickSite Guru Website.",
      "Collaborated with Mentors to retrieve feedback regarding current UX/UI.",
      "Strenghthened Team Communication Skills.",
    ],
    icon: React.createElement(FaReact),
    description: "Figma | Webflow | HTML | CSS",
  },
  {
    title: "Front End Developer Intern",
    location: "Bangkok, Thailand",
    timeWorked: "Nov 2023 - Feb 2024",
    achievements: [
      "Applied ReactJS and React Native to create or migrate applications.",
      "Expanded knowledge in Full Stack Development.",
      "Collaborated in multiple projects with Team using Agile.",
      "Learnt JWT authentication and code structure through an intern project with technical lead.",
    ],
    icon: React.createElement(FaReact),
    description: "React | NestJS | Jira | SQL",
  },
  {
    title: "McDonalds Crew Trainer",
    location: "Brisbane, Australia",
    timeWorked: "Jan 2018 - Nov 2022",
    achievements: [
      "Communicated with team to provide food services efficiently",
      "Lead a team under high pressure peak times",
      "Taught new members, the structure and strategie with my knowledge ",
    ],
    icon: React.createElement(MdWork),
    description: "Teamwork | Leadership | Efficiency | Communication",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NestJS",
  "NodeJS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "SQL",
  "Python",
  "Framer Motion",
];
