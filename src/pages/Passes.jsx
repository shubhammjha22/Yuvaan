import PassesImg from "../components/passesImg";
const passes_Day1 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728631572/ENTRY_PASS-notext-tiny_yny7nh.png";

export default function Passes() {
  return (
    <>
      <div className="relative overflow-hidden  bg-[#2A0B44]">
        <style>
          {`.box-3d {
  
            border-radius: 15px;
            position: relative;
            overflow: hidden;
            // transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) rotateZ(0deg);
            transition: 0.6s ease transform;
            box-shadow: 16px 16px 24px;
          }


            .box-3d:hover {
                 transform: perspective(2500px) rotateY(-5deg) rotateX(5deg) rotateZ(0deg) translateY(-5px);
            }
            .button-gradient {
                          background-image: linear-gradient(to bottom, #FD9AF1 0%, #612F5B 50%, #612F5B 100%);
              }
            .heading-shadow {
                              text-shadow: 
                                      0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15);

    // background: linear-gradient(to bottom, #e6e6e6, #cccccc);
  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
                 }
          
            `}
        </style>

        <div className="sm:h-[80vh] w-[90vw] sm:w-[75vw] mx-auto mt-24 sm:mt-26 gap-10 flex flex-col sm:flex-row justify-center items-center relative z-40">
          {/* IMAGE CONTAINER */}
          {/* DAY 1 */}
          <PassesImg passes_img={passes_Day1} />
        </div>

        {/* spacing */}

        <div className="bg-[#65249C] absolute bottom-12 -left-[18rem] z-10 bg-opacity-[17%] h-[505px] w-[505px] rounded-full"></div>
        <div className="bg-[#65249C] absolute top-12 -right-[18rem] z-10 bg-opacity-[17%] h-[505px] w-[505px] rounded-full"></div>

        <div className="h-[18vh]" />
        <div className="bg-footer-gradient w-full h-40 sm:h-1/4 z-10  absolute -bottom-10 "></div>
      </div>
    </>
  );
}
