import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
 
  
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  useEffect(() => {
    if (!navbarOpen) {
      document.getElementById("close-button").click();
    }
  }, [navbarOpen])
  

  return (
    <div
      id="close-button"
      className={
        "flex md:flex-row text-white  justify-between px-10 md:py-7 py-5  font-bold bg-black fixed w-full  " +
        (navbarOpen
          ? "text-white bg-black bg-opacity-80 justify-start items-start fixed  w-screen h-screen"
          : "flex md:flex-row text-white items-center justify-between px-10  font-bold")
      }
    >
      <Link to="/home" onClick={() => setNavbarOpen(false)}>
        <span className="text-3xl m-0"> JCHAGM. </span>
      </Link>
      <div className="flex flex-row-reverse  items-start pt-2 justify-between w-full pr-5 ">
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
              "md:flex  flex-col md:flex-row items-center w-auto md:items-center justify-center" +
              (navbarOpen
                ? " flex pt-20 w-full items-center"
                : " hidden")
            }
          >
            <div />
            <div className="flex  gap-10  flex-col md:flex-row  ">
              <div className="flex flex-col ">
                <span className=" peer hover:cursor-pointer hover:opacity-30  pb-2 flex justify-center items-center">
                  WATCH <BsArrowDownShort />
                </span>
                <div className="hidden peer-hover:flex hover:flex flex-col gap-2  bg-white text-black pr-16 p-3 absolute mt-7 items-start text-sm rounded-md">
                  <a
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    href="https://www.facebook.com/JCHAGM"
                    target="_blank"
                    onClick={() => setNavbarOpen(false)}
                  >
                    Watch Online
                  </a>

                  <a
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    href="https://www.youtube.com/channel/UChIAcRFeye_leuSuXaoCjmA/videos"
                    target="_blank"
                    onClick={() => setNavbarOpen(false)}
                  >
                    Past Messages
                  </a>
                </div>
              </div>
              <div className="flex flex-col  ">
                <Link
                  className=" peer hover:cursor-pointer hover:opacity-30  pb-2 flex justify-center items-center"
                  to="/history"
                >
                  ABOUT <BsArrowDownShort />
                </Link>
                <div className="hidden peer-hover:flex hover:flex flex-col gap-2  bg-white text-black pr-16 p-3 absolute mt-7 items-start text-sm rounded-md">
                  <Link
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    to="/history"
                    onClick={() => setNavbarOpen(false)}
                  >
                    History
                  </Link>
                  <Link
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    to="/mission&vision"
                    onClick={() => setNavbarOpen(false)}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    className="hover:bg-gray-200 hover:cursor-pointer"
                    to="/ministries"
                    onClick={() => setNavbarOpen(false)}
                  >
                    Ministries
                  </Link>
                </div>
              </div>
              <Link
                className=" peer hover:cursor-pointer hover:opacity-30  pb-2"
                to="/services"
                onClick={() => setNavbarOpen(false)}
              >
                <span> SERVICES </span>
              </Link>
              <Link
                className=" peer hover:cursor-pointer hover:opacity-30  pb-2"
                to="/tithes&offering"
                onClick={() => setNavbarOpen(false)}
              >
                <span> GIVE </span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
