import ImgCard from "./imgcard";

const data = [
  {
    name: "PRATHAM DANG",
    insta: "https://www.instagram.com/itsprathm_/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_27_ohltje.png",
  },
  {
    name: "SARTHAK MANOCHA",
    insta: "https://www.instagram.com/sarthak.manocha008/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_28_oowo4a.png",
  },
  {
    name: "YASH KUMAR",
    insta: "https://www.instagram.com/yash_kumar113/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_29_cbrigs.png",
  },
  {
    name: "SHOBHIT ARYA",
    insta: "https://www.instagram.com/shobhitarya__/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_30_fpj7hb.png",
  },
  {
    name: "YASHIKA AGGARWAL",
    insta: "https://www.instagram.com/yaasshikkaa/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_31_wlry6v.png",
  },
  {
    name: "PARTAYAKSH KUMAR",
    insta: "https://www.instagram.com/pratyakshkumarsingh/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728611/Rectangle_32_jw36tj.png",
  },
  {
    name: "KARTIK TOMAR",
    insta: "https://www.instagram.com/kartik.tomar_/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728611/Rectangle_33_xn8y0s.png",
  },
  {
    name: "LAKSHAY",
    insta: "https://www.instagram.com/lakshay_mittal29/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728612/Rectangle_34_wbv4mj.png",
  },
  {
    name: "HARSH SHARMA",
    insta: "https://www.instagram.com/harsh.shrmaaa/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728610/Rectangle_39_no1nov.png",
  },
  {
    name: "HARSHIT GUPTA",
    insta: "https://www.instagram.com/_harshit.007/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728614/Rectangle_35_h1iryz.png",
  },
  {
    name: "PRIYANSHU",
    insta: "https://www.instagram.com/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728615/Rectangle_36_zfjfrv.png",
  },
  {
    name: "TANISH SHARMA",
    insta: "https://www.instagram.com/tanish.sharmaa/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728609/Rectangle_37_zejotb.png",
  },
  {
    name: "ADEED ASHRAF",
    insta: "https://www.instagram.com/",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1727728615/Rectangle_38_kknqrr.png",
  },
];

export default function Contacts() {
  return (
    <>
      <div className="mt-24 sm:mt-16 flex flex-col justify-center  items-center">
        <h1 className="text-[30px] sm:text-[100px] opacity-70  text-white font-abhaya font-extrabold">
          COUNCIL MEMBERS 24-25
        </h1>

        {/* PRESIDENT */}
        <div className="flex flex-col min-w-[225px] w-[60%] mt-4 sm:mt-0 sm:w-[45%]">
          <h1 className="text-5xl sm:text-7xl text-center  text-[#CA9E57] font-abhaya font-bold">
            PRESIDENT
          </h1>
          <div className="flex sm:flex-row flex-col mt-2 sm:justify-between gap-10 sm:items-center">
            <ImgCard
              name="SAHIL YADAV"
              imgUrl="https://res.cloudinary.com/derpoctie/image/upload/v1727717000/Sahil_rbghjd.png"
              instaUrl="https://www.instagram.com/sahil4329/"
            />
            <ImgCard {...data[0]} />
          </div>
        </div>

        {/* TREASURER */}

        <div className="mt-16 flex flex-col min-w-[225px] w-[60%] sm:w-[45%]">
          <h1 className="text-5xl sm:text-7xl text-center  text-[#CA9E57] font-abhaya font-bold">
            TREASURER
          </h1>
          <div className="flex sm:flex-row flex-col mt-2 justify-between gap-10 items-center">
            <ImgCard {...data[1]} />
            <ImgCard {...data[2]} />
          </div>
        </div>

        {/* VICE PRESIDENT */}

        <div className="mt-16 flex flex-col min-w-[225px] w-[60%] sm:w-[65%]">
          <h1 className="text-5xl sm:text-7xl text-center  text-[#CA9E57] font-abhaya font-bold">
            VICE PRESIDENT
          </h1>
          <div className="flex sm:flex-row flex-col mt-2 gap-10 justify-between items-center">
            <ImgCard {...data[3]} />
            <ImgCard {...data[4]} />
            <ImgCard {...data[5]} />
          </div>
        </div>

        {/* Joint Treasurer */}

        <div className="mt-16 flex flex-col min-w-[225px] w-[60%] sm:w-[45%]">
          <div className="flex sm:flex-row flex-col mt-2 justify-between gap-16 items-center">
            <ImgCard {...data[6]} heading="JOINT TREASURE" />

            <ImgCard {...data[7]} heading="JOINT TREASURE" />
          </div>
        </div>

        {/* Directors */}

        <div className="mt-24 flex flex-col min-w-[225px] w-[60%] sm:w-[65%]">
          <div className="flex sm:flex-row flex-col mt-2 justify-between gap-24 items-center">
            <ImgCard {...data[8]} heading="DIRECTOR OF DESIGN" />

            <ImgCard {...data[9]} heading="DIRECTOR OF EVENT AND LOGISTICS" />
            <ImgCard {...data[10]} heading="DIRECTOR OF CREATIVE" />
          </div>
        </div>

        {/* Logistics and Outreach */}
        <div className="mt-24 flex flex-col min-w-[225px] w-[60%] sm:w-[45%]">
          <div className="flex sm:flex-row flex-col mt-2 justify-between gap-24 items-center">
            <ImgCard {...data[11]} heading="DIRECTOR OF LOGISTICS" />

            <ImgCard {...data[12]} heading="DIRECTOR OF OUTREACH" />
          </div>
        </div>

        {/* others in future */}
        <div className="m"></div>
      </div>
    </>
  );
}
