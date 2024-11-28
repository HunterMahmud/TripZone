import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserDataRow = ({ indx, user, handleDelete }) => {
  return (
    <tr className="">
      <td className='text-center font-medium px-4 py-1 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-500 whitespace-no-wrap'>{indx + 1}</p>
      </td>
      <td className="px-4 py-1 border-b border-gray-200 bg-white text-sm ">
        <p className="text-gray-500 whitespace-no-wrap ">{user?.name}</p>
      </td>
      <td className="px-4 py-1 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-500 whitespace-no-wrap ">{user?.email}</p>
      </td>
      <td className="px-4 py-1 border-b border-gray-200 bg-white text-sm">
        <p
          className={`capitalize w-28 mx-auto text-center px-1 py-1 rounded-full text-xs font-medium ${user?.role === 'admin' && 'text-emerald-500 bg-emerald-100/60'} ${user?.role === 'user' && 'text-pink-500 bg-pink-100/60'} ${user?.role === 'consultant' && 'text-blue-500 bg-blue-100/60'} ${user?.role === 'Hybrid' && 'text-violet-500 bg-violet-100/60'} `}
        >
          {user?.role}
        </p>
      </td>
      <td className=" px-4 py-1 border-b border-gray-200 bg-white text-sm">
      <p
          className={`capitalize w-28 mx-auto px-5 text-center py-1 rounded-full text-xs font-medium ${user.productName === 'free' && 'text-violet-500 bg-violet-100/60'} ${user.productName === 'premium' && 'text-[#FE784A] bg-[#FE784A]/10'} ${user.productName === 'standard' && 'text-blue-500 bg-blue-100/60'} ${user.productName === 'Hybrid' && 'text-[#FE784A] bg-[#FE784A]/20'}`}
        >
          {user.productName}</p>
      </td>
      <td className="px-4 text-center py-1 border-b border-gray-200 bg-white text-sm">
        <div className=" space-x-1">
          <span className="inline-flex gap-4 overflow-hidden rounded-md bg-white">
            <Link to={`/dashboard/make-consultant`}
              className="inline-block  p-3 text-green-500 bg-gray-100 rounded-full focus:relative"
              title="Edit User"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>

            <button onClick={() => handleDelete(user._id)}
              className="inline-block p-3 rounded-full text-red-600 bg-gray-100 focus:relative"
              title="Delete User"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </span>

        </div>
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
};

export default UserDataRow;
