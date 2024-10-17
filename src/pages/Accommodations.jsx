import AccommodationBooking from "../components/accomdationBooking";
import AccommodationHeading from "../components/accomdationHeading";
import AccommodationInfo from "../components/accomdationInfo";

const url =
  "https://res.cloudinary.com/derpoctie/image/upload/v1728541279/Accomodation_Website_no_text_2_ttlcsi.png";

const url2 =
  "https://res.cloudinary.com/derpoctie/image/upload/v1728549586/Accomodation_425_x_862_px_no_text_no_dot_ta1ybn.png";

export default function Accommodations() {
  return (
    <>
      <div className="h-screen w-screen bg-[#2A0B44]">
        <style>{`
          .glow {
            text-shadow: 0 0 10px rgba(255, 204, 51, 0.7),
              /* Inner glow */ 0 0 20px rgba(255, 204, 51, 0.5),
              /* Middle glow */ 0 0 30px rgba(255, 204, 51, 0.4),
              /* Outer glow */ 0 0 40px rgba(255, 102, 0, 0.3); /* Larger glow */
          }
        `}</style>

        <section className="relative h-full overflow-hidden">
          <div className="sm:block hidden">
            <img
              src={url}
              className="absolute inset-0 z-0 h-[100vh] w-[100vw] -tp-40"
              alt=""
            />
          </div>
          <div className="sm:hidden block">
            <img
              src={url2}
              className="absolute inset-0 z-0 h-full w-[100vw] -tp-40"
              alt=""
            />
          </div>

          {/* HEADING */}
          <AccommodationHeading />

          {/* Accommodation Info */}
          <AccommodationInfo />

          {/* BOOK TEXT */}
          <AccommodationBooking />

          <div className="bg-footer-gradient w-full h-1/5 sm:h-1/4 z-10 absolute bottom-0 "></div>
        </section>
      </div>
    </>
  );
}
