import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../lib/data";


const Skills = () => {
  return (
  <section id = 'skills'> 
    <SectionHeading> My Skills </SectionHeading>

    <div className="flex justify-center">
        <section className="flex gap-4  w-[55%] flex-wrap justify-center text-center">{skillsData.map((skill,idx)=> { return <div key = {idx} className="p-2 hover:p-4 ease-in duration-100 rounded-xl border border-black">{skill}</div>})}</section>
    </div>

  </section>) ;
};

export default Skills;