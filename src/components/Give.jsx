import React from 'react'
import { BsFillCreditCardFill } from "react-icons/bs";
import { useEffect } from 'react';
const Give = () => {

    useEffect(() => {
      document.title = "JCHAGM | Tithes & Offering";
      window.scrollTo(0, 0);
    }, []);


  return (
    <>
      <div className=" bg-cover  bg-center bg-tithes h-96 w-full md:h-screen" />
      <div className="bg-white h-auto w-full flex flex-col pb-20">
        <span className="text-black text-3xl md:text-5xl pt-20 font-bold">
          LET'S GIVE BACK TO GOD!
        </span>
        <span className="px-10 pt-5">
          <span className="font-bold">2 Corinthians 9:6-8 </span>- Remember
          this: Whoever sows sparingly will also reap sparingly, and whoever
          sows generously will also reap generously. Each of you should give
          what you have decided in your heart to give, not reluctantly or under
          compulsion, for God loves a cheerful giver. And God is able to bless
          you abundantly, so that in all things at all times, having all that
          you need, you will abound in every good work.
        </span>
        <div className="flex flex-col md:flex-row pt-10 gap-7 md:px-72">
          <div className="flex flex-col flex-wrap text-sm justify-center items-center ">
            <BsFillCreditCardFill size={70} />
            <span className="font-bold text-xl pt-5">BDO</span>
            <span className="pt-5 font-semibold">
              Account Number: 000680948228
            </span>
            <span className="pt-2 px-10">
              Account name: Jesus Christ Hope of All Generation Ministries Inc.
            </span>
          </div>
          <div className="flex flex-col flex-wrap text-sm justify-center items-center ">
            <BsFillCreditCardFill size={70} />
            <span className="font-bold text-xl pt-5">Landbank</span>
            <span className="pt-5 font-semibold">
              Account Number: 2461-0958-04
            </span>
            <span className="pt-2 px-10">
              Account name: Jesus Christ Hope of All Generation Ministries Inc.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Give