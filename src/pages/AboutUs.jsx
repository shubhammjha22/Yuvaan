import website_texture from "../assets/website_texture.png";

import SocialMedia from "../components/socialMedia";
import About from "../components/aboutus";
import Gallery from "../components/gallery";

export default function AboutUs() {
  return (
    <>
      <div className="relative overflow-x-hidden bg-[#2A0B44]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />

        {/* ABOUT Section */}
        <About />

        {/* GALLERY */}

        <Gallery />

        <div className="bg-footer-gradient z-10 w-full h-24 absolute bottom-0 "></div>
        <div className="absolute bottom-10 z-20 left-4 sm:left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
