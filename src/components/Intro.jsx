import profile from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return <>
  <div className='flex items-center flex-col gap-4 justify-center mb-10'>
      <img  alt = 'Liam Salangsang Portrait' className = "sm:mt-[8rem]  mt-[1.2rem] sm:w-[22rem] sm:h-[22rem] w-[16rem] h-[16rem] object-cover rounded-full border-[0.25rem] border-black/85 shadow-xl" src={profile} />
      <TypeAnimation
      sequence={[
        'Hi! I\'m Liam Salangsang',
        4500, 
        'Front-end Developer',
        1000,
        'Computer Science Student',
        1000,
      ]}
      wrapper="span"
      speed={40}
      className='sm:text-[1.75rem] text-[1.35rem] sm:order-none order-first sm:mt-0 mt-[2.9rem]'
      repeat={Infinity}
    />
    <div className='text-center w-80 sm:w-full'>My passion to make web applications only continues to grow!</div>
    </div>
    </> ;
};

export default Intro;