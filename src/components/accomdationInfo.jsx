export default function AccommodationInfo() {
  return (
    <>
      <div className="absolute left-[4vw] top-[42vh] h-[26vh]  flex flex-col items-center justify-center  w-[30vw] ">
        <h1 className="text-lg text-white font-heading">
          ACCOMMODATION FOR - 18TH, 19TH, 20TH
        </h1>
        <p className="text-lg text-white font-heading">
          Pricing Based on Duration of Stay:
        </p>
        <ul className="text-lg text-white font-heading text-center w-full">
          <li>1 Day - ₹1500</li>
          <li>2 Days - ₹2400</li>
          <li>3 Days - ₹3000</li>
        </ul>
        <p className="font-heading text  text-[#FFBD59] text-sm">
          *Prices are per individual
        </p>
      </div>
    </>
  );
}
