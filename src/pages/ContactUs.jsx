// images from cloudinary
const website_texture =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753755/website_texture_w3rlkw.png";

import SocialMedia from "../components/socialMedia";
import Contacts from "../components/contacts";
import Queries from "../components/query";

export default function ContantUs() {
  return (
    <>
      <div className="relative   overflow-x-hidden bg-[#2A0B44]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />

        {/* Contact Us */}
        <Contacts />

        {/* Shadow effect */}
        <div className=" bg-footer-gradient w-full h-24 absolute bottom-0 "></div>

        {/* DGM */}
        <Queries />

        <div className="hidden sm:block">
          <div className="bg-[#65249C] absolute -bottom-0 -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-0 -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[10%] -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[30%] -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[50%] -left-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
          <div className="bg-[#65249C] absolute top-[70%] -right-[18rem] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
        </div>

        <div className="absolute bottom-10 left-4 sm:left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
