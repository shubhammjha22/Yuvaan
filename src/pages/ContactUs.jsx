import website_texture from "../assets/website_texture.png";
import DGM from "../components/dgm";
import SocialMedia from "../components/socialMedia";
import white_images from "../assets/demo.png";
import Contacts from "../components/contacts";

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
        <DGM />

        <div className="absolute bottom-10 left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
