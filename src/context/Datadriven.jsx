import React, { useContext } from "react";
import { darkcontext } from "./Rohitcontext";

const Datadriven = () => {
  const darkMode = useContext(darkcontext);
  const isDarkTheme = darkMode.theme;
  return (
    <div>
<div className={isDarkTheme ? "bg-zinc-900 text-white " : "bg-white text-black"}>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid:1">
        
        <div
          className="bg-blue-400 text-white rounded-lg p-8 m-24  lg:h-[65vh] md:h-[50vh] h-[vh] relative right-10"
          style={{ backgroundColor: "#8E74F6" }}
        >
          <h1 className=" text-5xl text-center font-bold pb-4">Web Services</h1>
          <h2 className="text-3xl text-center pt-3 ">What we Provide</h2>
          <div className="lg:text-xl md:text-lg text-sm  font-medium pt-5 space-y-1">
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
            <h3>Website Developmenth</h3>
          </div>
          
        </div>
        {/* <div className="" style={{ width: "450px", height: "300px" }}> */}
        <img
            className="rounded-xl m-24 lg:h-[60vh] md:h-[50vh] h-[40vh] "
            src="/Datadriven (2).webp" 
            alt=""
          />
        {/* </div> */}
      </div>
      <h1 className="text-center text-4xl font-bold uppercase">Description</h1>
      <p className="mt-5 ml-8 mr-8 font-sans font-medium">
        We offer a comprehensive web service solution designed to facilitate
        seamless interaction and data exchange between various applications and
        systems. Our web service enables streamlined communication over the
        internet, providing a standardized platform for clients to access a wide
        range of functionalities. Whether you require data retrieval,
        manipulation, or complex business logic processing, our web service
        ensures reliable and efficient operation. With a focus on
        interoperability and scalability, we empower businesses to optimize
        their operations and enhance connectivity across diverse platforms and
        technologies.
      </p>
      <div >
        <h1 className=" text-center py-8 font-bold text-4xl">
          Our <span>Works</span>
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <div className="bg-white lg:h-[35vh] md:h-[30vh] h-[50vh] lg:w-[20vw] md:w-[15vw] w-[70vw] mt-5  ml-16  drop-shadow-xl ">
          <img className=" lg:w-[250px] md:w-[210px] w-[170px] lg:h-[150px] md:h-[100px] h-[100px] rounded-xl ml-6 pt-5"
            src="https://sparkyedu.in/_next/image?url=%2Fmehra.png&w=384&q=75"
            alt=""
          />
          <p className="text-black pt-5 ml-2">
            Mehra education is education platform with muntiple functionality
            online test, online attendence etc <span className="text-blue-400"> <br/> Visit</span>
          </p>
        </div>
        <div className="bg-white lg:h-[35vh] md:h-[30vh] h-[50vh] lg:w-[20vw] md:w-[15vw] w-[70vw] mt-5   ml-16  drop-shadow-xl">
          <img className="lg:w-[250px] md:w-[210px] w-[170px] lg:h-[150px] md:h-[100px] h-[100px] rounded-xl ml-6 pt-5"
            src="https://sparkyedu.in/_next/image?url=%2Fweb2.png&w=384&q=75"
            alt=""
          />
          <p className="text-black pt-5 ml-2">
            Mehra education is education platform with muntiple functionality
            online test, online attendence etc <span className="text-blue-400"> <br/> Visit</span>
          </p>
        </div>
        <div className="bg-white lg:h-[35vh] md:h-[30vh] h-[50vh] lg:w-[20vw] md:w-[15vw] w-[70vw] mt-5   ml-16  drop-shadow-xl">
          <img className="lg:w-[250px] md:w-[210px] w-[170px] lg:h-[150px] md:h-[100px] h-[100px] rounded-xl ml-6 pt-5"
            src="https://sparkyedu.in/_next/image?url=%2Fcoursry.png&w=384&q=75"
            alt=""
          />
          <p className="text-black pt-5 ml-2">
            Mehra education is education platform with muntiple functionality
            online test, online attendence etc <span className="text-blue-400"> <br/> Visit</span>
          </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Datadriven;