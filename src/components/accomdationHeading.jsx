export default function AccommodationHeading() {
  return (
    <>
      <div className="mt-16 h-24 relative sm:mt-24 flex  justify-center items-center">
        {/* Dotted */}
        <div className="hidden sm:block border-t-4 border-dotted border-white w-[90%] mr-4  sm:-mt-10 "></div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-heading  text-[#FFBD59] glow">
            ACCOMMODATIONS
          </h1>
          <h3 className="hidden sm:block text-2xl sm:text-4xl -mt-2 font-heading  text-white">
            AT 7TH EDITION
          </h3>
          <div className="sm:hidden flex w-[100vw]">
            <div className="border-t-4 border-dotted border-white w-[35%] mt-1 "></div>

            <h3 className="text-xl w-full sm:text-4xl -mt-2 font-heading font-semibold text-white">
              AT 7TH EDITION
            </h3>
            <div className="border-t-4 border-dotted border-white w-[35%] mt-1 "></div>
          </div>
        </div>

        <div className="hidden sm:block border-t-4 border-dotted border-white w-[90%] ml-4 sm:-mt-10"></div>
      </div>
    </>
  );
}
