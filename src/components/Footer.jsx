import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#111827] text-white  lg:h-[40vh] md:h-[40vh] h-[55vh]'>
      <footer >
        <div className='flex lg:gap-8 md:gap-6 gap-4 justify-center items-center font-medium pt-10 lg:text-xl md:text-lg text-sm lg:w-[100vw] md:w-[100vw]'>
            <h2>About  Us</h2>
            <h2>Contact Us</h2>
            <h2>FAQ</h2>
            <h2>Terms of services</h2>
            <h2>Refund policy</h2>
        </div>
        <div  className="text-center space-x-4 pt-8 text-gray-500 font-medium">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline-block mr-2 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> 931-529-7507 
        {" "}
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="inline-block mr-2 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg> Goswami Marg khichripur East Delhi-110091
        <p className='pt-5 font-thin'>© 2024 Sparky Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer