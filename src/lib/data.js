import techverse from "../assets/techverse.png";
import shoes from "../assets/shoes.png";
import companyIMG from "../assets/company.jpg";

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
    title: "Front End Developer Intern",
    location: "Bangkok, Thailand",
    timeWorked: "Nov 2023 -  Feb 2024",
    achievements: ["dsdksdsds", "sdnksndknskd", "dmsmdksmdkms"],
    photos: companyIMG,
  },
  {
    title: "Academic Tutor",
    location: "Brisbane, Australia",
    timeWorked: "Jan 2023 - Jul 2023",
    achievements: ["dsdksdsds", "sdnksndknskd", "dmsmdksmdkms"],
    photos: companyIMG,
  },
  {
    title: "McDonalds Crew Trainer",
    location: "Brisbane, Australia",
    timeWorked: "Jan 2018 - Nov 2022",
    achievements: ["dsdksdsds", "sdnksndknskd", "dmsmdksmdkms"],
    photos: companyIMG,
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
