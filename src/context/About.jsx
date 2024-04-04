import React, { useContext } from 'react'
import { darkcontext } from './Rohitcontext';

function About() {
    const darkMode = useContext(darkcontext);
    const isDarkTheme = darkMode.theme;
  return (
    <div id='About'>
        <div className={isDarkTheme ? "bg-zinc-900 text-white" : "bg-white text-black"}>
    <div className='flex mt-5'>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-[45vw] md:ml-[30vw] ml-[32vw] '>ABOUT</p>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-3 md:ml-2 ml-1 text-blue-700'>US</p>



    </div>
    <div>
        <p className='w-[60vw] ml-[20vw] font-sans text-lg mt-5'>Welcome to Sparky Edu – your premier destination for digital excellence. We offer top-tier web services, data-driven solutions, and creative graphic design. With our skilled team and dedication to innovation, we exceed expectations and deliver tailored results worldwide. Customer satisfaction drives us, and we are committed to building lasting relationships based on trust and excellence. Choose Sparky Technologies for unparalleled quality.</p>
    </div>
    </div>
    </div>
  )
}

export default About