import website_texture from "/assets/website_texture.png";
import SocialMedia from "../components/socialMedia";
const yuvaan_logo_1 =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753761/yuvaan_logo_1_hzzjqe.png";

export default function ErrorPage() {
  return (
    <>
      <div className="relative h-[100vh]   overflow-x-hidden bg-[#2A0B44]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <img
            src={yuvaan_logo_1}
            className="absolute  z-10 h-1/2 opacity-20"
            alt=""
          />
          <h1 className="text-5xl relative z-40 sm:text-5xl  text-[#CA9E57] font-abhaya font-bold  ">
            404 ! Page Not Found
          </h1>
          {/* <h2 className="text-2xl  sm:text-3xl  text-white font-abhaya font-base  ">
            Go to Homepage Now
          </h2> */}
        </div>
        <div className="bg-footer-gradient w-full h-1/3 absolute bottom-0 "></div>
        <div className="absolute bottom-10 left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}