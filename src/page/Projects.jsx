import SectionHeading from "../components/SectionHeading";
import ProjectSection from "../components/ProjectSection";
import { projects } from "../lib/data";

const Projects = () => {
  return <div className="text-center flex gap-2 flex-col relative" id="projects">
  <SectionHeading>Portfolio</SectionHeading>
  
{  projects.map((project,index) =>{

    return <div className= 'relative' key = {index}>
      <ProjectSection {...project}/>
    </div>
  }
  )}
  
  </div>
};

export default Projects;