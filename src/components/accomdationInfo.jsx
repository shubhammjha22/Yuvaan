import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "tween", // Use "tween" for a smooth transition
      ease: "easeInOut", // Makes the animation smoother
      duration: 0.3, // Adjust the duration for the smoothness

      //   staggerChildren: 0.2, // Delay between child elements for a staggered effect
    },
  },
};

export default function AccommodationInfo() {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" absolute  left-[13vw] top-[28vh] sm:left-[4vw] sm:top-[42vh] h-[20vh] sm:h-[26vh]  flex flex-col items-center justify-center w-[75vw] sm:w-[30vw] "
      >
        <h1 className="text-xs sm:text-lg text-white font-heading">
          ACCOMMODATION FOR - 18TH, 19TH, 20TH
        </h1>
        <p className="text-sm sm:text-lg text-white font-heading">
          Pricing Based on Duration of Stay:
        </p>
        <ul className="text-sm sm:text-lg text-white font-heading text-center w-full">
          <li>1 Day - ₹1500</li>
          <li>2 Days - ₹2400</li>
          <li>3 Days - ₹3000</li>
        </ul>
        <p className="font-heading text  text-[#FFBD59] text-xs sm:text-sm">
          *Prices are per individual
        </p>
      </motion.div>
    </>
  );
}
