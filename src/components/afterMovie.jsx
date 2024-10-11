import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const videoUrl =
  "https://www.youtube.com/embed/ByrP3KAlXSY?&rel=0&autoplay=1&mute=1";

export default function AfterMovie() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of the video is visible
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-re-400 mt-10 mb-[7rem] flex flex-col justify-center items-center z-40 container mx-auto">
      <h1 className="text-2xl sm:text-6xl text-[#CA9E57] font-abhaya font-bold mb-0">
        AFTER MOVIE
      </h1>
      <div ref={videoRef} className="w-[80vw] sm:w-[50vw] relative">
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <iframe
              width="100%"
              height="auto"
              style={{ aspectRatio: "16/9" }}
              src={videoUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
              className="object-cover rounded-2xl"
              tabIndex="0" // Makes it focusable
              aria-label="Embedded YouTube Video" // Improved accessibility
            ></iframe>
          </motion.div>
        ) : (
          <img
            src={`https://img.youtube.com/vi/ByrP3KAlXSY/hqdefault.jpg`}
            alt="Video thumbnail"
            className="cursor-pointer w-full  sm:h-[60vh] object-cover rounded-2xl" // Ensures the image is responsive
            tabIndex="0" // Makes it focusable // Click to play video
          />
        )}
      </div>

      <div className="hidden sm:block">
        <div className="bg-[#65249C] absolute -bottom-24 -left-[40vh] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
        <div className="bg-[#65249C] absolute -top-24 -right-[40vh] z-10 bg-opacity-[17%] h-[455px] w-[455px] rounded-full"></div>
      </div>
    </div>
  );
}
