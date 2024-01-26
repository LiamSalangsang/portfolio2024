import buildingImg from "../assets/building.jpg";
import meHrImg from "../assets/me_and_hr.jpg";

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
    image: buildingImg,
  },
  {
    title: "Exclusive Shoes Store",
    description: "Exclusive Shoes Only Store. I love collecting shoes",
    skills: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    image: meHrImg,
  },
  {
    title: "Weather App",
    description: "Weather App to test skills in mobile developement",
    skills: ["Swift"],
    image: buildingImg,
  },
];
