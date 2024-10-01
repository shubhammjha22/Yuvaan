// images from cloudinary
const website_texture =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753755/website_texture_w3rlkw.png";

export default function Loader() {
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
        <div className="h-[100vh] flex justify-center items-center">
          <h1 className="text-5xl sm:text-7xl  text-[#CA9E57] font-abhaya font-bold  ">
            ...
          </h1>
        </div>
        <div className="bg-footer-gradient w-full h-1/3 absolute bottom-0 "></div>
      </div>
    </>
  );
}
