import AfterMovie from "./afterMovie";

const demo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753742/demo_fzapwb.png";

export default function Gallery() {
  return (
    <>
      <div className=" relative ">
        <div className="container relative flex flex-col  items-center  xl:p-10 -mt-10 sm:mt-0  mx-auto  ">
          {/* background layer */}

          <div className="bg-[#000000] z-20 opacity-[21%]  sm:ml-0 w-[95%] sm:w-full xl:w-[95%] p-10 absolute mx-auto h-full xl:h-[94%]    "></div>
          {/* Gallery section */}
          <div className="z-10 grid grid-cols-3 sm:grid-cols-5 p-4 gap-5 sm:gap-2">
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
            <img src={demo} alt="" />
            {/* Gallery effects s */}
            <span className="hidden sm:inline" alt="" />
            <span className="hidden sm:inline" alt="" />
            <span className="hidden sm:inline" alt="" />

            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <span className="inline sm:hidden" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <span className="inline sm:hidden" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
            <img src={demo} alt="" />
          </div>

          {/* Diff gallery text for different dimension - Look for improvement */}
          <h1 className="hidden sm:block text-3xl absolute top-[62%] sm:top-[50%] translate-y-[-50%] text-center sm:text-[6rem] w-full text-[#CA9E57] z-20 font-abhaya font-bold">
            GALLERY
          </h1>
          <h1 className="flex sm:hidden flex-col text-3xl absolute top-[62%] translate-y-[-50%] text-center  w-full text-[#CA9E57] z-20 font-abhaya font-bold">
            <span>G</span>
            <span className="-mt-2">A</span>
            <span className="-mt-2">L</span>
            <span className="-mt-2">L</span>
            <span className="-mt-2">E</span>
            <span className="-mt-2">R</span>
            <span className="-mt-2">Y</span>
          </h1>
        </div>
        <AfterMovie />
      </div>
    </>
  );
}
