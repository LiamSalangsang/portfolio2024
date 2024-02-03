import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../lib/data";

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeading> My Skills </SectionHeading>

      <div className="flex justify-center">
        <section className="flex gap-2 w-[95%] sm:w-[55%] md:w-[70%] sm:gap-4 flex-wrap justify-center text-center">
          {skillsData.map((skill, idx) => {
            return (
              <div
                key={idx}
                className={` ${
                  idx % 2 == 0
                    ? "hover:text-white hover:bg-gray-500 transition"
                    : "hover:bg-gray-300 ease-in-out duration-100"
                } p-[0.25rem] sm:p-2 rounded-xl border border-black`}
              >
                {skill}
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Skills;
