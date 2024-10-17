import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Important and Coming Soon pages
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import Loader from "./components/loader";
import EventsRoot from "./pages/EventsRoot";
import Sponsors from "./pages/Sponsors";

const HomePage = lazy(() => import("./pages/HomePage"));
// const EventsRoot = lazy(() => import("./pages/EventsRoot"));
const Competition = lazy(() => import("./pages/Competition"));
const ContantUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
// const Sponsors = lazy(() => import("./pages/Sponsors"));
const Passes = lazy(() => import("./pages/Passes"));
const Accommodations = lazy(() => import("./pages/Accommodations"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "events",
        element: <EventsRoot />,
      },
      {
        path: "competitions",
        element: (
          <Suspense fallback={<Loader />}>
            <Competition />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <ContantUs />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "passes",
        element: (
          <Suspense fallback={<Loader />}>
            <Passes />
          </Suspense>
        ),
      },
      {
        path: "accommodations",
        element: (
          <Suspense fallback={<Loader />}>
            <Accommodations />
          </Suspense>
        ),
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
