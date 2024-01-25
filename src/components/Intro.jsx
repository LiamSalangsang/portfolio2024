import profile from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return <>
  <div className='flex items-center flex-col gap-4 justify-center mb-10'>
      <img  alt = 'Liam Salangsang Portrait' className = "mt-[8rem] w-[18rem] h-[18rem] object-cover rounded-full border-[0.35rem] border-black/85 shadow-xl" src={profile} />
      <TypeAnimation
      sequence={[
        'My Name is Liam',
        2000, 
        'I\'m a Front-end Developer',
        2000,
        'I like to make apps!',
        2000,
      ]}
      wrapper="span"
      speed={40}
      style={{fontSize:'2rem'}}
      repeat={Infinity}
    />
    </div>
    </> ;
};

export default Intro;