import React, { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { darkcontext } from "../context/Rohitcontext";
import { Link } from "react-router-dom";

function Navbar() {
  const darkMode = useContext(darkcontext);
  const isDarkTheme = darkMode.theme;

  const toggleTheme = () => {
    darkMode.setTheme(!isDarkTheme); // Corrected the case of setTheme
  };

  return (
    <div>
      <div
        className={
          isDarkTheme
            ? "bg-zinc-800 text-white lg:w-[99vw] md:w-[100vw] w-[50] flex justify-between  border-b-4  border-blue-500"
            : "bg-white text-black flex justify-between lg:w-[99vw] md:w-[100vw] w-[50] border-b-4  border-blue-500"
        }
      >
        <a href="/#Home"><img
          className="rounded-full relative lg:left-12 md:left-5 left-4 bottom-2  mt-3 lg:h-12 md:h-10 h-8"
          src="/Logo.webp"
          alt=""
        /></a>
        <ul className="flex lg:text-lg md:text-sm text-xs lg:gap-4 md:gap-3 gap-2 mt-4 relative lg:left-0 md:left-10 left-3  ">
         <a href="/#Home"><li className="hover:text-yellow-600 hover:animation hover:translate-all hover:scale-75 ">Home</li></a> 
         <a href="/#Service"> <li className="hover:text-yellow-700">Service</li></a>
         <a href="/#About"> <li className="hover:text-yellow-700">About</li></a>
        <a href="/#call">  <li className="hover:text-yellow-700">Contact</li> </a>
          
          <a href="/#Team">  <li className="hover:text-yellow-700">Team</li></a>
           
        </ul>
        <div className="z-50">
          <button onClick={toggleTheme}>
            {isDarkTheme ? (
              <CiLight className="mt-4 size-7 mr-5 " />
            ) : (
              <MdNightlight className="mt-4 size-7 mr-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
