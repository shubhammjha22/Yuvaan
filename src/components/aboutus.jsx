import AnimationEffect from "../util/Animation";

const LFC =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753747/LFC_2_sfjm0r.png";
const yuvaan_logo_1 =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753761/yuvaan_logo_1_hzzjqe.png";

export default function About() {
  return (
    <>
      <div className="-mt-6 sm:mt-0 ">
        <div className="container  w-[90vw] xl:px-[2rem] mt-28 mx-auto">
          <AnimationEffect className="h-64  flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col items-star px-4 sm:p-0">
              <h1 className="text-3xl sm:text-5xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
                ABOUT YUVAAN
              </h1>
              <p className="text-sm sm:text-2xl  sm:text-nowrap text-white font-abhaya mt-0 font-semibold">
                <span className="sm:hidden">
                  Yuvaan is the official literature and film festival of DTU,
                  which made its debut in 2017, with captive hearts and minds.
                  Drawing an impressive crowd of over 90,000 attendees, Yuvaan
                  stands as one of DTU's most eagerly anticipated literatüre and
                  film events, drawing massive crowds. With its engaging events,
                  including slams, debates, quizzes, Yuvaan offers something for
                  every artistic soul.
                </span>

                {/* Text for screens 'sm' and larger */}
                <span className="hidden sm:block">
                  Yuvaan is the official literature and film festival of DTU,
                  which made its debut <br /> in 2017, with captive hearts and
                  minds.
                  <br /> Drawing an impressive crowd of over 90,000 attendees,
                  Yuvaan stands as one <br /> of DTU's most eagerly anticipated
                  literatüre and film events, drawing massive crowds.
                  <br /> With its engaging events, including slams, debates,
                  quizzes, Yuvaan offers <br /> something for every artistic
                  soul.
                </span>
              </p>
            </div>
            <img
              src={yuvaan_logo_1}
              className="hidden  lg:block h-full "
              alt=""
            />
          </AnimationEffect>

          <AnimationEffect className="h-[18rem] lg:ml-0 -mt-10 sm:mt-10 flex flex-col lg:flex-row items-center justify-between">
            {/* <img
              src={LFC}
              className="hidden sm:block -ml-24 -mr-12  xl:ml-0 xl:mr-0 h-[24rem] mx-0"
              alt=""
            /> */}
            <img src={LFC} className="-mr-14 hidden lg:block h-[140%]" alt="" />
            <div className="flex flex-col items-end px-3 sm:px-0">
              <h1 className="relative mr-2 sm:mr-0 text-3xl sm:text-5xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
                ABOUT LFC
                <span>
                  <img
                    src={LFC}
                    className=" absolute -top-6 -left-16 w-20 h-20 lg:hidden "
                    alt=""
                  />
                </span>
              </h1>
              <p className="text-sm sm:text-2xl sm:text-end sm:text-nowrap text-white font-abhaya mt-0 font-semibold">
                <span className="sm:hidden">
                  The Literature and Film Council (LFC) at Delhi Technological
                  University (DTU) fosters a vibrant cultural environment by
                  promoting literature and cinema among students. It organizes
                  film screenings, literary events, workshops, and competitions,
                  providing a platform for students to showcase their creativity
                  and engage with the arts. Through these activities, the LFC
                  enriches the university experience and supports the
                  development of students' literary and cinematic interests.{" "}
                </span>

                {/* Text for screens 'sm' and larger */}
                <span className="hidden sm:block">
                  The Literature and Film Council (LFC) at Delhi Technological
                  University (DTU) <br /> fosters a vibrant cultural environment
                  by promoting literature and cinema among <br /> students. It
                  organizes film screenings, literary events, workshops, and
                  competitions,
                  <br />
                  providing a platform for students to showcase their creativity
                  and engage with the <br />
                  arts. Through these activities, the LFC enriches the
                  university experience and
                  <br /> supports the development of students' literary and
                  cinematic interests.{" "}
                </span>
              </p>
            </div>
          </AnimationEffect>
        </div>
      </div>
    </>
  );
}
