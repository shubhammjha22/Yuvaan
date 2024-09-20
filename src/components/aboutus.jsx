import yuvaan_logo_1 from "../assets/yuvaan_logo_1.png";
import LFC from "../assets/LFC.png";

export default function About() {
  return (
    <>
      <div className="h-[50rem] ">
        <div className="container  mt-28 mx-auto h-[35rem]  ">
          <div className="h-64 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="text-5xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
                ABOUT YUVAAN
              </h1>
              <p className="text-2xl text-nowrap text-white font-abhaya mt-0 font-semibold">
                Yuvaan is the official literature and film festival of dtu which
                made its debut <br /> in 2017, with captive hearts and minds.
                <br />
                Drawing an impressive crowd of over 65,000 attendees, Yuvaan
                stands as one of <br /> dtu’s most eagerly anticipated cultural
                events, drawing massive crowds.
                <br />
                With it’s engaging events, including slams, debates, quizzes,
                yuvaan offers <br /> something for every artistic soul.
              </p>
            </div>
            <img src={yuvaan_logo_1} className="h-full " alt="" />
          </div>

          <div className=" lg:ml-0 h-64 mt-10 flex flex-col lg:flex-row items-center justify-between">
            <img
              src={LFC}
              className="-ml-24 -mr-12  xl:ml-0 xl:mr-0 h-[24rem] mx-0"
              alt=""
            />
            <div className="flex flex-col items-end">
              <h1 className="text-5xl  text-[#CA9E57] font-abhaya font-bold  mb-0">
                ABOUT LFC
              </h1>
              <p className="text-2xl text-end text-nowrap text-white font-abhaya mt-0 font-semibold">
                The Literature and Film Council (LFC) at Delhi Technological
                University (DTU) <br /> fosters a vibrant cultural environment
                by promoting literature and cinema among <br /> students. It
                organizes film screenings, literary events, workshops, and
                competitions,
                <br />
                providing a platform for students to showcase their creativity
                and engage with the <br />
                arts. Through these activities, the LFC enriches the university
                experience and
                <br /> supports the development of students' literary and
                cinematic interests.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
