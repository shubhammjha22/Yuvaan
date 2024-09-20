import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Rootlayout() {
  return (
    <>
      <Navbar />
      <main className="relative ">
        <Outlet />
      </main>
    </>
  );
}

export default Rootlayout;
