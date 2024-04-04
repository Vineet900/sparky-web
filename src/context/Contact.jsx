import React from 'react'

function Contact() {
  return (
    <div id='call'>
        <div className='flex mt-5'>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-[45vw] md:ml-[30vw] ml-[32vw] '>Contact</p>
        <p className='font-bold lg:text-3xl md:text-xl text-lg lg:ml-3 md:ml-2 ml-1 text-blue-700'>US</p>



    </div>

    <div className='font-bold ml-5'>
        <h1 className='text-lg '>Name</h1>
        <input className='drop-shadow-lg lg:w-[90vw] md:w-[60vw] w-[80vw] h-[5vh] mt-3 outline-none' type="text" />
        <h1 className='text-lg  mt-5'>Email</h1>
        <input className='drop-shadow-lg lg:w-[90vw] md:w-[60vw] w-[80vw] h-[5vh] mt-3 outline-none' type="text" />
        <h1 className='text-lg mt-5'>Message</h1>
        <textarea className='drop-shadow-lg  lg:w-[90vw] md:w-[60vw] w-[80vw] outline-none' name="" id="" cols="155" rows="8"></textarea><br />
        <button className='h-10 rounded-lg w-20 border-0 bg-black hover:bg-blue-700 mt-5 text-white'>Send</button>
    </div>
    
    </div>
  )
}

export default Contact