import React, { useContext } from 'react';
import { darkcontext } from '../context/Rohitcontext';
import About from './About';
import Service from './Service';
import Team from './Team';
import Contact from './Contact';

function Home() {
  const darkMode = useContext(darkcontext);
  const isDarkTheme = darkMode.theme;

  return (
    <div id='Home'  >
      <div className={isDarkTheme ? "bg-zinc-900 text-white " : "bg-white text-black"}>
        <img className='lg:w-[100vw] md:w-[90vw] w-[97vw]' src="/computer.jpg" alt="" />
        <About/>
      <Service/>
      <Team/>
      <Contact/>
      </div>
      

    </div>
  );
}

export default Home;
