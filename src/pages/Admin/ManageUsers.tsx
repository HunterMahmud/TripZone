// import { Helmet } from 'react-helmet-async';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

// Define User type
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const ManageUsers = () => {
  /****Use Search and filter****/
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  // Fetch Users data
  const fetchUsers = async () => {
    const { data } = await axios.get<User[]>(
      `${import.meta.env.VITE_API_URL}/users?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&search=${search}`
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, filter, itemsPerPage, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get<{ count: number }>(
        `${import.meta.env.VITE_API_URL}/users-count?filter=${filter}&search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(10).keys()].map(element => element + 1);

  // Handle pagination button
  const handlePaginationButton = (value: number) => {
    setCurrentPage(value);
  };

  const handleReset = () => {
    setFilter('');
    setSearch('');
    setSearchText('');
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}

        <div className='flex items-center pt-8 pb-3 gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800'>Manage Users</h2>
        </div>

        <div className='flex w-full flex-col md:flex-row items-center gap-5'>
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name='role'
              id='role'
              className='border px-4 py-3 rounded-sm'
            >
              <option value=''>Filter By Role</option>
              <option value='admin'>Admin</option>
              <option value='tour_guide'>Guide</option>
              <option value='normal_user'>Normal User</option>
            </select>
          </div>

          <form onSubmit={handleSearch} className='flex-grow'>
            <div className='flex p-1 overflow-hidden border focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter User Name'
                aria-label='Enter User Name'
              />
              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#FD4C6C] hover:bg-[#FF0143] focus:[#FF0143] focus:outline-none'>
                Search
              </button>
            </div>
          </form>

          <button onClick={handleReset} className='btn rounded-sm'>
            Reset
          </button>
        </div>

        <div className='pb-8 pt-2.5'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='pr-5 pl-10 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                      Name
                    </th>
                    <th className='pr-5 pl-10 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                      Email
                    </th>
                    <th className='pr-5 pl-10 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                      Role
                    </th>
                    <th className='pr-5 pl-10 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                      Status
                    </th>
                    <th className='pl-6 pr-12 py-3 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {users?.map((user, indx) => (
                    <UserDataRow
                      key={user._id}
                      user={user}
                      indx={indx}
                      refetch={fetchUsers}
                    />
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className='flex justify-center mt-12'>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className='px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-[#FD4C5C] rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF0143] hover:text-white'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowBack />
            </div>
          </button>
          {/* Numbers */}
          {pages.map(btnNum => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? 'bg-[#FD4C5C] text-white' : ''
                } px-4 py-2 mx-1 transition-colors duration-300 transform border rounded-full sm:inline hover:bg-[#FF0143]  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className='px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#FD4C5C] rounded-full hover:bg-[#FF0143] disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
