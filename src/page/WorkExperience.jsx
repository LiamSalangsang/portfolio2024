import SectionHeading from "../components/SectionHeading";
import ExperienceSection from "../components/ExperienceSection";



const WorkExperience = () => {
  return <section id='experience'>
  <SectionHeading> Work Experience </SectionHeading>
  <main className="flex flex-col items-center gap-2">
    <ExperienceSection/>
    <ExperienceSection/>
    <ExperienceSection/>
  </main>


  </section>
};

export default WorkExperience;