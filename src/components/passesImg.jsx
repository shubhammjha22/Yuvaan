export default function PassesImg({ passes_img }) {
  return (
    <>
      <div className="relative h-full w-full box-3d ">
        <img src={passes_img} className="h-full w-full" alt="" />
        <div className="absolute bottom-10 z-40 left-1/2 transform -translate-x-1/2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
            GRAB NOW
          </button>
        </div>
      </div>
    </>
  );
}
