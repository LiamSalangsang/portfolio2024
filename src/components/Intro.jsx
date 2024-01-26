import profile from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return <>
  <div className='flex items-center flex-col gap-4 justify-center mb-10'>
      <img  alt = 'Liam Salangsang Portrait' className = "mt-[8rem] w-[22rem] h-[22rem] object-cover rounded-full border-[0.35rem] border-black/85 shadow-xl" src={profile} />
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
      style={{fontSize:'2rem'}}
      repeat={Infinity}
    />
    <div>My passion to make web applications only continues to grow!</div>
    </div>
    </> ;
};

export default Intro;