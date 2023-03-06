import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { MantineProvider } from '@mantine/core';
import { notifications } from '@mantine/notifications';
const Home = () => {



  const navigate=useNavigate() 

  const StartQuiz=()=>{
  
    notifications.show({
      
      title: 'Good luck',
      message: 'Quiz has been Started! ',
    })
    navigate('/quiz') 

  
  }
  return (
    <div>
      {/* <div className=''> */}
      {/* <div className='fixed'> */}
      <div className="relative  ">
        <p className="absolute text-2xl  top-1/2 text-white  left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold ">
          QUIZ-APP
        </p>
        <img
          className="h-32 w-[100%]"
          src="https://saffronchariot.com/wp-content/uploads/2021/04/modern_landing-footer-scaled-1.jpg "
        />
      </div>
      {/* </div>   */}
      <div className="relative ">
        <p className="absolute lg:left-1/2 lg:-translate-x-1/2 lg:first-letter:-translate-y-1/2  lg:font-black sm:top-4 mx-4  lg:text-4xl text-4xl font-mono text-[#dce9e6]">
          It’s so incredible to finally be
        </p>
        <p className="absolute lg:left-1/2 lg:-translate-x-1/2 lg:first-letter:-translate-y-1/2 lg:font-black top-24 lg:top-16  mx-4  lg:text-4xl text-4xl text-[#dce9e6] font-mono">
          understood.
        </p>
        <p className=" absolute lg:left-[22%] lg:text-2xl lg:pr-36  top-36  text-lg mx-3  text-[#dce9e6]  ">
          Only 10 minutes to get a “freakishly accurate” description of who you
          are and why you do things the way you do.
        </p>
        <p className=" absolute lg:left-[38%] lg:text-2xl lg:pr-36 lg:top-44 text-justify top-56 text-lg mx-3   text-[#dce9e6] ">
          who you are and why you do things the way you do.
        </p>
        <button onClick={StartQuiz}    
          className="absolute font-serif font-style: italic lg:top-80 text-2xl top-[72%] left-1/2 bg-violet-800  rounded-lg  px-3 py-1 shadow-xl -translate-x-1/2 -translate-y-1/2  "
        >
          Start Quiz
        </button>
        <div className=" mt-10 h-80 bg-[#4298b4]"></div>
        {/* <div className='bg-black transform-[rotate(180deg) scaleY(-1)]'></div> */}
        <img
          className=""
          src="https://www.16personalities.com/static/images/homepage/header-mountains-desktop.svg"
        >

        </img>
      </div>
    </div>
  )
}

export default Home;
