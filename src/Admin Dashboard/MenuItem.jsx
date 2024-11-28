// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon, handleToggle }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center font-montserrat px-4 py-2 my-5 text-white  transition-colors duration-300 transform ${
          isActive ? " text-white" : ""
        }`
      }
      onClick={handleToggle}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={` ${
              isActive ? "text-primary text-2xl" : "text-white text-2xl"
            }`}
          />
          <span className="mx-4 font-medium">{label}</span>
        </>
      )}
    </NavLink>
  );
}
// MenuItem.propTypes = {
//   label: PropTypes.string,
//   address: PropTypes.string,
//   icon: PropTypes.elementType,
// }

export default MenuItem
