import { motion } from "framer-motion";
const globe =
  "https://res.cloudinary.com/derpoctie/image/upload/f_auto/v1727753744/globe_fnvhwn.png";
const demo =
  "https://res.cloudinary.com/derpoctie/image/upload/v1728530567/Frame_39_1_cq3tpu.png";

function MajorEvent() {
  return (
    <div className="-mt-32 p-2 sm:p-10 text-white font-bold relative">
      <div className="absolute z-10 mt-64 -left-[34rem] sm:-left-[18rem] sm:w-[34rem] sm:h-[34rem] w-[50rem] h-[50rem]">
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{
            duration: 10, // Adjust the rotation duration as needed
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-full h-full"
        >
          <img
            src={globe}
            alt="Globe"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
      <div className="ml-0 mt-44  xl:max-w-[1022px] xl:ml-60  xl:mt-24  xl:p-10">
        <h1 className="text-5xl text-center xl:text-left sm:text-6xl  xl:mt-0 text-[#CA9E57] font-abhaya font-bold  mb-10">
          MAJOR EVENTS
        </h1>
        <div className="-mt-14 xl:-mt-10 z-20 flex xl:mr-10 ">
          <div className=" flex mt-10 flex-row flex-wrap justify-center gap-5 ">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className=" bg-black bg-opacity-40 z-20 w-[160px] h-[200px] xl:h-[16rem] xl:w-[210px]  border-1 border-black shadow-[10px_10px_8px_rgba(0,0,0,0.3)] rounded-xl p-0  "
              >
                <img
                  src={demo}
                  alt={`Image ${index + 1}`}
                  className=" w-full h-[60%] object-cover rounded-lg shadow-md "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorEvent;
