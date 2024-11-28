import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact/Contact";
import BlogLayout from "../pages/Blog/BlogLayout";
import TourDetails from "../components/TourDetails/TourDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
      },
      {
        path: "/tourDetails",
        element: <TourDetails />,
      },
    ],
  },
]);

export default router;
