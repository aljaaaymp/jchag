import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div
      id="navbar"
      className={
        "flex md:flex-row text-white  justify-between px-10 md:py-7 py-5  font-bold bg-black fixed w-full  " +
        (navbarOpen
          ? "text-white bg-black bg-opacity-80 justify-start items-start fixed  w-screen h-screen"
          : "flex md:flex-row text-white items-center justify-between px-10  font-bold")
      }
    >
      <Link to="/">
        <span className="text-3xl m-0"> JCHAGM. </span>
      </Link>
      <div className="flex flex-row-reverse  items-start pr-5 ">
        <button
          className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i>
            <AiOutlineBars className="text-white" />
          </i>
        </button>
        <div
          className={
            "md:flex  flex-col md:flex-row items-start md:items-center justify-center" +
            (navbarOpen ? " flex pt-10 pr-36" : " hidden")
          }
        >
          <div />
          <div className="flex  gap-10  flex-col md:flex-row  ">
            <div className="flex flex-col ">
              <span className=" peer hover:cursor-pointer hover:opacity-30  pb-2">
                WATCH
              </span>
              <div className="hidden peer-hover:flex hover:flex flex-col gap-2  bg-white text-black pr-16 p-3 absolute mt-7 items-start text-sm rounded-md">
                <a className="hover:bg-gray-200 hover:cursor-pointer" href="https://www.facebook.com/JCHAGM" target="_blank">
                  Watch Online
                </a>
                <a className="hover:bg-gray-200 hover:cursor-pointer">
                  Past Messages
                </a>
              </div>
            </div>
            <div className="flex flex-col ">
              <Link
                className=" peer hover:cursor-pointer hover:opacity-30  pb-2"
                to="/history"
              >
                ABOUT
              </Link>
              <div className="hidden peer-hover:flex hover:flex flex-col gap-2  bg-white text-black pr-16 p-3 absolute mt-7 items-start text-sm rounded-md">
                <Link
                  className="hover:bg-gray-200 hover:cursor-pointer"
                  to="/history"
                >
                  History
                </Link>
                <Link
                  className="hover:bg-gray-200 hover:cursor-pointer"
                  to="/mission&vision"
                >
                  Mission & Vision
                </Link>
                <Link className="hover:bg-gray-200 hover:cursor-pointer" to="/ministries">
                  Ministries
                </Link>
              </div>
            </div>
            <span> SERVICES </span>
            <span> GIVE </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
