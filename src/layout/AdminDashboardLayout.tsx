import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Admin Dashboard/Sidebar";

const AdminDashboardLayout: FC = () => {
  return (
    <div className="md:flex justify-between ">
      {/* Sidebar */}
      <div className="2xl:w-72 w-60 fixed z-50">
        <Sidebar />
      </div>

      {/* Outlet --> Dynamic content */}
      <div className="max-w-4/6 2xl:ml-72 md:ml-60 overflow-hidden w-full">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
