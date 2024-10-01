import SocialMedia from "./socialMedia.jsx";

const soldier =
  "https://res.cloudinary.com/derpoctie/image/upload/v1727753754/soldier_mk9mnd.png";

export default function Stats() {
  return (
    <>
      {/* Stats */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col p-4 mt-[10rem] -ml-[12rem] sm:ml-[4rem] w-[50%]  ">
          <h1 className="text-3xl sm:text-5xl  -mt-[12rem] text-[#CA9E57] font-abhaya font-bold  mb-0">
            STATISTICS
          </h1>
          <p className="text-base sm:text-2xl text-nowrap text-white font-abhaya mt-0 font-semibold   ">
            Past Celebrities and Artists:
          </p>
          <p className="leading-tight z-20 sm:text-md w-[46rem] text-white font-abhaya mt-0 sm:font-normal   ">
            <span className="sm:hidden text-xs z-20 ">
              <b> Bollywood Celebrities: </b> <br />
              Nora Fatehi, Arjun Rampal, Vidyut Jammwal, Amy <br /> Jackson,
              Manisha Koirala, Mandira Bedi, Abhilash <br /> Thapliyal
              <br /> <br />
              <b>OTT and Digital Stars:</b> <br /> Prajakta Kohli, Sanjana
              Sanghi, Yash Pal Sharma, <br /> Dhruv Sehgal, Ayush Mehra, Mithila
              Palkar, Gopal <br /> Dutt, Badal Sharma, Navjot Ahuja, Ankur
              Warikoo <br /> <br />
              <b>Renowned Comedians:</b> <br /> Anubhav Singh Bassi, Aditya
              Kulshreshth, Swati <br /> Sachdeva, Haseeb Khan, Rajat Chauhan,
              Madhur <br /> Virli, Vijay Yadav, Rajat Sood, Ashish Solanki{" "}
              <br />
              <br />
              <b>Famous Poets:</b> <br />
              Azhar Iqbal, Wasim Barelvi, Yahya Bootwala,
              <br />
              Amandeep Singh <br />
              <br />
              <b>Prominent Music Artists (Pronites):</b> <br /> Anuv Jain,
              Sukhbir, Nizami Brothers, RCR, Vivek <br /> Singh Baghel, Rutba
              Band, Sufinama <br /> <br />
              Recently, Yuvaan organized one of India's biggest <br />
              book launch events for ‘Class of 2006' featuring the <br />
              renowned actor R. Madhavan.
            </span>

            {/* Text for screens 'sm' and larger */}
            <span className="hidden sm:block">
              <b> Bollywood Celebrities: </b> <br />
              Nora Fatehi, Arjun Rampal, Vidyut Jammwal, Amy Jackson, Manisha
              Koirala, Mandira Bedi, Abhilash Thapliyal
              <br /> <br />
              <b>OTT and Digital Stars:</b> <br /> Prajakta Kohli, Sanjana
              Sanghi, Yash Pal Sharma, Dhruv Sehgal, Ayush Mehra, Mithila
              Palkar, Gopal Dutt, Badal Sharma, Navjot Ahuja, Ankur Warikoo{" "}
              <br /> <br /> <b>Renowned Comedians:</b> <br /> Anubhav Singh
              Bassi, Aditya Kulshreshth, Swati Sachdeva, Haseeb Khan, Rajat
              Chauhan, Madhur Virli, Vijay Yadav, Rajat Sood, Ashish Solanki{" "}
              <br />
              <br /> <b>Famous Poets:</b> <br />
              Azhar Iqbal, Wasim Barelvi, Yahya Bootwala, Amandeep Singh <br />
              <br />
              <b>Prominent Music Artists (Pronites):</b> <br /> Anuv Jain,
              Sukhbir, Nizami Brothers, RCR, Vivek Singh Baghel, Rutba Band,
              Sufinama <br />
              <br />
              Recently, Yuvaan organized one of India's biggest book launch
              events for ‘Class of 2006'
              <br /> featuring the renowned actor R. Madhavan.
            </span>
          </p>

          <p className="text-2xl mt-4 text-nowrap text-white font-abhaya  font-semibold   ">
            FOOTFALL - 90,000+
          </p>
          <div className="mt-10 w-[16rem] h-[3rem] ">
            <SocialMedia />
          </div>
        </div>
        <div className="img w-[45rem] sm:w-[72vw] absolute -ml-[20rem] mt-[7.5rem] sm:-ml-[28rem]  sm:-mt-[14rem]  sm:relative flex ">
          <img src={soldier} className=" sm:relative z-10" alt="" />
        </div>
      </div>
    </>
  );
}
