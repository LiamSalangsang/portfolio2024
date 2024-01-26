import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Project({
  title,
  description,
  skills,
  image,
}) {
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
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold dark:text-black">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700d dark:text-black">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
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
          className="absolute hidden sm:block top-8 -right-40 w-[25.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-[4deg]"

        />
      </section>
    </motion.div>
  );
}