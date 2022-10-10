import React from 'react'
import { BiTime } from "react-icons/bi";

const Homepage = () => {
  return (
    <div className="flex flex-col w-auto h-auto" id="container">
      <div id="hero" className="w-fit h-screen bg-hero bg-cover flex flex-col">
        <div
          id="navbar"
          className="flex flex-row text-white justify-between px-10 py-7 font-bold"
        >
          <span className="text-3xl"> JCHAGM. </span>
          <div className="flex gap-11">
            <span> WATCH </span>
            <span> ABOUT </span>
            <span> OUTREACH </span>
            <span> GIVE </span>
          </div>
        </div>
        <div className="pt-10 flex flex-col w-1/2">
          <span className="text-white text-6xl font-bold">
            THE PERFECT PLACE FOR IMPERFECT PEOPLE
          </span>
          <span className="text-white text-lg  flex justify-start px-20 pt-7 text-opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </span>

          <div className="flex flex-row text-white justify-center py-7 gap-5">
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
          <div className="flex justify-between pt-20 pb-32 px-72">
            <div className="flex flex-col text-sm justify-center items-center">
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
        <span className="font-bold text-3xl"> MISSED A RECENT MESSAGE? </span>
        <span className="border-2 border-black p-2"> WATCH ON FACEBOOK </span>
        <span className="bg-black w-1/3 h-80"> LINK </span>
        <span className="border-b-4  border-black text-3xl font-bold pt-10 pb-5">
          MUSIC & PODCASTS
        </span>
        <div className="flex justify-center  gap-52">
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="bg-black h-40 w-40 rounded-full flex justify-center items-center text-white">
              HOPE YARN
            </span>
            <span className="font-bold text-xl"> HOPE WORSHIP </span>
            <span className="font-bold border-2 border-black p-2">
              LISTEN ON SPOTIFY
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="bg-black h-40 w-40 rounded-full flex justify-center items-center text-white">
              HOPE YARN
            </span>
            <span className="font-bold text-xl"> SPOTIFY </span>
            <span className="font-bold border-2 border-black p-2">
              LISTEN ON APPLE PODCASTS
            </span>
          </div>
        </div>
      </div>
      <div
        id="youth"
        className="bg-youth w-full h-screen bg-cover bg-center flex flex-col justify-start items-center"
      >
        <span className="text-white pt-20 text-3xl font-bold border-b-4 pb-5 border-black">
          KIDS AND YOUTH
        </span>
        <div className="flex pt-20 gap-64 justify-center ">
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full  text-white flex justify-center items-center">
              HOPE KIDS
            </span>
            <span className="font-bold text-xl border-4 p-2 border-black">
              MORE ABOUT KIDS
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="bg-black w-40 h-40 rounded-full text-white flex justify-center items-center">
              YOUTH FOR NEW GENERATIONS
            </span>
            <span className="font-bold text-xl border-4 p-2 border-black">
              MORE ABOUT YOUTH
            </span>
          </div>
        </div>
      </div>
      <div className="flex bg-black h-auto py-40 gap-10 justify-center items-center flex-col">
        <span className="text-white text-3xl font-bold">GIVE</span>
        <span className="text-white text-xl font-bold text-opacity-90 border -4 border-white py-2 px-4">
          FIND OUT MORE
        </span>
      </div>
      <div className="flex bg-white  h-auto py-40 gap-10 justify-center items-center flex-col">
        <span className="text-black text-3xl font-bold">FOLLOW US </span>
        <span className="text-black">FACEBOOK </span>

        <span className="text-black text-xl font-bold text-opacity-90 border-2 border-black py-2 px-4">
          @JESUS CHRIST HOPE OFF ALL GENERATIONS, INC. MINISTRY
        </span>
      </div>
    </div>
  );
}

export default Homepage