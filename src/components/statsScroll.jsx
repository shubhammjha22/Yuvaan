import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const textContent = [
  {
    title: "Bollywood Celebrities:",
    text: "Nora Fatehi, Arjun Rampal, Vidyut Jammwal, Amy Jackson, Manisha Koirala, Mandira Bedi, Abhilash Thapliyal",
  },
  {
    title: "OTT and Digital Stars:",
    text: "Prajakta Kohli, Sanjana Sanghi, Yash Pal Sharma, Dhruv Sehgal, Ayush Mehra, Mithila Palkar, Gopal Dutt, Badal Sharma, Navjot Ahuja, Ankur Warikoo",
  },
  {
    title: "Renowned Comedians:",
    text: "Anubhav Singh Bassi, Aditya Kulshreshth, Swati Sachdeva, Haseeb Khan, Rajat Chauhan, Madhur Virli, Vijay Yadav, Rajat Sood, Ashish Solanki",
  },
  {
    title: "Famous Poets:",
    text: "Azhar Iqbal, Wasim Barelvi, Yahya Bootwala, Amandeep Singh",
  },
  {
    title: "Prominent Music Artists (Pronites):",
    text: "Nizami Brothers, RCR, Vivek Singh Baghel, Rutba Band, Sufinama",
  },
  {
    text: "Recently, Yuvaan organized one of India's biggest book launch events for ‘Class of 2006' featuring the renowned actor R. Madhavan.",
  },
  {
    title: "FOOTFALL - 90,000+",
    big: true,
  },
];

export default function StatsScroll() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textContent.length);
    }, 3000); // Change text every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <motion.div
        key={index} // To trigger animation when content changes
        initial={{ opacity: 0, y: 20 }} // Start hidden and below
        animate={{
          opacity: index === index ? 1 : 0,
          y: index === index ? 0 : 10,
        }} // Animate to visible and in place
        // exit={{ opacity: 0, y: -20 }} // Exit by fading and moving upwards
        transition={{ duration: 0.5 }} // Duration of each transition
        className="leading-tight h-20 z-20 text-sm sm:text-xl w-[17rem] sm:w-[46rem] text-white font-abhaya mt-4 mb-24 sm:mt-4 sm:font-lg"
      >
        {textContent[index]?.big ? (
          <b className="text-2xl mb-0 sm:text-5xl">
            {textContent[index].title}
          </b>
        ) : (
          <b className="text-xl mb-0 sm:text-3xl">{textContent[index].title}</b>
        )}
        <br />
        {textContent[index].text}
        <br />
      </motion.div>
    </>
  );
}
