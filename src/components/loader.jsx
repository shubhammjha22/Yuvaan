const yuvaan_logo_1 =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729151591/yuvaan_logo-tiny_ij6r1a.webp";

export default function Loader() {
  return (
    <>
      <style>
        {`
          .loader {
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 12px solid;
  border-color: #CA9E57 #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {to{transform: rotate(.5turn)}}
        `}
      </style>
      <div className="relative h-[100vh] flex justify-center items-center overflow-x-hidden bg-[#2A0B44]">
        {/* <img
          src={yuvaan_logo_1}
          className="absolute z-40 h-1/2 opacity-20"
          alt=""
        /> */}
        <div className=" loader "></div>
        <div className="bg-footer-gradient w-full h-1/3 absolute bottom-0 "></div>
      </div>
    </>
  );
}

/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
