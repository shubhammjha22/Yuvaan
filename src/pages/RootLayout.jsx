import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const website_texture =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto/v1727753755/website_texture_w3rlkw.png";

function Rootlayout() {
  return (
    <>
      <main className="relative ">
        <div
          className="absolute z-10 inset-0"
          style={{
            backgroundImage: `url(${website_texture})`, // Texture image (white dots)
            backgroundSize: "cover", // Ensures the texture covers the entire area
            backgroundRepeat: "repeat", // Repeats the texture
            // Adjust the opacity so the gradient shows through
          }}
        />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Rootlayout;
