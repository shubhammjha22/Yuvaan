import AnimationEffect from "../util/Animation";

import SponsorsCard from "./sponsorsCard";

const sponsorData = [
  {
    name: "Myntra",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739811/38_fqk7qq.png",
  },
  {
    name: "Brewly Yours",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739811/37_xjtufo.png",
  },
  {
    name: "Delhi Toursim",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739807/33_i74xlr.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739811/27_zn9jpc.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739810/29_nahx9b.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739808/28_bp7lqg.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739808/32_e4jwst.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739808/31_carfxh.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739811/30_pqavzs.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739807/35_a4w6ta.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739807/36_tdi9od.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739807/34_pke9sy.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739804/25_ttmzba.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739804/26_lzayto.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739803/1_dcp6wb.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739803/2_u4kcff.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739803/3_qx7rhh.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739803/18_iq3nq0.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/17_ij8jxl.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739803/24_zbzlvx.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739802/4_zso15y.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739799/23_aoksf4.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739799/19_dsxwjg.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739799/22_zdzwnq.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/9_mywphh.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739797/8_xa9qme.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739799/20_qskt9f.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/13_oounah.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/14_y3fdyy.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/7_p3h74b.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739796/6_vwqw6y.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739798/21_dyx3qq.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739797/15_zwqacx.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739796/10_klxqpl.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739796/5_zg3lg7.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739797/16_el4wip.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739796/11_ae3zdz.png",
  },
  {
    name: "Sponsor",
    imgUrl:
      "https://res.cloudinary.com/derpoctie/image/upload/v1731739796/12_hpc01t.png",
  },
];

export default function SponsorsTitle() {
  console.log("Length of img - ", sponsorData.length);
  return (
    <>
      <div className="mt-24 sm:mt-20 flex flex-col justify-center  items-center relative z-20">
        <h1 className="text-3xl sm:text-7xl opacity-70  text-white font-abhaya font-extrabold">
          SPONSORS
        </h1>

        {/* PRESIDENT */}
        <AnimationEffect className="flex flex-col min-w-[225px] w-[95%] mt-4 sm:mt-10 sm:w-[75%]">
          {/* <h1 className="text-3xl sm:text-7xl text-center  text-[#CA9E57] font-abhaya font-bold">
            PRESIDENT
          </h1> */}
          <div className=" w-full  flex flex-wrap justify-center gap-4 sm:gap-0 sm:flex-row sm:justify-between  sm:items-center">
            <SponsorsCard {...sponsorData[0]} />
            <SponsorsCard {...sponsorData[1]} />
            <SponsorsCard {...sponsorData[2]} />
          </div>
        </AnimationEffect>

        {/* TREASURER */}

        <div className=" flex flex-col min-w-[225px] w-[95%] mt-16 sm:mt-20 sm:w-[75%]">
          {/* <h1 className="text-3xl sm:text-7xl text-center  text-[#CA9E57] font-abhaya font-bold">
            PRESIDENT
          </h1> */}
          <div className=" w-full flex flex-wrap justify-center gap-10 sm:gap-10  lg:justify-center  lg:items-center">
            <SponsorsCard {...sponsorData[3]} />
            <SponsorsCard {...sponsorData[4]} />
            <SponsorsCard {...sponsorData[5]} />
            <SponsorsCard {...sponsorData[6]} />
            <SponsorsCard {...sponsorData[7]} />
            <SponsorsCard {...sponsorData[8]} />
            <SponsorsCard {...sponsorData[9]} />
            <SponsorsCard {...sponsorData[10]} />
            <SponsorsCard {...sponsorData[11]} />
            <SponsorsCard {...sponsorData[12]} />
            <SponsorsCard {...sponsorData[13]} />
            <SponsorsCard {...sponsorData[14]} />
            <SponsorsCard {...sponsorData[15]} />
            <SponsorsCard {...sponsorData[16]} />
            <SponsorsCard {...sponsorData[17]} />
            <SponsorsCard {...sponsorData[18]} />
            <SponsorsCard {...sponsorData[19]} />
            <SponsorsCard {...sponsorData[20]} />
            <SponsorsCard {...sponsorData[21]} />
            <SponsorsCard {...sponsorData[22]} />
            <SponsorsCard {...sponsorData[23]} />
            <SponsorsCard {...sponsorData[24]} />
            <SponsorsCard {...sponsorData[25]} />
            <SponsorsCard {...sponsorData[26]} />
            <SponsorsCard {...sponsorData[27]} />
            <SponsorsCard {...sponsorData[28]} />
            <SponsorsCard {...sponsorData[29]} />
            <SponsorsCard {...sponsorData[30]} />
            <SponsorsCard {...sponsorData[31]} />
            <SponsorsCard {...sponsorData[32]} />
            <SponsorsCard {...sponsorData[33]} />
            <SponsorsCard {...sponsorData[34]} />
            <SponsorsCard {...sponsorData[35]} />
            <SponsorsCard {...sponsorData[36]} />
            <SponsorsCard {...sponsorData[37]} />
          </div>
        </div>

        {/* others in future */}
        <div className="mb-[10rem]"></div>
      </div>
    </>
  );
}
