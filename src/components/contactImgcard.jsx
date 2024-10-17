import { useEffect, useRef } from "react";

export default function ImgCard({ imgUrl, name, insta, heading }) {
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
      <div className="relative text-center">
        <img
          ref={imgRef}
          src={imgUrl}
          alt={name}
          className="sm:h-64 relative"
          loading="lazy"
        />
        <div className="w-full bg-[#D9D9D9] sm:rounded-bl-3xl  sm:rounded-br-3xl rounded-bl-2xl rounded-br-2xl  absolute bottom-0 flex flex-col justify-center">
          <h2 className="relative font-abhaya font-bold text-sm sm:text-2xl text-center mb-0">
            {name}
          </h2>
          <a
            href={insta}
            className="h-4 w-4 relative sm:h-6 sm:w-6 mx-auto mix-blend-difference mb-1 -mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/derpoctie/image/upload/v1727753745/instagram-logo_wskuia.png"
              className="relative z-40"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
        {heading && (
          <div className="absolute w-full mt-2 flex justify-center">
            <h1 className="text-center absolute w-[135%] leading-tight text-lg sm:text-3xl  text-[#CA9E57] font-abhaya font-bold">
              {heading}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
