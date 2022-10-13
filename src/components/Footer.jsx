import React from 'react'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillCreditCard,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";


const Footer = () => {
  return (
    <div className=" h-auto bg-black flex flex-col py-20">
      <div className="flex md:flex-row flex-col md:justify-around justify-center items-center md:items-start gap-5 px-20">
        <a href="mailto:JCHope.@jchagm.org">
          <div className="flex flex-col text-white gap-2 justify-center items-center">
            <AiOutlineMail size={40} />
            <span className="font-bold text-xl animate-bounce">EMAIL US</span>
            <span className="text-sm">JCHope.@jchagm.org</span>
          </div>
        </a>
        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <AiOutlinePhone size={40} />
          <span className="font-bold text-xl">CALL US</span>
          <span className="text-sm">
            0956 147 6831 <br /> (046) 504 2086
          </span>
        </div>
        <a
          href="https://www.google.com/maps/place/Jesus+Christ,+Hope+of+All+Generations+Ministries,+Inc../@14.4026145,120.9923243,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d180efb45853:0x7ec8597b6e0ddc8f!8m2!3d14.4025988!4d120.9945135"
          target="_blank"
        >
          <div className="flex flex-col text-white gap-2 justify-center items-center">
            <GoLocation size={40} />
            <span className="font-bold text-xl">ADDRESS</span>
            <span className="text-sm">Molino Bacoor Cavite</span>
          </div>
        </a>

        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <AiFillCreditCard size={40} />
          <span className="font-bold text-xl animate-bounce">GIVE ONLINE</span>
          <span className="text-sm">Click me</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 text-white pt-20">
        <span>
          <AiFillFacebook />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <AiFillTwitterCircle />
        </span>
        <span>
          <AiOutlineMail />
        </span>
      </div>
      <div className="text-white text-opacity-70 text-sm pt-5">
        <span>© 2022 JESUS CHRIST HOPE OF ALL GENERATIONS, INC.</span>
      </div>
    </div>
  );
}

export default Footer