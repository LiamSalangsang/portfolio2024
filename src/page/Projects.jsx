import SectionHeading from "../components/SectionHeading";
import ProjectSection from "../components/ProjectSection";
import { projects } from "../lib/data";

const Projects = () => {
  return <div className="text-center flex flex-col relative" id="projects">
  <SectionHeading>Portfolio</SectionHeading>
  
{  projects.map((project,index) =>{

    return <div className= 'm-4' key = {index}>
      <ProjectSection {...project}/>
    </div>
  }
  )}
  
  </div>
};

export default Projects;