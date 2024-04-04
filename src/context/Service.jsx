import React, { useContext } from 'react'
import { darkcontext } from './Rohitcontext';
import { Link } from 'react-router-dom';

function Service() {
    const darkMode = useContext(darkcontext);
    const isDarkTheme = darkMode.theme;
  return (
    <div id='Service'>
        <div className={isDarkTheme ? "bg-zinc-900 text-white" : "bg-white text-black"}>
       <div className='flex mt-4'>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-[44vw] md:ml-[30vw] ml-[30vw] '>OUR</p>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-3 md:ml-2 ml-1 text-blue-700'>SERVICE</p>



    </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative lg:right-0 md:right-8 right-10  '>

  <Link to={"/Webservice"}> <div className='border-0 lg:h-[60vh] md:h-[70vh] h-[75vh] lg:w-[20vw] md:w-[30vw] w-75 rounded-xl lg:ml-24 md:ml-20 ml-16 mt-10 bg-white text-black drop-shadow-lg'>
 <img className='h-[38vh]  lg:w-[18vw] md:w-[22vw] w-[60vw] lg:ml-5 md:ml-6 ml-12 mt-3 rounded-xl' src="/WebService (1).webp" alt="" />
 <p className='font-bold text-xl ml-14 mt-5'>WEB Development</p>
 <p className='ml-5 text-sm mt-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatibus autem consectetur </p>
</div></Link>
<Link to={"/datadriven"}>
<div className='border-0 lg:h-[60vh] md:h-[70vh] h-[75vh] lg:w-[20vw] w-75 rounded-xl lg:ml-24 md:ml-20 ml-16 mt-10 bg-white text-black drop-shadow-lg'>
 <img className='h-[38vh]  lg:w-[18vw] md:w-[22vw] w-[60vw] lg:ml-5 md:ml-6 ml-12 mt-3 rounded-xl' src="/Datadriven (1).webp" alt="" />
 <p className='font-bold text-xl ml-14 mt-5'>WEB Development</p>
 <p className='ml-5 text-sm mt-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatibus autem consectetur </p>
</div></Link>
<Link to={"/datadriven"}>
<div className='border-0 lg:h-[60vh] md:h-[70vh] h-[75vh] lg:w-[20vw] w-75 rounded-xl lg:ml-24 md:ml-20 ml-16 mt-10 bg-white text-black drop-shadow-lg'>
 <img className='h-[38vh]  lg:w-[18vw] md:w-[22vw] w-[60vw] lg:ml-5 md:ml-6 ml-12 mt-3 rounded-xl' src="/Graphic (1).webp" alt="" />
 <p className='font-bold text-xl ml-14 mt-5'>WEB Development</p>
 <p className='ml-5 text-sm mt-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatibus autem consectetur </p>
</div></Link>

</div>
</div>

    </div>
  )
}

export default Service