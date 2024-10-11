import AnimationEffect from "../util/Animation";
import AfterMovie from "./afterMovie";

const imgUrl = [
  {
    id: 1,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533883/Rectangle_43_uck1yw.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533889/Rectangle_44_iukhix.png",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533888/Rectangle_45_etuuon.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533892/Rectangle_46_zgjbqv.png",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533886/Rectangle_47_fzrbf4.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533891/Rectangle_48_wjnnqt.png",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533888/Rectangle_49_alfed9.png",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533881/Rectangle_50_dlijcv.png",
  },
  {
    id: 9,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533892/Rectangle_51_mgk1zv.png",
  },
  {
    id: 10,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533884/Rectangle_52_ljijmj.png",
  },
  {
    id: 11,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533888/Rectangle_63_e3ocoo.png",
  },
  {
    id: 12,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533887/Rectangle_64_sbqeim.png",
  },
  {
    id: 13,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533882/Rectangle_53_sey6vu.png",
  },
  {
    id: 14,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533885/Rectangle_54_v6iqdm.png",
  },
  {
    id: 15,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533883/Rectangle_55_eyigzs.png",
  },
  {
    id: 16,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533881/Rectangle_59_ja3h6y.png",
  },
  {
    id: 17,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533879/Rectangle_57_dzgc7l.png",
  },
  {
    id: 18,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533881/Rectangle_58_uqu27b.png",
  },
  {
    id: 19,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533880/Rectangle_56_ffk8be.png",
  },
  {
    id: 20,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533882/Rectangle_60_vbadk0.png",
  },
  {
    id: 21,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533882/Rectangle_61_idv3we.png",
  },
  {
    id: 22,
    url: "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728533882/Rectangle_62_p1yok9.png",
  },
];

export default function Gallery() {
  return (
    <>
      <div className=" relative ">
        <div className="container relative flex flex-col  items-center  xl:p-10 -mt-10 sm:mt-0  mx-auto  ">
          {/* background layer */}

          <div className="bg-[#000000] z-20 opacity-[21%]  sm:ml-0 w-[95%] sm:w-full xl:w-[95%] p-10 absolute mx-auto h-full xl:h-[94%]    "></div>
          {/* Gallery section */}
          <AnimationEffect className="z-40 grid grid-cols-3 sm:grid-cols-5 p-4 gap-5 sm:gap-2">
            {imgUrl.slice(0, 11).map((item) => (
              <img
                key={item.id}
                src={item.url}
                className="aspect-square relative "
                alt={item.id}
              />
            ))}

            {/* Gallery effects s */}
            <span className="hidden sm:inline" alt="" />
            <span className="hidden sm:inline" alt="" />
            <span className="hidden sm:inline" alt="" />

            {imgUrl.slice(11, 13).map((item) => (
              <img
                key={item.id}
                src={item.url}
                className="aspect-square"
                alt={item.id}
              />
            ))}
            <span className="inline sm:hidden" />
            {imgUrl.slice(13, 15).map((item) => (
              <img
                key={item.id}
                src={item.url}
                className="aspect-square"
                alt={item.id}
              />
            ))}
            <span className="inline sm:hidden" />
            {imgUrl.slice(15).map((item) => (
              <img
                key={item.id}
                src={item.url}
                className="aspect-square"
                alt={item.id}
              />
            ))}
          </AnimationEffect>

          {/* Diff gallery text for different dimension - Look for improvement */}
          <h1 className="hidden sm:block text-3xl absolute top-[62%] sm:top-[50%] translate-y-[-50%] text-center sm:text-[6rem] w-full text-[#CA9E57] z-20 font-heading ">
            GALLERY
          </h1>
          <h1 className="flex sm:hidden flex-col text-3xl absolute top-[62%] translate-y-[-50%] text-center  w-full text-[#CA9E57] z-20 font-heading ">
            <span>G</span>
            <span className="-mt-2">A</span>
            <span className="-mt-2">L</span>
            <span className="-mt-2">L</span>
            <span className="-mt-2">E</span>
            <span className="-mt-2">R</span>
            <span className="-mt-2">Y</span>
          </h1>
        </div>
        <AfterMovie />
      </div>
    </>
  );
}
