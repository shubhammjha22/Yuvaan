import SponsorsTitle from "../components/sponsorsTitle";

export default function Sponsors() {
  return (
    <>
      <div className="relative overflow-x-hidden bg-[#2A0B44]">
        {/* Contact Us */}
        <SponsorsTitle />

        {/* Shadow effect */}
        <div className=" bg-footer-gradient w-full h-24 absolute bottom-0 "></div>

        <div className="hidden sm:block">
          <div className="bg-[#65249C] absolute -bottom-0 -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-0 -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[10%] -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[30%] -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[50%] -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[70%] -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
        </div>
      </div>
    </>
  );
}
