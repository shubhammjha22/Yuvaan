import logo from "/assets/Artboard.png";
import warrior from "/assets/char1.png";
import yuvaan from "/assets/yuvaan.png";
import dates from "/assets/dates-1.png";

import moon from "/assets/moon.png";

import website_texture from "/assets/website_texture.png";

import MajorEvent from "../components/majorEvent.jsx";
import Layout from "../components/layout2.jsx";
import Theme from "../components/theme.jsx";
import Stats from "../components/stats.jsx";
import Clouds from "../components/clouds.jsx";

function HomePage() {
  return (
    <>
      <div className="relative  overflow-x-hidden bg-custom-gradient-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />
        {/* Hero section */}
        <section className="relative h-[100vh]">
          <img
            src={logo}
            className="absolute top-0 -ml-[90%] h-[100%] md:ml-0 inset-0 min-w-[500vw] md:min-w-full md:h-[100vh]  mix-blend-overlay "
            alt=""
          />
          <img
            src={moon}
            className="absolute -top-8 left-[70rem] h-[54rem]    mix-blend-overlay "
            alt=""
          />
          <div className="h-[100vh] w-[100vw] flex gap-10">
            <div className="w-[140rem] md:w-[70%] flex flex-col  relative">
              <img
                src={yuvaan}
                className="absolute w-[full] top-[6.5rem] md:top-20 md:-right-[4rem] md:w-[925px]"
                alt=""
              />
              <img
                src={dates}
                className="absolute right-24 bottom-[22rem]  lg:bottom-[9rem] md:-right-[6rem]  w-[60%]"
                alt=""
              />
              {/* Mobile display this jugaad later fix this */}
              <img
                src={warrior}
                className=" absolute md:hidden h-[55%]  -right-[5.75rem] bottom-[8.5rem] "
                alt=""
              />
            </div>
            <div className="w-[90vw] relative">
              <div className="sm:w-[60%]">
                <img
                  src={warrior}
                  className=" absolute hidden md:block sm: w-3/2 sm:-top-4 md:left-[3.5rem] sm:h-full md:w-[82%] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* CLOUDS */}
        <Clouds />
        {/* Major Events */}
        <section className="mt-32 relative w-full ">
          <MajorEvent />
        </section>

        {/* Layout */}
        <section className="relative">
          <Layout />
        </section>

        {/* THeme */}
        <section className=" mt-[2rem]  xl:mt-0 relative">
          <Theme />
        </section>

        {/* Stats */}
        <section className=" relative">
          <Stats />
        </section>
      </div>
    </>
  );
}

export default HomePage;
