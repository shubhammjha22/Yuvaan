export default function ImgCard({ imgUrl, name, insta, heading }) {
  return (
    <div>
      <div className="relative text-center">
        <img src={imgUrl} alt={name} className="h-64 relative" />
        <div className="w-full bg-[#D9D9D9] rounded-bl-3xl rounded-br-3xl absolute bottom-0 flex flex-col justify-center">
          <h2 className="relative font-abhaya font-bold text-2xl text-center mb-0">
            {name}
          </h2>
          <a
            href={insta}
            className="h-6 w-6 mx-auto mix-blend-difference mb-1 -mt-1"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/derpoctie/image/upload/v1727753745/instagram-logo_wskuia.png"
              className="relative"
              alt=""
            />
          </a>
        </div>
        {heading && (
          <div className="absolute w-full mt-2 flex justify-center">
            <h1 className="text-center absolute w-[135%] text-3xl  text-[#CA9E57] font-abhaya font-bold">
              {heading}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
