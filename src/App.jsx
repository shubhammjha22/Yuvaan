import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Pages
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsRoot from "./pages/EventsRoot";
import Competition from "./pages/Competition";
import ContantUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Sponsors from "./pages/Sponsors";
import Passes from "./pages/Passes";
import Accommodations from "./pages/Accommodations";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./pages/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
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
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "passes",
        element: <Passes />,
      },
      {
        path: "accommodations",
        element: <Accommodations />,
      },
      // Catch-all route for undefined paths
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
