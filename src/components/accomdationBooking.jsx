import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "tween", // Use "tween" for a smooth transition
      ease: "easeInOut", // Makes the animation smoother
      duration: 1, // Adjust the duration for the smoothness

      //   staggerChildren: 0.2, // Delay between child elements for a staggered effect
    },
  },
};

export default function AccommodationBooking() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=" absolute z-100 sm:right-[4vw] right-[14vw] bottom-[10vh] sm:bottom-[15vh] h-[26vh] flex flex-col items-center justify-center w-[75vw] sm:w-[30vw]"
    >
      <h1
        className="relative text-4xl xl:text-6xl mt-4 -rotate-6 text-center text-white font-heading transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer hover:underline duration-300"
        onClick={() =>
          window.open(
            "https://forms.gle/y5RMb7DS2yQZSHE39",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        BOOK YOURS HERE
      </h1>
    </motion.div>
  );
}
