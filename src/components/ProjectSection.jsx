import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Project({ title, description, skills, image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.4 1", "1.1 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-3:mb-8 last:mb-0 hover:text-white"
    >
      <section className="bg-gray-200  max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 group-hover:bg-[#5D3FD3] transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 group-hover:text-white ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/70 rounded-full group-hover:text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={image}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-40 w-[25.25rem] object-cover  rounded-t-lg shadow-2xl
        transition 
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-[4deg]"
        />
      </section>
    </motion.div>
  );
}
