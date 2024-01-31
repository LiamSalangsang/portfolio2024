import { links } from "../lib/data";
import { MdWork } from "react-icons/md";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ExperienceSection = (props) => {
  const {title, location, timeWorked, achievements,icon, description} = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.4 1", "1.1 1"],
  });
  return <>

  <motion.section ref = {ref} style={{
        scaleX: scrollYProgress,
        opacity: scrollYProgress,
      }}
      initial = {{x:500}}
      animate = {{x:0}}
      transition={{ duration: 0.6 }}
      className="bg-black/10 rounded-lg relative min-w-80">
    <div className="absolute top-[39%] -left-10 z-10"><div className="w-7 h-7 rounded-full bg-black flex text-white justify-center items-center"> {icon}</div></div>
    <div className="absolute top-[39%] -left-[13rem] z-10"><div> {timeWorked}</div></div>
    <div className="z-50 text-center p-4 m-2 border-b-2 border-b-black/50">{title}</div>
    <div className=" gap-2 text-[0.85rem]" >
      <div className="p-2">
        <div className="font-semibold">{location}</div>
        <div className="text-gray-600">{timeWorked}</div>
        <ul className="list-square p-2">{achievements.map((achi, idx)=> <li  key = {idx}> - {achi} </li>)}</ul>
      </div>
      <div className="p-2"> Skills: <span className="font-semibold">{description}</span></div>
    </div>
    </motion.section></>
};

export default ExperienceSection;