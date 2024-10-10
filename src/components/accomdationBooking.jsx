export default function AccommodationBooking() {
  return (
    <div className=" absolute z-100 sm:right-[4vw] right-[14vw] bottom-[10vh] sm:bottom-[15vh] h-[26vh] flex flex-col items-center justify-center w-[75vw] sm:w-[30vw]">
      <h1
        className="relative text-4xl xl:text-6xl mt-4 -rotate-6 text-center text-white font-heading transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer hover:underline duration-300"
        onClick={() =>
          window.open(
            "https://forms.gle/y5RMb7DS2yQZSHE39",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        BOOK YOURS HERE
      </h1>
    </div>
  );
}
