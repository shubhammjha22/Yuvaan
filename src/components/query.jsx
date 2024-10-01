export default function Queries() {
  return (
    <>
      <div className="mt-32 sm:mt-24 flex justify-center items-center flex-col">
        <h1 className="text-[40px] sm:text-[70px] opacity-70  text-white font-abhaya font-extrabold">
          FOR ANY QUERIES
        </h1>
        <a
          href="http://whatsapp.com"
          className="z-20 mb-32 bg-[#65249C] rounded-2xl p-2 w-64 flex justify-center items-center"
          target="_blank" // Ensures the link opens in a new tab
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/derpoctie/image/upload/v1727753756/whatsapp-logo_o8eyre.png"
            className="w-8 h-8 mr-3 mb-1"
            alt=""
          />

          <h1 className="text-3xl  text-white font-abhaya font-extrabold">
            JOIN GROUP
          </h1>
        </a>
      </div>
    </>
  );
}