// import { RouterProvider } from "react-router-dom";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import router from "./router/router";


// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );










import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "./index.css";
import router from "./router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Toast Notification */}
    <ToastContainer />
  </StrictMode>
);
