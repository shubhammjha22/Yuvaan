import { motion } from "framer-motion";
import { filter } from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "tween", // Use "tween" for a smooth transition
      ease: "easeInOut", // Makes the animation smoother
      duration: 0.5, // Adjust the duration for the smoothness

      //   staggerChildren: 0.2, // Delay between child elements for a staggered effect
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, filter: "blur(1px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "tween", duration: 0.6 },
  },
};

export default function CompetitionInfo({ backgroundImages, activeImage }) {
  return (
    <>
      <motion.div
        className="relative sm:block sm:backdrop-blur-[0px]  backdrop-blur-[2px] sm:mt-10 mb-3 sm:ml-24 z-20 p-10 sm:w-1/2 h-[20rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeImage}
      >
        {/* <motion.img src={first_heading} className="h-32" alt="" /> */}

        {backgroundImages[activeImage]?.short == true ? (
          <motion.h1 className="font-heading  text-3xl  sm:text-3xl w-[24rem] text-white">
            {backgroundImages[activeImage].heading}
          </motion.h1>
        ) : (
          <motion.h1 className="font-heading text-3xl   sm:text-5xl  text-white">
            {backgroundImages[activeImage].heading}
          </motion.h1>
        )}

        <motion.h2
          className="text-[#CA9E57]  text-2xl font-cormorant font-[500]"
          variants={childVariants}
        >
          {backgroundImages[activeImage].title}
        </motion.h2>

        <motion.p
          className="sm:w-[38rem] text-sm sm:text-base font-abhaya text-white"
          variants={childVariants}
        >
          {backgroundImages[activeImage].description}
        </motion.p>

        <motion.ul
          className="text-base text-white font-abhaya list-disc list-outside"
          variants={childVariants}
        >
          <motion.li variants={childVariants}>
            Date - {backgroundImages[activeImage].date}
          </motion.li>
          <motion.li variants={childVariants}>
            Venue - {backgroundImages[activeImage].venue}
          </motion.li>
          {backgroundImages[activeImage]?.cash != null && (
            <motion.li variants={childVariants}>
              Cash Prize - {backgroundImages[activeImage].cash}
            </motion.li>
          )}
          <motion.li variants={childVariants}>
            Click 'Register' for further information
          </motion.li>
        </motion.ul>

        <motion.button
          className="mt-1 text-base font-abhaya text-white bg-[#CA9E57] rounded-xl py-1 px-3"
          variants={childVariants}
        >
          REGISTER
        </motion.button>
      </motion.div>
    </>
  );
}
