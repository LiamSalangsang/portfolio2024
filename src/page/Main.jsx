import CV from '../assets/resume/LiamSalangsangCV.pdf';
import { HiDownload } from 'react-icons/hi'
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import Intro from '../components/Intro';

const Main = () => {
  return <div id="home">
    <Intro/>
    <section id = 'contact' className='flex flex-col sm:flex-row gap-4 justify-center items-center text-lg'>
    <div className='flex flex-col gap-4 sm:flex-row'>
      <a href="mailto:liam.jacobsalangsang@gmail.com" className='group bg-gray-900 text-white  flex items-center px-7 py-4 gap-2 rounded-full font-semibold hover:scale-110 transition'>Lets Get In Contact!
      <BsArrowRight className='opacity-60 group-hover:translate-x-4 group-hover:opacity-100 transition'/> </a>
      <a href = {CV} download className='group bg-white text-gray-900  px-7 py-4 flex items-center gap-2 rounded-full font-semibold hover:scale-110 transition'>Download CV
      <HiDownload className='opacity-60 group-hover:translate-y-2 group-hover:opacity-100 transition'/>
      </a>
    </div>
<div className='flex gap-4 sm:flex-row'>
  
        <a className= 'group hover:scale-110 transition rounded-full bg-white p-4' target="_blank" href="https://www.linkedin.com/in/liamsalangsang/" rel="noreferrer">
          <BsLinkedin className=' text-gray-700 group-hover:text-black  group-hover:scale-[1.2] transition'/>
        </a>
        <a className= 'group hover:scale-110 transition rounded-full bg-white p-4' target="_blank" rel="noreferrer" href="https://github.com/LiamSalangsang">
          <BsGithub className='text-gray-700 group-hover:scale-[1.2] group-hover:text-black transition '/>
        </a>
</div>
    
    </section>
  </div>;
};

export default Main;
