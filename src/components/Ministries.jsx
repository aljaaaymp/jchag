import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Ministries = () => {
      useEffect(() => {
        document.title = "JCHAGM | Ministry";
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <img className="bg-ministry bg-cover md:bg-contain bg-center h-screen w-full" />
      <div className="bg-white h-auto w-full py-20 flex flex-col justify-start items-center px-20 md:px-40">
        <span className="text-5xl font-bold border-b-2 pb-5 border-black">
          MINISTRIES
        </span>
        <span className="py-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
          voluptatibus provident maiores similique molestiae suscipit delectus
          sunt dicta, minus, sed accusantium dolorum velit eaque aliquid
          nostrum, officia illum. Nemo.
        </span>
        <div className="grid md:grid-cols-4 gap-7 ">
          <Link to="/ministries/worshipteam">
            <div className=" flex flex-col h-auto w-auto bg-white border-2 hover:border-b-4 hover:border-b-black justify-start p-10 items-center gap-2 font-bold">
              <span className="bg-black h-20 w-20 rounded-full text-white flex justify-center items-center text-sm">
                WORSHIP
              </span>
              <span className=""> HOPE WORSHIP </span>
              <span className=""> SATURDAYS / SUNDAYS </span>
              <span className=""> 6:30PM / 7:00AM </span>
            </div>
          </Link>
          <Link to="/ministries/usherteam">
            <div className=" flex flex-col h-auto w-auto bg-white border-2 hover:border-b-4 hover:border-b-black justify-start p-10 items-center gap-2 font-bold">
              <span className="bg-black h-20 w-20 rounded-full text-white flex justify-center items-center text-sm">
                USHERING
              </span>
              <span className=""> USHERING TEAM </span>
              <span className=""> SUNDAYS </span>
              <span className=""> 7:00AM </span>
            </div>
          </Link>
          <Link to="/ministries/mensteam">
            <div className=" flex flex-col h-auto w-auto bg-white border-2 hover:border-b-4 hover:border-b-black justify-start p-10 items-center gap-2 font-bold">
              <span className="bg-black h-20 w-20 rounded-full text-white flex justify-center items-center text-sm">
                MEN'S
              </span>
              <span className=""> MEN'S TEAM </span>
              <span className=""> TUEDAY / SUNDAYS </span>
              <span className=""> 6:00AM / 7:00AM </span>
            </div>
          </Link>
          <Link to="/ministries/womensteam">
            <div className=" flex flex-col h-auto w-auto bg-white border-2 hover:border-b-4 hover:border-b-black justify-start p-10 items-center gap-2 font-bold">
              <span className="bg-black h-20 w-20 rounded-full text-white flex justify-center items-center text-sm">
                WOMEN'S
              </span>
              <span className=""> WOMEN'S TEAM </span>
              <span className=""> MONDAYS / SUNDAYS </span>
              <span className=""> 6:00AM / 7:00AM </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ministries