import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../lib/data";


const Skills = () => {
  return (
  <section id = 'skills'> 
    <SectionHeading> My Skills </SectionHeading>

    <div className="flex justify-center">
        <section className="flex gap-4  w-[55%] flex-wrap justify-center text-center">{skillsData.map((skill,idx)=> { return <div key = {idx} className={` ${idx % 2 == 0 ? 'hover:text-white hover:bg-gray-500 transition':'hover:bg-gray-300 ease-in-out duration-100'} p-2 rounded-xl border border-black`}>{skill}</div>})}</section>
    </div>

  </section>)
};

export default Skills; 