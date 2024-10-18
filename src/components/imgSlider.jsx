import { useRef } from "react";
import Slider from "react-slick";

// Images from Cloudinary
const images = [
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390567/Rectangle_70_aumbcx.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390567/Rectangle_71_opirjg.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390560/Rectangle_72_p6ceez.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390560/Rectangle_73_mpu3lv.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390561/Rectangle_74_dyefga.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390561/Rectangle_75_ixpslo.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390562/Rectangle_76_ogmgcl.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390562/Rectangle_77_xmg2di.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390561/Rectangle_78_izmm9o.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390562/Rectangle_79_nonb6v.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390562/Rectangle_80_loihxf.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390563/Rectangle_81_gmqblh.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390564/Rectangle_82_rp1roz.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390565/Rectangle_83_bg8dzu.png",
  "https://res.cloudinary.com/derpoctie/image/upload/v1728390566/Rectangle_84_eufu4c.png",
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
                className={`relative w-full h-full sm:w-[13rem] sm:h-[14rem] hover:cursor-pointer transition-all ease-in  hover:opacity-100 hover:scale-105 active:scale-95 active:duration-100  duration-300 ${
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
