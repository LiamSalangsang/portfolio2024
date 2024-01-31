import { links } from '../lib/data.js';
import { useState } from 'react';

const ScrollToSection= (sectionID) =>{
  const selected = document.getElementById(sectionID.slice(1));
  if (selected){
    window.scroll({
      top: selected.offsetTop - 100,
      behavior: 'smooth' 
    });
  }

}

const NavigationBar = ({active, setActive}) => {


  return <header className=' z-[100] fixed top-4'>
    <nav className='bg-white/95 px-7 py-4 rounded-full'>
      <ul className=" flex gap-6 ">
        {links.map((link)=> {
          return <div key = {link.hash} ><button onClick = {()=>{(ScrollToSection(link.hash)); setActive(link.hash);}} className={`hover:text-black transition ${active === link.hash ? 'text-black font-[500]' : 'text-gray-500'}`}
          >{link.name}</button></div> 
        })}
      </ul>
    </nav>
    </header> ;
};

export default NavigationBar;