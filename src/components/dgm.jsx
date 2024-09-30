import white_images from "/assets/demo.png";

export default function DGM() {
  return (
    <>
      {/* DGM and DESIGN */}
      <div className="relative text-center text-5xl text-[#CA9E57] font-abhaya font-bold mt-12">
        DGM AND DESIGN
      </div>
      <div className="h-[24rem] flex justify-center relaitve">
        <div className="container bottom  absolute mb-20 h-[24rem] w-1/2 md:min-w-[720px] mx-auto px-5 py-2">
          <div className="grid grid-cols-2 gap-20 mt-8 z-20">
            <div className="bg-white rounded-lg">
              <img
                src={white_images}
                alt="Image 10"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-white rounded-lg">
              <img
                src={white_images}
                alt="Image 11"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
