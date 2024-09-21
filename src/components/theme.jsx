import { useEffect, useState } from "react";
import realms from "../assets/realms.png";

export default function Theme() {
  const [logoPosition, setLogoPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoPosition((prevPosition) => (prevPosition + 0.04) % (2 * Math.PI));
    }, 10); // 60 FPS for smoother animation

    return () => clearInterval(interval);
  }, []);

  const translateY = Math.sin(logoPosition) * 4;

  return (
    <>
      {/* Theme */}
      <div className="flex relative  -mt-[10rem]  sm:-mt-[15rem] gap-10 justify-center items-center">
        <div className="img w-[18rem] -mr-[20rem] sm:w-[50vw] sm:-mr-[15rem] relative flex ">
          <img
            src={realms}
            className="h-[18rem] z-10 right-[7.75rem]  sm:right-0 -mt-[10rem] sm:mt-0 absolute sm:relative sm:w-full sm:h-full  sm:mr-0"
            style={{ transform: `translateY(${translateY}px)` }}
            alt=""
          />
        </div>
        <div className="flex flex-col p-10 -mr-24 sm:mr-10   ">
          <h2 className="text-base sm:text-2xl text-underline  mt-[4rem]  text-[#CA9E57] font-abhaya font-light opacity-70  mb-0">
            THEME
          </h2>
          <hr className="border-t-2 border-white w-[60%] sm:w-[39%]" />
          <h1 className="text-2xl sm:text-5xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
            REALMS OF <br />
            IMAGINATION
          </h1>
          <p className="z-20 text-sm sm:text-2xl text-nowrap text-white font-abhaya mt-0 font-semibold  mb-10 ">
            <span className="sm:hidden">
              Discover worlds where reality intertwines <br /> with creativity
              at YUVAAN's "Realms of <br /> Imagination." Dive into literature
              and film <br /> that stretch the limits of the possible and <br />{" "}
              explore stories that transport, inspire, and <br />
              captivate. Join us in celebrating the <br /> boundless power of
              imagination to create <br /> new realities and challenge the
              ordinary.
            </span>

            {/* Text for screens 'sm' and larger */}
            <span className="hidden sm:block">
              Discover worlds where reality intertwines with creativity at
              YUVAAN's <br />
              "Realms of Imagination." Dive into literature and film that
              stretch the limits of <br />
              the possible and explore stories that transport, inspire, and
              captivate. Join us <br />
              in celebrating the boundless power of imagination to create new
              realities and
              <br />
              challenge the ordinary.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
