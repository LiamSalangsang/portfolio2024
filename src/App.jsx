import NavigationBar from "./components/NavigationBar";
import About from "./page/About";
import Main from "./page/Main";
import WorkExperience from "./page/WorkExperience";
import Projects from "./page/Projects";
import SectionDivider from "./components/SectionDivider";
import Circle from "./components/Circle";


const App = () => {
  return <div className="flex flex-col items-center bg-gray-100 z-[-100]">
  <NavigationBar/>
  <Circle/>
  <Main/>
  <SectionDivider/>
  <About/>
  <SectionDivider/>
  <WorkExperience/>
  <SectionDivider/>
  <Projects/>
  </div>
};

export default App;