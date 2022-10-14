import React from 'react'
import { BiTime } from "react-icons/bi";
import { FaPrayingHands, FaPray } from "react-icons/fa";
import { useEffect } from 'react';

const Services = () => {

       useEffect(() => {
         document.title = "JCHAGM | Services";
         window.scrollTo(0, 0);
       }, []);

  return (
    <div>
      <div className="bg-services w-full h-screen bg-cover md:bg-contain bg-center" />
      <div className="bg-white h-auto w-full flex flex-col">
        <span className="text-black text-3xl md:text-5xl pt-20 font-bold">
          WORSHIP WITH US!
        </span>
        <span className="px-10 pt-5">
          A scriptural hierarchy that we must adhere to is that of Christian
          brotherhood. We must continue to join with other followers of Christ
          in order to be a sincere believer who loves God and desires to obey
          him. According to Hebrews 10:24–25, we are all a part of the same body
          of Christ, thus we shouldn't stop getting together. According to 1
          Corinthians 11:26, we are able to participate in the Lord's Supper,
          which is the public proclamation of the body and blood of the Lord
          Jesus, when we worship with other members of the church.
        </span>
        <div className="flex flex-col  md:flex-row justify-around w-full md:w-screen gap-5 md:gap-40 pt-20 flex-wrap pb-32 md:px-72">
          <div className="flex flex-col text-sm justify-center items-center">
            <BiTime size={50} />
            <span className="font-bold text-xl pt-5">SUNDAY</span>
            <span className="pt-5">9:00am - 11:00am</span>
            <span className="text-opacity-60 text-black text-xs pt-2">
              JCHAGM Church
            </span>
          </div>

          <div className="flex flex-col text-sm justify-center items-center ">
            <BiTime size={50} />
            <span className="font-bold text-xl pt-5">THURSDAY</span>
            <span className="pt-5">6:00pm</span>
            <span className="text-opacity-60 text-black text-xs pt-2">
              JCHAGM Church
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-auto pb-20 w-full flex flex-col">
        <span className="text-black text-3xl md:text-5xl pt-20 font-bold">
          LET'S PRAY TOGETHER!
        </span>
        <span className="pt-5 font-bold text-xl px-10">
          When We Pray Together, We Experience God’s Presence
        </span>
        <span className="px-10 pt-5">
          <span className="font-bold">Matthew 18:20 (NLT) </span> For where two
          or three gather together as my followers, I am there among them.”
        </span>
        <span className="px-10 pt-5">
          <span className="font-bold ">Ephesians 3:12 (NLT) </span> Because of
          Christ and our faith in him, we can now come boldly and confidently
          into God’s presence.
        </span>
        <div>
          <div className="grid md:grid-cols-2 pt-10 gap-7 flex-wrap md:px-72">
            <div className="flex flex-col flex-wrap text-sm justify-center items-center ">
              <FaPrayingHands size={50} />
              <span className="font-bold text-xl pt-5">Morning Prayer</span>
              <span className="pt-5">Monday, Wednesday and Friday</span>
              <span className="pt-2">7:00am</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                JCHAGM Church
              </span>
            </div>
            <div className="flex flex-col text-sm justify-center items-center ">
              <FaPrayingHands size={50} />
              <span className="font-bold text-xl pt-5">Evening Prayer</span>
              <span className="pt-5">Tuesday and Thursday</span>
              <span className="pt-2">5:00pm</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                JCHAGM Church
              </span>
            </div>
            <div className="flex flex-col text-sm justify-center items-center ">
              <FaPray size={50} />
              <span className="font-bold text-xl pt-5">SATURDAY PRAYER</span>
              <span className="pt-5">Saturday</span>
              <span className="pt-2">9:00am</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                JCHAGM Church
              </span>
            </div>
            <div className="flex flex-col text-sm justify-center items-center ">
              <FaPray size={50} />
              <span className="font-bold text-xl pt-5">PRAYER AND FASTING</span>
              <span className="pt-5">Every First Saturday of the Month</span>
              <span className="pt-2">12:00nn</span>
              <span className="text-opacity-60 text-black text-xs pt-2">
                JCHAGM Church
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Services