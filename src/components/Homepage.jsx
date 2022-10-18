import React, { useEffect } from 'react'
import { BiTime } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};


function Homepage() {

  
  

   const control = useAnimation();
   
   const [ref, inView] = useInView();

   if (inView) {
     control.start({
       x: 0,
       transition: {
         delay: 0.8,
       },
     });
   } else {
     control.start("hidden");
   }

     useEffect(() => {
       if (inView) {
         control.start("visible");
       } else {
         control.start("hidden");
       }
     }, [control, inView]);
     
    useEffect(() => {
    document.title = 'JCHAGM | Home' 
    window.scrollTo(0, 0);

  }, [])


  return (
    <div className="flex flex-col w-auto h-auto" id="container">
      <div
        id="hero"
        className="w-full h-auto pb-20 md:h-screen  bg-hero bg-cover md:bg-contain bg-center bg-fixed flex flex-col pt-20 mt-10"
      >
        <div className="pt-10 flex flex-col px-20 md:w-full xl:w-1/2">
          <span className="text-white text-3xl md:text-6xl font-bold  ">
            THE PERFECT PLACE FOR IMPERFECT PEOPLE
          </span>
          <span className="text-white text-sm md:text-lg  flex justify-start px-5 md:px-20 pt-7 text-opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </span>

          <div className="flex flex-col md:flex-row text-white justify-center py-7 gap-5">
            <button className="p-2 border-2 border-white btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 h-0  bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full  text-white transition-colors duration-500 ease-in-out group-hover:text-black z-10">
                ATTEND SERVICE
              </span>
            </button>
            <button className="p-2 border-2 border-white btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 h-0  bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full  text-white transition-colors duration-500 ease-in-out group-hover:text-black z-10">
                COME WITH US
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto bg-white flex flex-col">
        <div className="pt-20">
          <span className="text-black font-bold text-6xl text-opacity-90">
            JOIN US
          </span>

          <div className="flex flex-col  md:flex-row justify-around w-full md:w-screen gap-5 md:gap-40 pt-20 flex-wrap pb-32 md:px-72">
            <motion.div
              className="box"
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
            >
              <div className="flex flex-col text-sm justify-center items-center ">
                <BiTime size={50} />
                <span className="font-bold text-xl pt-5">IN PERSON</span>
                <span className="text-sm font-semibold pt-5">SUNDAY</span>
                <span className="pt-5">9:00am - 11:00am</span>
                <span className="text-opacity-60 text-black text-xs pt-2">
                  JCHAGM Church
                </span>
              </div>
            </motion.div>
            <motion.div
              className="box"
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
            >
              <div className="flex flex-col text-sm justify-center items-center">
                <BiTime size={50} />
                <span className="font-bold text-xl pt-5">ONLINE</span>
                <span className="text-sm font-semibold pt-5">SUNDAY</span>
                <span className="pt-5">9:00am - 11:00am</span>
                <span className="text-opacity-60 text-black text-xs pt-2">
                  Online Only
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-auto bg-gray-100 h-auto flex flex-col justify-start items-center pt-20 pb-32 gap-5">
        <motion.div
          initial={{
            x: "100vw",
          }}
          animate={control}
          className="box"
        >
          <span className="font-bold text-3xl ">MISSED A RECENT MESSAGE?</span>
        </motion.div>
        <motion.div
          initial={{
            x: "200vw",
          }}
          animate={control}
        >
          <a href="https://www.facebook.com/JCHAGM" target="_blank">
            <button className="p-2 border-2 border-black btn relative inline-flex items-center justify-start overflow-hidden transition-all  rounded  group">
              <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

              <span className="w-full text-black transition-colors duration-500 ease-in-out group-hover:text-white z-10">
                WATCH ON FACEBOOK
              </span>
            </button>
          </a>
        </motion.div>
        <a href="https://fb.watch/g8HKqKJFDx/" target="_blank">
          <span className="bg-facebook bg-cover w-96 bg-center  h-80 flex justify-center items-center rounded-xl text-white">
            <FaFacebookF
              className="p-5 hover:bg-blue-700 bg-black bg-opacity-30 rounded-xl"
              size={70}
            />{" "}
          </span>
        </a>
        <span className="border-b-4  border-black text-3xl font-bold pt-10 pb-5">
          MUSIC
        </span>
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 md:gap-52 pt-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="font-bold text-xl"> HOPE WORSHIP </span>
            <a
              href="https://www.youtube.com/channel/UChIAcRFeye_leuSuXaoCjmA/featured"
              target="_blank"
            >
              <button className="p-2 border-2 border-black btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
                <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className="w-full text-black font-bold transition-colors duration-500 ease-in-out group-hover:text-white z-10">
                  WATCH ON YOUTUBE
                </span>
              </button>
            </a>

            <a
              href="https://www.youtube.com/watch?v=ovi_vokE7ds"
              target="_blank"
            >
              <span className="bg-hopeworship bg-cover w-96 bg-center  h-80 flex justify-center items-center rounded-xl text-white">
                <TbBrandYoutube
                  className="p-5 hover:bg-red-700 bg-black bg-opacity-30 rounded-xl"
                  size={80}
                />{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        id="youth"
        className="bg-youth w-full md:h-screen bg-cover bg-center  flex flex-col pb-10 justify-start items-center"
      >
        <span className="text-white pt-20 text-3xl font-bold border-b-4 pb-5 border-black">
          KIDS AND YOUTH
        </span>
        <div className="flex md:flex-row flex-col pt-20 gap-5 md:gap-64 justify-center ">
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full  text-white flex justify-center items-center">
              HOPE KIDS
            </span>
            <button className="p-2 border-4 border-black btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-xl  text-black font-bold transition-colors duration-500 ease-in-out group-hover:text-white z-10">
                MORE ABOUT KIDS
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full text-white flex justify-center items-center">
              YOUTH FOR NEW GENERATIONS
            </span>
            <button className="p-2 border-4 md:border-black  border-whitebtn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
              <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-xl text-white md:text-black font-bold transition-colors duration-500 ease-in-out group-hover:text-white z-10">
                MORE ABOUT YOUTH
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-black h-auto py-40 gap-10 justify-center items-center flex-col">
        <span className="text-white text-3xl font-bold">GIVE</span>
        <button className="p-2 border-4 border-white btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
          <span className="w-0 h-0  bg-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <Link
            className=" peer hover:cursor-pointer hover:opacity-30  pb-2"
            to="/tithes&offering"
          >
            <span className="w-full text-xl  text-white font-bold transition-colors duration-500 ease-in-out group-hover:text-black z-10">
              FIND OUT MORE
            </span>
          </Link>
        </button>
      </div>
      <div className="flex bg-white  h-auto py-40 gap-10 justify-center items-center flex-col px-10">
        <span className="text-black text-3xl font-bold">FOLLOW US </span>
        <span className="text-black font-bold">FACEBOOK </span>
        <a href="https://www.facebook.com/JCHAGM" target="_blank">
          <button className="p-2 border-2 px-4 border-black btn relative inline-flex items-center justify-start overflow-hidden transition-all   group">
            <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-xl text-black  font-bold transition-colors duration-500 ease-in-out group-hover:text-white z-10">
              @JESUS CHRIST HOPE OF ALL GENERATIONS, INC. MINISTRY
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Homepage