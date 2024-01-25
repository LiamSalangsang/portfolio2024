import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <section id ='about' className="leading-8 max-w-[45rem] text-center text-[1rem]">
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4 ">
        {" "}
        Studying a{" "}
        <span className="font-bold">Bachelor of Computer Science</span> at the
        University of Queensland, I was able to learn about the multiple roles
        in the tech industry. I had always thought of myself as a creative
        person and web development was me way of showing this. This grew into a
        growing passion to the point where I would be completing an internship
        in Bangkok as a <span className="font-bold">Front-End Developer</span>.
        I was able to expand my knowledge to Full Stack Development and work on
        multiple projects. I love programming because of the everlasting curiosity/learning and
        the satisfying feeling after solving problems. I am eager in roles as a{" "}
        <span className="font-bold">Full-Stack Developer</span> offering
        expertise in{" "}
        <span className="font-bold">JavaScript, React, NodeJS.</span>
      </p>
      <p>
        {" "}
        While I am not coding or watching web dev videos, I enjoy video games,
        working out and watching movies. For future endeavours,
        <span className="font-bold"> I want to learn</span> technologies for a
        mobile developer like Swift
      </p>
    </section>
  );
};

export default About;
