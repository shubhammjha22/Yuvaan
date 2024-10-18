// images from cloudinary
const yuvaan =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto/v1727753759/yuvaan_eqrtys.png";
const dates =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto/v1727753741/dates-1_kealsq.png";
const warrior =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto,q_auto/v1727753741/char1_k1inyc.png";

import MajorEvent from "../components/majorEvent.jsx";
import Layout from "../components/layout2.jsx";
import Theme from "../components/theme.jsx";
import Stats from "../components/stats.jsx";
import Clouds from "../components/clouds.jsx";
import { useEffect } from "react";
import AnimationEffect from "../util/Animation.jsx";

function HomePage() {
  useEffect(() => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="relative  overflow-hidden bg-custom-gradient-0">
        {/* Hero section */}

        <section id="home" className="z-20 relative h-screen overflow-x-hidden">
          <img
            src="https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729146017/hero-tiny_neu6sl.png"
            alt="hero-section"
            className=" min-w-[500vw] -ml-[90%] h-[100vh] -top-10 sm:min-w-[100vw] sm:h-full absolute sm:ml-0 sm:-top-6 brightness-[120%]"
            fetchpriority="high"
          />
          <img
            src={warrior}
            className=" absolute sm:hidden h-[50%]  -right-[0.25rem] bottom-[7.5rem] "
            alt=""
          />
          {/* <img
            src="https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729148493/hero-phone-tiny_cdiidg.png"
            alt="hero-section"
            className="block sm:hidden w-full h-full absolute -top-8"
            srcSet="https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729148493/hero-phone-tiny_cdiidg.png 600w,
                    https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729148493/hero-phone-tiny_cdiidg.png 1200w"
            sizes="(max-width: 600px) 600px, 1200px"
            fetchpriority="high"
          /> */}

          <img
            src={yuvaan}
            className="absolute top-[10%] left-0  sm:top-[8%] sm:left-[5vw] h-[30vw] sm:h-[14vw] "
            alt="Title"
          />

          <img
            src={dates}
            className="absolute bottom-[46vh] sm:bottom-[20vh] left-[8vw]  sm:left-[25vw] h-[22vw] sm:h-[12vw]"
            alt="dates"
          />

          <div className="sm:block hidden mt-4  sm:mt-0 sm:w-36 sm:h-36 rounded-full bg-white opacity-60 mix-blend-overlay absolute right-16 sm:right-10"></div>
        </section>
        {/* CLOUDS */}
        <Clouds />
        {/* Major Events */}
        <AnimationEffect className="mt-32 relative w-full z-40">
          <MajorEvent />
        </AnimationEffect>

        {/* Layout */}
        <AnimationEffect className="relative z-50">
          <Layout />
        </AnimationEffect>

        {/* THeme */}
        <AnimationEffect className="mt-[2rem]  xl:mt-0 relative">
          <Theme />
        </AnimationEffect>
        {/* Stats */}

        <AnimationEffect className="relative">
          <Stats />
        </AnimationEffect>
      </div>
    </>
  );
}

export default HomePage;
