import React, { useState, useEffect } from "react";
import globe from "../assets/globe.png";
import demo from "../assets/demo.png";

function MajorEvent() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-mt-32 p-2 sm:p-10 text-white font-bold relative">
      <div className="absolute z-10 mt-64 -left-[34rem] sm:-left-[18rem] sm:w-[34rem] sm:h-[34rem] w-[50rem] h-[50rem]">
        <img
          src={globe}
          alt="Globe"
          className="w-full h-full object-cover rounded-full"
          style={{ transform: `rotateZ(${rotation}deg)` }}
        />
      </div>
      <div className="ml-0 mt-44  sm:ml-60  sm:mt-24  sm:p-10">
        <h1 className="text-5xl text-center sm:text-left sm:text-6xl  sm:mt-0 text-[#CA9E57] font-abhaya font-bold  mb-10">
          MAJOR EVENTS
        </h1>
        <div className="-mt-14 sm:-mt-10 z-20 flex sm:mr-10 sm:h-[900px] ">
          <div className=" flex mt-10 flex-row flex-wrap justify-center gap-5 w-[500px] xl:w-[900px] lg:w-[700px] md:w-[600px] sm:h-[600px] ">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className=" bg-black bg-opacity-40 z-20 w-[160px] h-[200px] sm:h-[16rem] sm:w-[210px]  border-1 border-black shadow-[10px_10px_8px_rgba(0,0,0,0.3)] rounded-xl p-0  "
              >
                <img
                  src={demo}
                  alt={`Image ${index + 1}`}
                  className="w-full h-[60%] object-cover rounded-lg shadow-md "
                />

                <p className="p-2 ">Helo</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorEvent;
