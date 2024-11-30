import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact/Contact";
import BlogLayout from "../pages/Blog/BlogLayout";
import TourDetails from "../components/TourDetails";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
import About from "../pages/About";
import ManageUsers from "../pages/Admin/ManageUsers";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import Statistics from "../Admin Dashboard/Statistics";
import AddPackage from "../Admin Dashboard/AddPackage/AddPackage";
import ToursLayout from "../pages/Tours/ToursLayout";

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
        path: "/blog",
        element: <BlogLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: <BlogLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tours",
        element: <ToursLayout />
      },
      {
        path: "/tour-details",
        element: <TourDetails />,
      },
    ],
  },

  // Admin Dashboard Layout
  {
    path: "/dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-packages",
        element: <ManageUsers />,
      },
      {
        path: "manage-booking",
        element: <ManageUsers />,
      },
      {
        path: "add-package",
        element: <AddPackage />,
      },
    ],
  },
]);

export default router;
