import SocialMedia from "./socialMedia.jsx";
import StatsScroll from "./statsScroll.jsx";

const soldier =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto/v1727753754/soldier_mk9mnd.png";

export default function Stats() {
  return (
    <div className="flex justify-center  items-center -mt-[10rem] sm:mt-0  sm:h-[80vh] sm:overflow-y-hidden">
      <div className="flex flex-col p-4 mt-[20rem] sm:mt-[10rem] -ml-[12rem] sm:ml-[4rem] w-[50%] ">
        <h1 className="text-3xl sm:text-6xl -mt-[8rem] text-[#CA9E57] font-abhaya font-bold mb-0">
          STATISTICS
        </h1>

        <StatsScroll />

        <div className="absolute -bottom-20 sm:bottom-10 w-[16rem] h-[3rem] ">
          <SocialMedia />
        </div>
      </div>

      <div className="img w-[35rem] sm:w-[72vw] absolute -ml-[10rem] mt-[7.5rem] sm:-ml-[28rem] sm:mt-[1.5rem] sm:relative flex">
        <img src={soldier} className="sm:relative z-10" alt="" />
      </div>
    </div>
  );
}
