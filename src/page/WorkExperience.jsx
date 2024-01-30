import React from "react";
import SectionHeading from "../components/SectionHeading";
// import ExperienceSection from "../components/ExperienceSection";
import { experience } from "../lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const WorkExperience = () => {
  return (
    <section id="experience">
      <SectionHeading> Work Experience </SectionHeading>
      <VerticalTimeline>
        {experience.map((exp, idx) => {
          return (
            <React.Fragment key={idx}>
                <VerticalTimelineElement icon={<MdWork />}>
                  <div className="border-b border-black uppercase text-[0.9rem]">{exp.title}</div>
                  <p>{exp.location}</p>
                  <p>
                    kdnskndsndksnksncjsnjsncjkdbdckjwbkcjsdcjsbd
                  </p>
                  <img className = 'w-[50rem]' src={exp.photos} alt="" />
                </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
