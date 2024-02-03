import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ExperienceSection = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.4 1", "1.1 1"],
  });
 return (

  <motion.section ref = {ref} style={{
        scaleX: scrollYProgress,
        opacity: scrollYProgress,
      }}
      initial = {{x:500}}
      animate = {{x:0}}
      transition={{ duration: 0.6 }}
      className="bg-black/10 rounded-lg relative min-w-80">
    <div className="absolute top-[39%] -left-11 z-10"><div className="w-9 h-9 rounded-full border-2 border-black flex  justify-center items-center"> {props.icon}</div></div>
    <div className="absolute top-[42%] -left-[12.5rem] z-10 text-left text-[0.9rem]"><div> {props.timeWorked}</div></div>
    <div className="z-50 text-center p-4 m-2 border-b-2 border-b-black/50 uppercase font-semibold">{props.title}</div>
    <div className=" gap-2 text-[0.85rem]" >
      <div className="pl-2">
        <div className="">{props.location}</div>
        <div className="text-gray-600">{props.timeWorked}</div>
        <ul className="list-square p-2">{props.achievements.map((achi, idx)=> <li  key = {idx}> - {achi} </li>)}</ul>
      </div>
      <div className="p-2"> Skills: <span className="font-semibold">{props.description}</span></div>
    </div>
    </motion.section>)

  
};

export default ExperienceSection;