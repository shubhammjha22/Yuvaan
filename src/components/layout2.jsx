import React from "react";
import aftermovie from "../assets/aftermovie.png";

function Layout() {
  return (
    <>
      <div className=" sm:mt-44 flex flex-col justify-center items-center absolute top-40">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex mt-24   lg:mt-0 flex-col sm:p-10 sm:ml-10 w-[90%]  ">
            <h1 className="text-3xl sm:text-5xl  -mt-[10rem] text-[#CA9E57] font-abhaya font-bold  mb-0">
              ABOUT YUVAAN
            </h1>
            <p className="text-sm sm:text-2xl sm:text-nowrap text-white font-abhaya mt-0 font-semibold   ">
              <span className="sm:hidden">
                Yuvaan is the official literature and film <br />
                festival of DTU, which made its debut in <br /> 2017, with
                captive hearts and minds.
                <br /> Drawing an impressive crowd of over <br /> 65,000
                attendees, Yuvaan stands as one of <br /> DTU's most eagerly
                anticipated cultural <br /> events, drawing massive crowds.
                <br /> With its engaging events, including slams,
                <br /> debates, quizzes, Yuvaan offers something <br /> for
                every artistic soul.
              </span>

              {/* Text for screens 'sm' and larger */}
              <span className="hidden sm:block">
                Yuvaan is the official literature and film festival of DTU,
                which made its debut <br /> in 2017, with captive hearts and
                minds.
                <br /> Drawing an impressive crowd of over 65,000 attendees,
                Yuvaan stands as one <br /> of DTU's most eagerly anticipated
                cultural events, drawing massive crowds.
                <br /> With its engaging events, including slams, debates,
                quizzes, Yuvaan offers <br /> something for every artistic soul.
              </span>
            </p>
          </div>
          <div className="img  min-w-[490px] w-[60vw] -ml-20 -mt-10 sm:-mr-[58%] lg:mr-0 lg:mt-0 sm:-mt-[8rem] lg:-ml-[19rem] relative flex ">
            <img src={aftermovie} className=" " alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
