import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact/Contact";
import BlogLayout from "../pages/Blog/BlogLayout";
import TourDetails from "../components/TourDetails";
import ManageUsers from "../pages/Admin/ManageUsers";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import Statistics from "../Admin Dashboard/Statistics";
import AddPackage from "../Admin Dashboard/AddPackage/AddPackage";

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
      // {
      //   path: "manage-packages",
      //   element: (
      //     <ManageUsers />

      //   ),
      // },
      // {
      //   path: "manage-booking",
      //   element: (
      //     <ManageUsers />

      //   ),
      // },
      {
        path: "add-package",
        element: <AddPackage />,
      },
    ],
  },
]);

export default router;
