import website_texture from "/assets/website_texture.png";
import SocialMedia from "../components/socialMedia";
import PassesImg from "../components/passesImg";
const passes_Day1 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728611675/1-tiny_ikggvi.png";
const passes_Day2 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728611689/2-tiny_rqqzr0.png";
const passes_Day3 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728611692/3-tiny_rs8rng.png";

export default function Passes() {
  return (
    <>
      <div className="relative overflow-hidden  bg-[#2A0B44]">
        <style>
          {`.box-3d {
  
            border-radius: 15px;
            position: relative;
            overflow: hidden;
            // transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) rotateZ(0deg);
            transition: 0.6s ease transform;
            box-shadow: 16px 16px 24px;
          }


            .box-3d:hover {
                 transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) rotateZ(0deg) translateY(-5px);
            }`}
        </style>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />
        <div className="sm:h-[80vh] w-[75vw] mx-auto mt-24 sm:mt-26 gap-10 flex flex-col sm:flex-row justify-center items-center ">
          {/* IMAGE CONTAINER */}
          {/* DAY 1 */}
          <PassesImg passes_img={passes_Day1} />

          {/* DAY  2 */}
          <PassesImg passes_img={passes_Day2} />

          {/* DAY 3 */}
          <PassesImg passes_img={passes_Day3} />
        </div>

        {/* spacing */}
        <div className="h-[18vh]" />
        <div className="bg-footer-gradient w-full h-40 sm:h-1/4 z-10  absolute -bottom-10 "></div>
        <div className="absolute bottom-10 left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
