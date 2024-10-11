import { motion } from "framer-motion";

const passes_img2 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728632414/ENTRY_PASS_mobile_no_text-tiny_rmbzg9.png";

export default function PassesImg({ passes_img }) {
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 30; // Vertical tilt
    const rotateY = (x - 0.5) * 30; // Horizontal tilt

    return { rotateX, rotateY };
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.touches[0].clientX - left) / width;
    const y = (e.touches[0].clientY - top) / height;

    const rotateX = (y - 0.5) * 30; // Vertical tilt
    const rotateY = (x - 0.5) * 30; // Horizontal tilt

    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.style.transition = "transform 0.6s ease-out"; // Make it smooth
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      className="relative h-full w-full box-3d z-100"
      onMouseMove={(e) => {
        const { rotateX, rotateY } = handleMouseMove(e);
        e.currentTarget.style.transform = `perspective(2500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transition = "transform 0.8s ease-out";
        e.currentTarget.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }}
      onTouchStart={handleTouchStart} // Handle touch start
      onTouchEnd={handleTouchEnd} //
      style={{
        perspective: 1000,
        transition: "transform 0.2s ease",
      }}
    >
      {/* Large screen */}
      <div className="hidden sm:block">
        <img
          src={passes_img}
          className="h-[70vh] sm:h-full sm:w-full  z-50"
          alt=""
        />
      </div>

      {/* Mobile screen */}
      <div className="block h-full w-full sm:hidden">
        <img
          src={passes_img2}
          className="h-[70vh] sm:h-full sm:w-full w-[90vw]  z-50"
          alt=""
        />
      </div>
      <div className="absolute top-2 w-full  ">
        <h1 className="text-white text-center heading-shadow text-4xl sm:text-[55px] mt-6 font-heading text-shadow">
          EARLY BIRD REGISTRATION
        </h1>
        <p className="text-white text-center text-3xl sm:text-5xl -mt-2 -mb-3 font-passesFont">
          FOR
        </p>
        <h2 className="text-white opacity-80 drop-shadow-2xl text-center text-4xl sm:text-[88px] font-passesFont ">
          DAY 1, 2 AND 3
        </h2>
      </div>

      <div className="absolute bottom-10 z-40 left-1/2 transform -translate-x-1/2">
        <motion.button
          className="button-gradient font-heading text-sm py-2 px-2 w-[65vw] sm:w-full sm:text-3xl text-white sm:px-4 sm:py-4 rounded-xl "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Faster button animation
        >
          REGISTER FOR EVENT
        </motion.button>
      </div>
    </motion.div>
  );
}
