import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact/Contact";
import BlogLayout from "../pages/Blog/BlogLayout";
<<<<<<< HEAD
import Login from "../pages/Login/Login";
import Register from './../pages/Register/Register';
=======
import About from "../pages/About";
import ManageUsers from "../pages/Admin/ManageUsers";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import Statistics from "../Admin Dashboard/Statistics";

>>>>>>> cf9eb3a98f02af4c93afa66efc1b486ca9e6e71b

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
<<<<<<< HEAD
        path: '/blog',
        element: <BlogLayout />
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      }
    ]
=======
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
      },
    {
      path: "/about",
      element: <About/>
    }
    ],
>>>>>>> cf9eb3a98f02af4c93afa66efc1b486ca9e6e71b
  },

  // Admin Dashboard Layout
  {
    path: "/dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Statistics />

        ),
      },
      {
        path: "manage-users",
        element: (
          <ManageUsers />
          
        ),
      },
      {
        path: "manage-packages",
        element: (
          <ManageUsers />
          
        ),
      },
      {
        path: "manage-booking",
        element: (
          <ManageUsers />
          
        ),
      },
      {
        path: "add-package",
        element: (
          <ManageUsers />
          
        ),
      },
      
    ],
  },
  
]);

export default router;
