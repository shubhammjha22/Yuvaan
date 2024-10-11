import { motion } from "framer-motion";

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
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
      <img src={passes_img} className="h-full w-full z-50" alt="" />
      <div className="absolute bottom-10 z-40 left-1/2 transform -translate-x-1/2">
        <motion.button
          className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Faster button animation
        >
          GRAB NOW
        </motion.button>
      </div>
    </motion.div>
  );
}
