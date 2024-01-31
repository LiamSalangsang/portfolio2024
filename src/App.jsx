import NavigationBar from "./components/NavigationBar";
import About from "./page/About";
import Main from "./page/Main";
import WorkExperience from "./page/WorkExperience";
import Projects from "./page/Projects";
import SectionDivider from "./components/SectionDivider";
import Circle from "./components/Circle";
import Skills from "./page/Skills";
import Footer from "./components/Footer";
import { useState } from "react";



const App = () => {
  const [ active, setActive ] = useState("#home");
  return <div className="flex flex-col items-center bg-gray-100  z-[-100]">
  <NavigationBar active = {active} setActive = {setActive} />
  <Circle/>
  <Main/>
  <SectionDivider/>
  <About/>
  <SectionDivider/>
  <Skills/>
  <SectionDivider/>
  <WorkExperience/>
  <SectionDivider/>
  <Projects/>
  <Footer setActive = {setActive}/>
  </div>
};

export default App;