import SocialMedia from "../components/socialMedia";
import website_texture from "/assets/website_texture.png";
import box from "/assets/box.png";
import left_hero from "/assets/left_hero.png";
import right_hero from "/assets/right_hero.png";

export default function Competition() {
  return (
    <>
      <div className="relative overflow-x-hidden bg-[#2A0B44]">
        <div className="bg-footer-gradient w-full h-1/2 absolute bottom-0 "></div>
        <div className="bg-darkup-gradient w-full h-1/2 absolute top-0 "></div>

        {/* TITLE */}
        <section className="relative lg:h-[100vh] h-[60vh] flex flex-col justify-center items-center">
          <div className="absolute w-full -mt-0 sm:mt-0  text-center  z-100 ">
            <h1 className="text-3xl sm:text-6xl -mt-24 lg:-mt-56  text-[#CA9E57] font-abhaya font-bold ">
              FORMAL
            </h1>
            <h2 className="text-xl sm:text-3xl   text-[#CA9E57] font-abhaya font-bold ">
              COMPETITIONS
            </h2>
          </div>

          <div className="absolute w-[45%] flex-col justify-center top-[28rem] right-2 sm:right-10 sm:items-start  sm:w-[95%] sm:justify-between  flex sm:flex-row gap-12 sm:gap-4 px-4 md:px-10 h-[10%] lg:h-[30%] sm:top-32">
            <img src={box} className=" h-32 sm:h-36 xl:h-full" alt="Box 1" />
            <div className="h-full w-ful flex flex-col mb-20 items-center">
              <img
                src={box}
                className="h-32 w-full  z-20 sm:h-36 xl:h-full -tanslate-x-[6.5rem] sm:translate-x-0  lg:mt-[7rem] "
                alt="Box 2"
              />
              <button className="bg-[#CA9E57] text-white z-30 px-3 py-1 -mt-5 rounded-xl">
                Register
              </button>
            </div>

            {/* <img
              src={box}
              className="h-32 z-20 sm:h-36 xl:h-full -translate-x-[6.5rem] sm:translate-x-0  lg:mt-[7rem] "
              alt="Box 2"
            /> */}

            <img
              src={box}
              className="h-32 z-20 sm:h-36 xl:h-full  -translate-x-[6.5rem] sm:translate-x-0  lg:mt-[15rem]"
              alt="Box 3"
            />
            <img
              src={box}
              className="h-32 sm:h-36 xl:h-full  lg:mt-[7rem]"
              alt="Box 4"
            />
            <img src={box} className="h-32 sm:h-36 xl:h-full" alt="Box 5" />
          </div>

          {/* <div className="absolute w-[95%] justify-between mr-10 flex gap px-10 h-[10%] xl:h-[30%] top-32">
            <img src={box} className="h-full" alt="" />
            <img src={box} className="h-full mt-[7rem]" alt="" />
            <img src={box} className="h-full mt-[15rem]" alt="" />
            <img src={box} className="h-full mt-[7rem]" alt="" />
            <img src={box} className="h-full" alt="" />
          </div> */}
        </section>

        {/* Avatar */}
        <section className="lg:h-[40vh] w-[20rem] sm:w-full xl:h-[100vh] h-[60vh] relative flex flex-col justify-center items-center">
          <div className="h-full w-full   flex justify-between items-center -mt-10">
            <img
              src={left_hero}
              className="xl:w-[30%] w-[110%] sm:w-[30%] lg:w-[32%] lg:h-[172%] xl:h-full absolute -left-[3rem] z-10 sm:left-0  -top-[26rem] sm:-top-[10rem] lg:-top-[24rem] xl:-top-32"
              alt=""
            />
            <img
              src={right_hero}
              className=" hidden sm:block xl:w-[70%] lg:w-[75%] lg:h-[48rem] w-[70%] h-[44rem]  xl:h-[60rem] absolute right-0 -top-[24rem] lg:-top-[38rem] xl:-top-[26rem]"
              alt=""
            />
          </div>
        </section>

        {/* TITLE */}
        <section className="relative h-[50vh] lg:h-[50vh] xl:h-[70vh] -mt-[14rem] flex flex-col justify-center items-center">
          <div className="absolute w-[95%] justify-between  flex flex-col md:flex-row gap-4 px-4 md:px-10 h-[10%] xl:h-[30%] top-32">
            <img src={box} className=" h-36 xl:h-[220.55px]" alt="Box 1" />
            <img
              src={box}
              className="h-36 xl:h-[220.55px] -mt-20 lg:-mt-[7rem] "
              alt="Box 2"
            />
            <img
              src={box}
              className="h-36 xl:h-[220.55px] -mt-40 lg:-mt-[15rem]"
              alt="Box 3"
            />
            <img
              src={box}
              className="h-36 xl:h-[220.55px] -mt-20 lg:-mt-[7rem]"
              alt="Box 4"
            />
            <img src={box} className="h-36 xl:h-[220.55px]" alt="Box 5" />
          </div>
          <div className="absolute w-full text-center  z-100 ">
            <h1 className="text-6xl mt-24 lg:mt-[6rem] xl:mt-[7rem]  text-[#CA9E57] font-abhaya font-bold ">
              INFORMAL
            </h1>
            <h2 className="text-3xl   text-[#CA9E57] font-abhaya font-bold ">
              COMPETITIONS
            </h2>
          </div>
        </section>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />

        <div className="absolute bottom-10   left-16">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
