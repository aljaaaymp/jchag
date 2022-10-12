import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';



const History = () => {
  
  useEffect(() => {
    document.title = "JCHAGM | History";
    window.scrollTo(0, 0);

  }, []);
  return (
    <div className="flex flex-col">
      <div className="bg-history w-full h-screen bg-cover bg-center" />
      <div className="bg-white w-full h-auto flex flex-col pt-20 justify-start items-center">
        <span className="text-black font-bold text-6xl text-opacity-90 border-b-2 border-black pb-5 ">
          FOUNDED
        </span>
        <div className="flex justify-around flex-col md:flex-row items-center md:items-start w-full py-20  md:px-20 gap-10">
          <span className="text-left w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            asperiores amet facilis nemo. Optio, pariatur tempora minus quod
            dolorum fuga, culpa soluta delectus nobis, voluptatem repellendus
            odio est error? Adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos, voluptatem? Dolor, provident
            possimus! Deserunt, itaque ducimus dolores sapiente ut quos?
            Reiciendis autem dicta voluptates repellat? Culpa expedita corporis
            accusantium officiis.
          </span>
          <span className="bg-black rounded-lg w-1/2 h-80 text-white justify-center items-center flex">
            PICTURE
          </span>
        </div>
      </div>
      <div className="bg-gray-100 w-auto  justify-start items-center h-auto flex flex-col py-20">
        <span className="text-black font-bold  text-6xl text-opacity-90 border-b-2 border-black pb-4">
          OUR PASTORS
        </span>
        <div className="flex flex-col md:flex-row justify-around items-center pt-20 gap-5">
          <div className="flex flex-col justify-center items-center flex-wrap gap-5 px-10">
            <span className="bg-black rounded-full w-40 h-40 text-white justify-center items-center flex">
              PICTURE
            </span>
            <span className="text-3xl font-bold"> NAME </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nisi non laborum, sapiente qui deleniti culpa temporibus vel
              necessitatibus prum nihil ipsam tempo
            </span>
          </div>
          <div className="flex flex-col justify-center items-center flex-wrap gap-5 px-10">
            <span className="bg-black rounded-full w-40 h-40 text-white justify-center items-center flex">
              PICTURE
            </span>
            <span className="text-3xl font-bold"> NAME </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nisi non laborum, sapiente qui deleniti culpa temporibus vel
              necessitatibus praesent praesentium nihil
            </span>
          </div>
          <div className="flex flex-col justify-center items-center flex-wrap gap-5 px-10">
            <span className="bg-black rounded-full w-40 h-40 text-white justify-center items-center flex">
              PICTURE
            </span>
            <span className="text-3xl font-bold"> NAME </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nisi non laborum, sapiente qui deleniti culpa temporibus vel
              necessitatibus praesenti praesentium nih
            </span>
          </div>
        </div>
      </div>
      <div className="text-3xl md:text-9xl bg-white font-semibold py-20 hover:text-white hover:animate-fill hover:bg-black hover:cursor-pointer">
        <Link to="/mission&vision">
          <span> MISSION & VISION</span>
        </Link>
      </div>
    </div>
  );
}


export default History

