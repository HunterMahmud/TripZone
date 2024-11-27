import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BlogLayout from "../pages/Blog/BlogLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <BlogLayout />
      },
      {
        path:'/login',
        element: <Login/>
      }
    ]
  },
]);

export default router;