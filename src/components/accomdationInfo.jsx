export default function AccommodationInfo() {
  return (
    <>
      <div className=" absolute  left-[13vw] top-[28vh] sm:left-[4vw] sm:top-[42vh] h-[20vh] sm:h-[26vh]  flex flex-col items-center justify-center w-[75vw] sm:w-[30vw] ">
        <h1 className="text-sm sm:text-lg text-white font-heading">
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
      </div>
    </>
  );
}
