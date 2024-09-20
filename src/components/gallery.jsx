import demo from "../assets/demo.png";

export default function Gallery() {
  return (
    <>
      <div className="-mt-40  relative h-[90rem] xl:h-[100rem] ">
        <div className="container h-full mx-auto bg-red-00 ">
          {/* background layer */}
          <div className="h-[60%] xl:h-[65%] container absolute mx-auto bg-[#000000] opacity-[21%]"></div>
          {/* Gallery section */}
          <div className="grid grid-cols-5 p-5 gap-5">
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
          </div>
          <div className="container px-4 h-[11.5rem]  flex justify-between items-center">
            <img src={demo} className="h-full" alt="" />
            <h1 className="text-6xl text-center text-[#CA9E57] z-20 font-abhaya font-bold  mb-0">
              GALLERY
            </h1>
            <img src={demo} className="h-full" alt="" />
          </div>

          <div className="grid grid-cols-5 p-5  gap-5">
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
          </div>

          <div className="mt-10 flex flex-col justify-center items-center z-40 absolute container mx-auto h-[28rem]">
            <h1 className="text-6xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
              AFTER MOVIE
            </h1>
            <img src={demo} className="w-[48rem] max-h-[20rem]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
