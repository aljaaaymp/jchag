import React from 'react'
import { BiTime } from "react-icons/bi";

function Homepage() {

  return (
    <div className="flex flex-col w-auto h-auto" id="container">
      <div
        id="hero"
        className="w-full h-screen  bg-hero bg-cover flex flex-col pt-20 mt-10"
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
            <span className="border-2 p-2">ATTEND SERVICE</span>
            <span className="border-2 p-2">COME WITH US</span>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto bg-white flex flex-col">
        <div className="pt-20">
          <span className="text-black font-bold text-6xl text-opacity-90">
            {" "}
            JOIN US{" "}
          </span>
          <div className="flex flex-col  md:flex-row justify-around w-full md:w-screen gap-5 md:gap-40 pt-20 flex-wrap pb-32 md:px-72">
            <div className="flex flex-col text-sm justify-center items-center ">
              <BiTime size={50} />
              <span className="font-bold text-xl pt-5">IN PERSON</span>
              <span className="text-sm font-semibold pt-5">SUNDAY</span>
              <span className="pt-5">9:00am - 11:00am</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                JCHAGM Church
              </span>
            </div>
            <div className="flex flex-col text-sm justify-center items-center">
              <BiTime size={50} />
              <span className="font-bold text-xl pt-5">ONLINE</span>
              <span className="text-sm font-semibold pt-5">SUNDAY</span>
              <span className="pt-5">9:00am - 11:00am</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                Online Only
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto bg-gray-100 h-auto flex flex-col justify-start items-center pt-20 pb-32 gap-5">
        <span className="font-bold text-3xl "> MISSED A RECENT MESSAGE? </span>
        <span className="border-2 border-black p-2 hover:bg-black hover:text-white">
          {" "}
          WATCH ON FACEBOOK{" "}
        </span>
        <span className="bg-black w-1/3 h-80"> LINK </span>
        <span className="border-b-4  border-black text-3xl font-bold pt-10 pb-5">
          MUSIC & PODCASTS
        </span>
        <div className="flex md:flex-row flex-col justify-center gap-5 md:gap-52">
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="bg-black h-40 w-40 rounded-full flex justify-center items-center text-white">
              HOPE YARN
            </span>
            <span className="font-bold text-xl"> HOPE WORSHIP </span>
            <span className="font-bold border-2 border-black p-2 hover:bg-black hover:text-white">
              LISTEN ON SPOTIFY
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="bg-black h-40 w-40 rounded-full flex justify-center items-center text-white">
              HOPE YARN
            </span>
            <span className="font-bold text-xl"> SPOTIFY </span>
            <span className="font-bold border-2 border-black p-2 hover:bg-black hover:text-white">
              LISTEN ON APPLE PODCASTS
            </span>
          </div>
        </div>
      </div>
      <div
        id="youth"
        className="bg-youth w-full md:h-screen bg-cover bg-center flex flex-col pb-10 justify-start items-center"
      >
        <span className="text-white pt-20 text-3xl font-bold border-b-4 pb-5 border-black">
          KIDS AND YOUTH
        </span>
        <div className="flex md:flex-row flex-col pt-20 gap-5 md:gap-64 justify-center ">
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full  text-white flex justify-center items-center">
              HOPE KIDS
            </span>
            <span className="font-bold text-xl border-4 p-2 border-black hover:bg-black hover:text-white">
              MORE ABOUT KIDS
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full text-white flex justify-center items-center">
              YOUTH FOR NEW GENERATIONS
            </span>
            <span className="font-bold text-xl border-4 p-2 md:border-black border-white text-white md:text-black hover:bg-black  hover:border-black hover:text-white ">
              MORE ABOUT YOUTH
            </span>
          </div>
        </div>
      </div>
      <div className="flex bg-black h-auto py-40 gap-10 justify-center items-center flex-col">
        <span className="text-white text-3xl font-bold">GIVE</span>
        <span className="text-white text-xl font-bold text-opacity-90 border -4 border-white py-2 px-4 hover:bg-white hover:text-black">
          FIND OUT MORE
        </span>
      </div>
      <div className="flex bg-white  h-auto py-40 gap-10 justify-center items-center flex-col px-10">
        <span className="text-black text-3xl font-bold">FOLLOW US </span>
        <span className="text-black">FACEBOOK </span>

        <span className="text-black md:text-xl font-bold text-opacity-90 border-2 border-black py-2 px-4 hover:bg-black hover:text-white ">
          @JESUS CHRIST HOPE OFF ALL GENERATIONS, INC. MINISTRY
        </span>
      </div>
    </div>
  );
}

export default Homepage