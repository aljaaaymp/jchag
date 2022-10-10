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
      <div className="flex justify-around items-start px-20">
        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <AiOutlineMail size={40} />
          <span className="font-bold text-xl">EMAIL</span>
          <span className="text-sm">jchag@jchag.org</span>
        </div>
        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <AiOutlinePhone size={40} />
          <span className="font-bold text-xl">CALL US</span>
          <span className="text-sm">0912345678</span>
        </div>
        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <GoLocation size={40} />
          <span className="font-bold text-xl">ADDRESS</span>
          <span className="text-sm">Molino Bacoor Cavite</span>
        </div>
        <div className="flex flex-col text-white gap-2 justify-center items-center">
          <AiFillCreditCard size={40} />
          <span className="font-bold text-xl">GIVE ONLINE</span>
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