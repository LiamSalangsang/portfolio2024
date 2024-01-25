import { links } from '../lib/data.js';

const NavigationBar = () => {
  return <header className=' z-[100] fixed top-4'>
    <nav className='bg-white/80 p-3 rounded-full'>
      <ul className=" flex gap-6 ">
        {links.map((link)=> {
          return <div key = {link.hash} ><a className = 'text-gray-500 hover:text-black ease-in duration-200' href = {link.hash}>{link.name}</a></div> 
        })}
      </ul>
    </nav>
    </header> ;
};

export default NavigationBar;