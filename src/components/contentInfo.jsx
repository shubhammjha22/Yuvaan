import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: "-30vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween", // Use "tween" for a smooth transition
      ease: "easeInOut", // Makes the animation smoother
      duration: 0.8, // Adjust the duration for the smoothness

      staggerChildren: 0.2, // Delay between child elements for a staggered effect
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.5 } },
};

export default function ContentInfo({ backgroundImages, activeImage }) {
  return (
    <>
      <motion.div
        className="relative sm:block mt-24 sm:mt-10 mb-0 sm:ml-32 z-20 p-10 sm:w-1/2 h-[20rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeImage}
      >
        {/* <motion.img src={first_heading} className="h-32" alt="" /> */}

        {backgroundImages[activeImage]?.short == true ? (
          <motion.h1 className="font-heading  text-3xl w-[24rem] text-white">
            {backgroundImages[activeImage].heading}
          </motion.h1>
        ) : (
          <motion.h1 className="font-heading  text-5xl  text-white">
            {backgroundImages[activeImage].heading}
          </motion.h1>
        )}

        <motion.h2
          className="text-[#CA9E57] text-2xl font-cormorant font-[500]"
          variants={childVariants}
        >
          {backgroundImages[activeImage].title}
        </motion.h2>

        <motion.p
          className="w-[36rem] text-base text-white"
          variants={childVariants}
        >
          {backgroundImages[activeImage].description}
        </motion.p>

        <motion.ul
          className="text-sm text-white list-disc list-outside"
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
          className="mt-1 text-sm text-white bg-[#CA9E57] rounded-xl py-1 px-3"
          variants={childVariants}
        >
          REGISTER
        </motion.button>
      </motion.div>
    </>
  );
}
