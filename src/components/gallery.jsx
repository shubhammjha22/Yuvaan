import demo from "../assets/demo.png";

export default function Gallery() {
  return (
    <>
      <div className=" -mt-[20rem] h-[75rem]  sm:-mt-40  relative sm:h-[108rem] ">
        <div className="container xl:max-w-[1430px] h-full mx-auto bg-red-00 ">
          {/* background layer */}
          <div className="h-[68%] xl:max-w-[1430px] sm:h-[66%] container absolute xl:mx-auto bg-[#000000] opacity-[21%]"></div>
          {/* Gallery section */}
          <div className="grid grid-cols-3 sm:grid-cols-5 p-5 gap-6 sm:gap-5">
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <span className="sm:hidden" alt="" />
            <img src={demo} className="sm:hidden" alt="" />
          </div>
          <div className="container  mx-auto px-4 h-[4.7rem]  w-full xl:h-[12.75rem] sm:h-[11.5rem]  flex justify-between items-center">
            <img src={demo} className="h-full" alt="" />
            <h1 className="text-3xl  -mt-24 sm:mt-0 gap-0 tightly w-full sm:text-6xl text-center text-[#CA9E57] z-20 font-abhaya font-bold mb-0 sm:block flex flex-col items-center">
              <span>G</span>
              <span className="-mt-2">A</span>
              <span className="-mt-2">L</span>
              <span className="-mt-2">L</span>
              <span className="-mt-2">E</span>
              <span className="-mt-2">R</span>
              <span className="-mt-2">Y</span>
            </h1>

            <img src={demo} className="h-full" alt="" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 p-5 gap-6 sm:gap-5">
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} className="hidden sm:block" alt="" />
          </div>

          <div className="-mt-[5rem] sm:mt-10 flex flex-col justify-center items-center z-40 absolute container mx-auto h-[28rem]">
            <h1 className="text-2xl sm:text-6xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
              AFTER MOVIE
            </h1>
            <img
              src={demo}
              className="h-[12rem] sm:w-[48rem] sm:min-h-[20rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
