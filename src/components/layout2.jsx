const aftermovie =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto/v1727753761/aftermovie_feltfl.png";

function Layout() {
  return (
    <>
      <div className=" mt-10 lg:mt-0 flex flex-col justify-center items-center z-40">
        <div className="flex flex-col lg:flex-row justify-center items-center z-40">
          <div className="flex mt-24 w-[90vw]  sm:ml-0 lg:mt-0 flex-col lg:p-10 lg:ml-10 sm:w-[90%]  ">
            <h1 className="text-4xl sm:text-5xl -mt-[4rem]  sm:-mt-[10rem] text-[#CA9E57] font-abhaya font-bold  mb-0">
              ABOUT YUVAAN
            </h1>
            <p className=" text-sm  sm:text-lg md:text-2xl sm:text-nowrap text-white font-abhaya mt-0 font-semibold   ">
              <span className="sm:hidden z-40 relative">
                Yuvaan is the official literature and film festival of DTU,
                which made its debut in 2017, with captive hearts and minds.
                Drawing an impressive crowd of over 90,000 attendees, Yuvaan
                stands as one of DTU's most eagerly anticipated literatüre{" "}
                <br /> and film events, drawing massive crowds. With its
                engaging events, including slams, debates, quizzes, Yuvaan
                offers something for every artistic soul.
              </span>

              {/* Text for screens 'sm' and larger */}
              <span className="hidden  sm:block z-20 relative">
                Yuvaan is the official literature and film festival of DTU,
                which made its debut <br /> in 2017, with captive hearts and
                minds.
                <br /> Drawing an impressive crowd of over 90,000 attendees,
                Yuvaan stands as one <br /> of DTU's most eagerly anticipated
                literatüre and film events, drawing massive crowds.
                <br /> With its engaging events, including slams, debates,
                quizzes, Yuvaan offers <br /> something for every artistic soul.
              </span>
            </p>
          </div>
          <div className="img z-50 w-full max-w-[600px] -mt-6 sm:w-[70%] sm:ml-[20rem] sm:-mt-24  lg:mt-0 lg:min-w-[490px] lg:-ml-[10rem] xl:ml-[1.25rem] ">
            <img
              src={aftermovie}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=ByrP3KAlXSY",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="z-30 cursor-pointer transition-all duration-300 ease-out hover:scale-105 "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
