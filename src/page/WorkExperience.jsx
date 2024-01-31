import React from "react";
import SectionHeading from "../components/SectionHeading";
import ExperienceSection from "../components/ExperienceSection";
import { experience } from "../lib/data";
import { MdWork } from "react-icons/md";

const WorkExperience = () => {
  return (
    <section id="experience">
      <SectionHeading> Work Experience </SectionHeading>
        <main className=" border-l-4 border-white p-6 flex flex-col gap-10">
        {experience.map((exp,idx)=>< React.Fragment key = {idx} ><ExperienceSection {...exp}/></React.Fragment>)}
        </main>
    </section>
  );
};

export default WorkExperience;
