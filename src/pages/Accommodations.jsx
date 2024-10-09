import SocialMedia from "../components/socialMedia";

const bgUrl =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1728498473/Accomm-desktop_hdducr.png";

export default function Accommodations() {
  return (
    <>
      <div className="h-screen w-screen bg-[#2A0B44]">
        <section className="flex flex-col justify-evenly sm:block relative h-full overflow-hidden">
          <img
            src={bgUrl}
            className="absolute inset-0 z-0 h-[100vh] w-[100vw] -tp-40"
            alt=""
          />
          <div className="mt-24 relative sm:mt-24 flex flex-col justify-center  items-center">
            <h1 className="text-8xl   font-abhaya font-extrabold text-[#CA9E57]">
              ACCOMMODATIONAS
            </h1>
            <h3 className="text-5xl -mt-6 font-abhaya font-semibold text-white">
              AT 7TH EDITION
            </h3>
          </div>

          <div className="absolute bottom-10 left-16">
            <SocialMedia />
          </div>
        </section>
      </div>
    </>
  );
}
