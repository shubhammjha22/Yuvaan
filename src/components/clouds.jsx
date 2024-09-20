import clouds from "../assets/cloud-1.png";
import birds from "../assets/birds.png";
export default function Clouds() {
  return (
    <>
      {/* CLOUDS */}
      <section className="h-[10vh] relative ">
        <div className=" hidden sm:block">
          <img
            src={clouds}
            className="-mt-[10rem] h-[400px] absolute -left-[10rem] mix-blend-auto "
            alt=""
          />
          <div className="flex flex-col sm:flex-row flex-nowrap ">
            <div className="h-[400px]  sm:-ml-[8rem] -mt-[17rem] sm:-mt-[16rem] w-[200%] relative">
              <img src={clouds} className="absolute mix-blend-auto " alt="" />
            </div>
            <div className="h-[400px] sm:-ml-[30rem] -mt-[16rem] w-[200%] relative">
              <img src={clouds} className="absolute mix-blend-auto " alt="" />
            </div>
          </div>
          <img
            src={clouds}
            className=" -mt-[20rem] h-[400px] absolute -right-[10rem] mix-blend-auto "
            alt=""
          />
          <img
            src={birds}
            className="absolute top-[5rem] -right-[8rem] w-[40%] mix-blend-auto"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <div className=" h-[12rem] -mt-[11rem]  ">
            {/* middle cloud */}
            {/* <img
              src={clouds}
              className="absolute -left-[15%] top-4 w-full"
              alt=""
            />
            <img
              src={clouds}
              className="absolute top-4 -right-[15%] w-full"
              alt=""
            /> */}

            {/* top */}
            <img
              src={clouds}
              className="absolute -left-[20%] -top-14 w-full"
              alt=""
            />
            <img
              src={clouds}
              className="absolute -right-[20%] -top-14 w-full"
              alt=""
            />
            {/* Center cloud */}
            {/* <img src={clouds} className="absolute  w-full" alt="" /> */}

            {/* <img src={clouds} className="absolute top-24  w-full" alt="" /> */}
            {/* <img src={clouds} className="absolute -top-14  w-full" alt="" /> */}

            {/* below middle ignore comments cloud */}
            <img
              src={clouds}
              className="absolute -left-[27%] top-[2rem] w-full"
              alt=""
            />
            <img
              src={clouds}
              className="absolute -right-[20%] top-[2rem] w-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
