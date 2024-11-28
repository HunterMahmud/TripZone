import { useState, FC } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import MenuItem from "./MenuItem";
// import { CgProfile } from "react-icons/cg";

// import useAuth from "../../Hook/useAuth";
// import useRole from "../../Hook/useRole";

const Sidebar: FC = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();
  const [isActive, setActive] = useState<boolean>(false); // Explicitly typed as boolean
  // const [role] = useRole(); // Assuming `useRole` returns an array
  // const [toggle, setToggle] = useState<boolean>(true); // Explicitly typed as boolean

  // Sidebar Responsive Handler
  const handleToggle = (): void => {
    setActive(!isActive);
  };

  // const handleLogoutBtn = async (): Promise<void> => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //     console.log("Sign Out Successfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const role = {
    role: "admin",
  }


  

  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-gradient-to-b from-[#2095AE] to-[#0f2454] flex justify-between w-full fixed top-0 left-0 z-[1000] md:hidden">
        <div className="p-4">
          <Link
            to="/"
            className="font-bold text-lg md:text-3xl gap-3 flex items-center"
          >
            <h1 className="font-bold font-lora text-white">
              <span>
                Trip
                <span className="text-primary">Zone</span>
              </span>
            </h1>
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className={`p-4 focus:outline-none ${isActive ? "text-secondary" : "text-primary"
            }`}
        >
          {isActive ? (
            <AiOutlineClose className="text-2xl" /> // Close button when sidebar is open
          ) : (
            <GiHamburgerMenu className="text-2xl" /> // Open button when sidebar is closed
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-[100]  md:block flex flex-col justify-between bg-gradient-to-b from-[#2095AE] to-[#0f2454] text-white md:w-full w-[80%] h-screen fixed space-y-6 px-2 py-4
        transform ${isActive ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-200 ease-in-out md:translate-x-0 md:relative`}
      >
        <div className="">
          {/* Close Button for Mobile Devices */}
          <div className="hidden md:block px-4">
            <Link to="/" className="">
              <h1 className="font-bold text-lg lg:text-2xl font-lora">
                <span>
                  Trip
                  <span className="text-primary">Zone</span>
                </span>
              </h1>
            </Link>
          </div>
          {isActive && (
            <button onClick={handleToggle} className="p-2 text-white md:hidden">
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Nav Items */}
        <div className="flex flex-col justify-between h-full">
          {role?.role === "admin" && (
            <nav className="">
              <MenuItem
                label="Overview"
                address="/dashboard"
                icon={GoHomeFill}
                handleToggle={handleToggle} // Pass handleToggle to MenuItem
              />
              <MenuItem
                label="Manage Users"
                address="manage-users"
                icon={FaUsers}
                handleToggle={handleToggle}
              />
              <MenuItem
                label="Manage Booking"
                address="manage-booking"
                icon={MdPayments}
                handleToggle={handleToggle}
              />
              <MenuItem
                label="Manage Packages"
                address="manage-packages"
                icon={MdPayments}
                handleToggle={handleToggle}
              />
              <MenuItem
                label="Add Package"
                address="add-package"
                icon={BsPersonWorkspace}
                handleToggle={handleToggle}
              />
            </nav>
          )}

          <div>
            <div className="md:-mt-28">
              <button
                // onClick={handleLogoutBstn}
                className="flex w-full items-center px-4 py-2 text-gray-600  transition-colors duration-300 transform"
              >
                <GrLogout className="text-2xl text-secondary" />
                <span className="mx-4 font-medium font-montserrat text-lg text-white">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
