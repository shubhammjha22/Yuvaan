import About from "../components/aboutus";
import Gallery from "../components/gallery";

export default function AboutUs() {
  return (
    <>
      <div className="relative overflow-x-hidden bg-[#2A0B44]">
        {/* ABOUT Section */}
        <About />

        {/* GALLERY */}

        <Gallery />

        <div className="bg-footer-gradient z-10 w-full h-24 absolute bottom-0 "></div>
      </div>
    </>
  );
}
