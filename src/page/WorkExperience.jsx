import React from "react";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../lib/data";
import { motion } from 'framer-motion';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const WorkExperience = () => {
  return (
    <>
    <section id="experience">
    <SectionHeading>My experience</SectionHeading>
    <VerticalTimeline
    layout="1-column-left"
    >
      {experience.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
    className="vertical-timeline-element--work  lg:w-[50rem] md:w-[42rem] overflow-hidden"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date= {item.timeWorked}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={item.icon}
  >
          <motion.div
          initial ={{scale: 0}}
          animate = {{scale: 1}}
          transition = {{duration: 0.3}}
          >
    <h3 className="vertical-timeline-element-title border-b-2 border-white px-2 pt-2 uppercase text-center font-semibold text-[0.85rem] md:text-[1rem]">{item.title}</h3>
    <h4 className="vertical-timeline-element-subtitle p-2 text-[0.85rem] md:text-[1rem] ">{item.location}</h4>
    <div>
      {item.achievements.map((achi, index)=> <div className = 'text-[0.85rem] md:text-[1rem]' key ={index}> - {achi}</div>)}
    </div>
  </motion.div>
  </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>


  </section>
 </>
  );
};

export default WorkExperience;
