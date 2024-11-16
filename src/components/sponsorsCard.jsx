import { useEffect, useRef } from "react";

export default function SponsorsCard({ imgUrl, name }) {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = imgUrl;
          observer.unobserve(lazyImage);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [imgUrl]);

  return (
    <div>
      <div className="relative text-center w-full">
        <img
          ref={imgRef}
          src={imgUrl}
          alt={name}
          className="h-[9rem] w-[9rem] sm:h-[20rem] sm:w-[120%] relative"
          loading="lazy"
        />
        {/* <div className="w-full text-[#CA9E57]  absolute -bottom-10 flex flex-col justify-center items-center">
          <h2 className="relative w-[120%]  font-abhaya font-bold text-sm sm:text-3xl text-center mb-0">
            {name}
          </h2>
        </div> */}
      </div>
    </div>
  );
}
