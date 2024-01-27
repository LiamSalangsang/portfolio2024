import React from "react";
import SectionHeading from "../components/SectionHeading";
import ExperienceSection from "../components/ExperienceSection";
import { experience } from "../lib/data";

const WorkExperience = () => {
  return (
    <section id="experience">
      <SectionHeading> Work Experience </SectionHeading>
      <main className="flex flex-col items-center gap-2">
        {experience.map((exp,idx)=> (<React.Fragment key= {idx}><ExperienceSection {...exp}/></React.Fragment>))}
      </main>
    </section>
  );
};

export default WorkExperience;
