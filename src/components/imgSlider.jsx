import { useRef } from "react";
import Slider from "react-slick";

// Images from Cloudinary
const images = [
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740731/Bayaan_r6ukit.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740730/REALMS_OF_IMAGINATION_n1faya.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740729/BASANTI_POUNCE_MAT_KARNA_zsxmqw.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740728/DELTECH_DEBATATHON_tyyecx.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740732/SOLO_FOLK_COMPETITION_ajrrm4.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740730/NAYAAB_tdt47q.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740728/DUET_AND_GROUP_CLASSICAL_COMPETITION_qb1vxs.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740728/CLASH_OF_COMICS_kk7dpw.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740728/CONSULTICA_CHALLENGE_ckyndg.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740730/LENS_LEGENDS_vk10bs.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740731/The_Muse_Matter_Hindi_jqbjyh.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740732/The_Muse_Matter_gxjnia.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740728/JUST_A_MINUTE_eifecf.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740729/BOOKMARK_MAKING_vhyxvl.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740730/PHOTO_EXHIBITION_k9l178.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1730740729/16_hnozqb.png",
];

export default function ImageSlider({ setActiveImage, activeImage }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    focusOnSelect: true,
    arrows: false,
    // beforeChange: (current, next) => setActiveImage(next),
    afterChange: (index) => setActiveImage(index),
  };

  const handleImageClick = (index) => {
    setActiveImage(index);
    console.log(index);

    // sliderRef.current.slickGoTo(index); // Move slider to the clicked image
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move slider to previous slide
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move slider to next slide
  };

  return (
    <>
      <div className="relative w-[55%] -mt-12  mb-10 sm:-mt-0 sm:mb-0 sm:w-[90%]  mx-auto   sm:overflow-hidden">
        <Slider
          lazyLoad="progressive"
          className="sm:w-[95vw]"
          ref={sliderRef}
          {...settings}
        >
          {images.map((img, index) => (
            <div className=" relative h-full w-full" key={index}>
              <img
                src={img}
                alt={`movie ${index}`}
                className={`relative w-full h-full sm:w-[13rem] sm:h-[14rem] rounded-xl hover:cursor-pointer transition-all ease-in  hover:opacity-100 hover:scale-105 active:scale-95 active:duration-100  duration-300 ${
                  index === activeImage ? "opacity-[100%]" : "opacity-[60%]"
                }  `}
                style={{ willChange: "opacity, transform" }}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div
        onClick={handlePrev}
        className="absolute h-8 w-8 sm:h-10 sm:w-10 left-[16vw] sm:left-[3vw] top-1/3 sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black bg-opacity-[20%] text-lg sm:text-2xl hover:cursor-pointer  px-1 rotate-90 flex justify-center items-center text-white opacity-60 hover:scale-105 hover:opacity-90"
      >
        V
      </div>
      <div
        onClick={handleNext}
        className="absolute h-8 w-8 sm:h-10 sm:w-10 right-[8vw]  sm:right-[1vw] top-1/3 sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black bg-opacity-[20%] text-lg sm:text-2xl hover:cursor-pointer  px-1 -rotate-90 flex justify-center items-center text-white opacity-60 hover:scale-105 hover:opacity-90"
      >
        V
      </div>
    </>
  );
}
