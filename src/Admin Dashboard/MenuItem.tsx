import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  label: string;
  address: string;
  icon: FC<{ className?: string }>; 
  handleToggle?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ label, address, icon: Icon, handleToggle }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center font-montserrat px-4 py-2 my-5 text-white transition-colors duration-300 transform ${
          isActive ? "text-white" : ""
        }`
      }
      onClick={handleToggle}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`${
              isActive ? "text-primary text-2xl" : "text-white text-2xl"
            }`}
          />
          <span className="mx-4 font-medium">{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default MenuItem;
