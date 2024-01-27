import techverse from "../assets/techverse.png";
import shoes from "../assets/shoes.png";
import companyIMG from "../assets/company.jpg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
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
    achievements: [],
    photos: companyIMG,
  },
  {
    title: "Academic Tutor",
    location: "Brisbane, Australia",
    timeWorked: "Jan 2023 - Jul 2023",
    achievements: [],
    photos: companyIMG,
  },
];
