import { links } from '../lib/data.js';

const ScrollToSection= (sectionID) =>{
  const selected = document.getElementById(sectionID.slice(1));
  if (selected){
    window.scroll({
      top: selected.offsetTop - 100,
      behavior: 'smooth' //change to 'instant' if you want, smooth for user experience
    });
  }

}

const NavigationBar = () => {
  return <header className=' z-[100] fixed top-4'>
    <nav className='bg-white/90 px-7 py-4 rounded-full'>
      <ul className=" flex gap-6 ">
        {links.map((link)=> {
          return <div key = {link.hash} ><button onClick = {()=>ScrollToSection(link.hash)} className = 'text-gray-600 hover:text-black ease-in duration-200' >{link.name}</button></div> 
        })}
      </ul>
    </nav>
    </header> ;
};

export default NavigationBar;