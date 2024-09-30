import white_images from "/assets/demo.png";

export default function Contacts() {
  return (
    <>
      <div className="relative container w-1/2 md:min-w-[720px] mt-10 mx-auto px-5 py-2">
        <div className="grid grid-cols-3 gap-10 mt-12">
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 4"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 5"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 6"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 7"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 8"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={white_images}
              alt="Image 9"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
