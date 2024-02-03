import { links } from "../lib/data.js";
import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosCloseCircleOutline } from "react-icons/io";

const ScrollToSection = (sectionID) => {
  const selected = document.getElementById(sectionID.slice(1));

  if (selected) {
    window.scroll({
      top: selected.offsetTop - 100,
      behavior: "smooth",
    });
  }
};

const NavigationBar = ({ active, setActive }) => {
  const [ nav, showNav ] = useState(false)

  return (
    <header className=" z-[100] fixed sm:top-4 w-full h-full sm:w-auto sm:h-auto">
      <button  onClick = {()=>showNav(!nav)} className={`fixed hover:text-gray-400 transition top-2 right-2 text-[2.25rem] sm:hidden`}>{nav?React.createElement(IoIosCloseCircleOutline):React.createElement(RxHamburgerMenu)}</button>
      <nav className={`bg-white/95 sm:px-7 sm:py-5 w-full h-full sm:rounded-full  sm:block ${nav?'block':'hidden'}`}>
        <ul className=" flex gap-6 flex-col items-center h-full justify-center sm:flex-1 sm:flex-row">
          {links.map((link) => {
            return (
              <div
                key={link.hash}
                className={`sm:text-[0.9rem] text-[1.5rem] hover:text-black transition ${
                  active === link.hash
                    ? "text-black font-[600]"
                    : "text-gray-500"
                }`}
              >
                <button
                  onClick={() => {
                    ScrollToSection(link.hash);
                    setActive(link.hash);
                  }}
                >
                  {link.name}
                </button>
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
