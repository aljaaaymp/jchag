import React from "react";
import { useEffect } from "react";
const Womens = () => {
  useEffect(() => {
    document.title = "WOMEN'S TEAM | Ministry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-pink-200 w-auto h-screen  bg-contain md:bg-auto  bg-fixed" />
      <div className="bg-white h-auto w-full flex flex-col justify-start items-center px-5 md:px-20 py-20">
        <span className="text-5xl font-bold pb-5 border-b-2 border-black ">
          WOMEN'S TEAM
        </span>
        <span className="md:px-20 px-5 pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          quia harum architecto voluptatum cumque distinctio, blanditiis
          accusantium repellat sequi deserunt laboriosam. Eaque corrupti
          voluptate natus doloremque suscipit. Eius, unde asperiores.
        </span>
        <span className="font-semibold text-lg mt-10 border-2 p-5 border-black hover:text-white hover:bg-black">
          JOIN WOMEN'S TEAM
        </span>
      </div>
    </>
  );
};

export default Womens;