import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Speed n Analytics components
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Pages
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsRoot from "./pages/EventsRoot";
import ComingSoon from "./pages/ComingSoon";
import Competition from "./pages/Competition";
import ContantUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ComingSoon />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
      },
      {
        path: "competitions",
        element: <Competition />,
      },
      {
        path: "contact",
        element: <ContantUs />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
