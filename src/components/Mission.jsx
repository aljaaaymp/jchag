import React, { useEffect } from 'react'

const Mission = () => {

      useEffect(() => {
        document.title = "JCHAGM | Mission & Vision";
        window.scrollTo(0, 0);

      }, []);


  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-mission md:bg-cover bg-center h-screen w-full" />

      <div className="bg-gray-100 h-auto w-full flex flex-col py-20 justify-start items-center">
        <span className="text-black text-4xl font-bold  pb-5 border-b-2 border-black ">
          OUR VISION
        </span>
        <span className="text-bold text-lg px-20 pt-5 font-semibold">
          Jesus said in Matthew 28:19: “Go therefore and make disciples of all
          nations, baptizing them in the name of the Father, and of the Son, and
          of the Holy Spirit.”
        </span>
        <div className="flex flex-col md:flex-row px-5 md:px-20 gap-10 w-screen h-auto pt-20">
          <div className="flex flex-col w-full md:w-1/2 bg-gray-300 px-5 py-10 rounded-lg">
            <span className="text-3xl font-bold">
              IT IS A GOD GIVEN STRATEGY
            </span>
            <span className="md:px-10 text-left pt-5 ">
              It enables a church to carry out the Lord Jesus' Great Commission
              to "Go and make disciples.." (Matthew 28:19). Winning Souls,
              Holding on to the Fruit, and Multiplying it through creating
              Disciples are the three main pillars of the G12 Vision. Only once
              someone has been properly gained and consolidated can they become
              a disciple. The G12 Vision is a plan that enables every believer
              to mature spiritually and become a sincere disciple of Jesus
              (Ephesians 4:13).
            </span>
          </div>
          <div
            className="bg-black text-white flex justify-center items-center h-auto w-full
          md:w-1/2"
          >
            {" "}
            PICTURE
          </div>
        </div>
      </div>
      <div className="bg-white h-auto w-full flex flex-col py-20 justify-start items-center">
        <span className="text-black text-4xl font-bold  pb-5 border-b-2 border-black ">
          OUR MISSION
        </span>
        <span className="text-bold text-lg px-20 pt-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem
          dolorum, debitis deleniti quas adipisci facere dicta illum laborum
          amet autem pariatur. Molestias odio assumenda reiciendis quis
          reprehenderit fugiat nostrum?
        </span>
        <div className="flex flex-col md:flex-row px-5 md:px-20 gap-10 w-screen h-auto pt-20">
          <div
            className="bg-black text-white flex justify-center items-center h-auto w-full
          md:w-1/2"
          >
            {" "}
            PICTURE
          </div>
          <div className="flex flex-col w-full md:w-1/2 bg-gray-300 px-5 py-10 rounded-lg">
            <span className="text-3xl font-bold">
              MISSION AJSKD ASLKDJ ALSJD
            </span>
            <span className="md:px-10 text-left pt-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              inventore aut ipsam. Ullam optio dolor praesentium? Suscipit
              quisquam molestias pariatur, voluptatem assumenda aspernatur
              ducimus eaque, quam consequuntur saepe minus provident. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, alias
              ducimus minus unde, officia aspernatur tempora tenetur quidem
              adipisci eveniet reprehenderit porro vero quod facere odit, neque
              consectetur numquam ad. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ipsa voluptatem velit tenetur excepturi
              repudiandae, labore alias consectetur consequatur ducimus
              repellendus dolores nemo dolorum expedita aliquam corrupti error
              sequi neque officiis?
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-auto w-full flex flex-col py-20 justify-start items-center">
        <span className="text-black text-4xl font-bold  pb-5 border-b-2 border-black ">
          WE BELIEVE
        </span>
        <div className="grid md:grid-cols-3 w-full gap-10 md:px-20 px-5 pt-10">
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">GOD</span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">JESUS</span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">HOLY SPIRIT </span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 w-full gap-10 md:px-20 px-5 pt-10">
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">MAN</span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">SALVATION</span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
          <div className="bg-gray-200 w-full h-auto rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-3xl font-bold">BIBLE </span>
            <span className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              animi nobis dignissimos corrupti, recusandae eum odit officia modi
              harum quasi nostrum velit, provident aut necessitatibus,
              laudantium deleniti amet optio iste? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione illo quisquam sequi atque
              sint aut temporibus earum architecto ipsum, error blanditiis
              placeat nemo. Iure qui quod optio praesentium fugiat voluptatum.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission