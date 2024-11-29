import { Helmet } from "react-helmet-async";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import UserDataRow from "./UserDataRow";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
} from "../../store/Features/user/userSlice";
import { FaSearch } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
// import LoadingSpinner from '../../Shared/LoadingSpinner';
const ManageUsers = () => {

  const axiosPublic = useAxiosPublic()

  /****Use Search and filter****/
  const dispatch = useDispatch();

  // Redux selectors
  const users = useSelector(selectAllUsers);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);

  // Define filter, search, and size using useState
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(0);

  // useEffect to fetch users
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, size, filter, search }));
  }, [dispatch, currentPage, size, filter, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosPublic(`/users-count?filter=${filter}&search=${search}`
      );

      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  // Pagination Button Handler
  const handlePaginationButton = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchUsers({ page: newPage, size, filter, search }));
    }
  };

  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = [...Array(totalPages).keys()].map((element) => element + 1);

  const handleReset = () => {
    setFilter("");
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      html: `<div class="text-start text-gray-600 text-base">You won't be able to revert this!</div>`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Delete",
      backdrop: `
          rgba(0, 0, 0, 0.5) 
          url('path/to/your/background-image.jpg') 
          left top 
          no-repeat
      `,
      customClass: {
        title: 'text-2xl pt-9 text-start font-semibold text-black',
        confirmButton: 'hover:bg-[#fd4958] bg-[#DB142C] text-white font-medium py-2 px-4 rounded-md ml-2',
        cancelButton: 'text-[#0d1216] bg-[#E5E5E5] font-medium py-2 px-4 rounded-md mr-4',
        popup: 'w-[420px] rounded-2xl shadow-lg border flex flex-col items-start px-1',
        actions: 'flex justify-end w-full mt-4'
      }
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/user/${id}`)
            .then((response) => {
              if (response.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleting...",
                  html: `
                      <div class="relative mb-6 w-full h-3 bg-gray-200 rounded">
                          <div id="progress-bar" class="absolute h-full rounded-full" style="width: 0; background: linear-gradient(90deg, #2CACD5, #00C8AA); transition: width 1s ease;"></div>
                      </div>
                  `,
                  showConfirmButton: false,
                  willOpen: () => {
                    const progressBar = document.getElementById('progress-bar');
                    setTimeout(() => {
                      progressBar.style.width = '87%';

                      setTimeout(() => {
                        progressBar.style.width = '100%';
                      }, 500);
                      setTimeout(() => {
                        Swal.close();
                      }, 1700);
                    }, 100);
                  }
                });

                // Update local state to remove deleted user without refetching
                setCount((prev) => prev - 1);
                dispatch(fetchUsers({ page: currentPage, size, filter, search }));

              }
            })
            .catch((error) => {
              console.error("There was an error deleting the resume", error);
              Swal.fire({
                title: "Error!",
                text: "There was an error deleting the resume.",
                icon: "error"
              });
            });
        }
      });
  };



  // console.log(users);
  // if ( loading) return <LoadingSpinner />
  return (
    <>
      <div className="container mx-auto md:p-6 p-2 md:mt-0 mt-20 ">
        <Helmet>
          <title>Manage Users - PerfectProfile</title>
        </Helmet>

        <div className="flex items-center pb-6 gap-x-3">
          <h2 className="2xl:text-2xl text-xl text-gray-800 font-bold font-lora ">Manage Users</h2>
        </div>

        <div className=" flex w-full flex-col md:flex-row items-center gap-5">
          <div className="md:max-w-44 relative flex items-center font-roboto font-medium text-base w-full">
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                dispatch(fetchUsers({ page: 1 }));
              }}
              value={filter}
              name="productName"
              id="productName"
              className="border w-full appearance-none cursor-pointer focus:outline-none px-4 py-3 rounded"
            >
              <option value="">Subscription</option>
              <option value="free">Free</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
            <span className="absolute text-xl right-3 pointer-events-none">
              <IoFilter />
            </span>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex-grow font-roboto font-medium w-full"
          >
            <div className="flex overflow-hidden border focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <button className="px-3 py-3 text-sm font-medium tracking-wider uppercase rounded bg-none transition-colors duration-300 transform focus:outline-none">
                <FaSearch className="font-bold" />
              </button>
              <input
                className="pr-6 pl-1 py-2 w-full placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                // onChange={e => setSearchText(e.target.value)}
                // value={searchText}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                placeholder="Search By Name, Email..."
                aria-label="Enter User Name"
              />
              <button className='lg:flex hidden px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#00C8AA] hover:bg-[#2CACD5] focus:[#FF0143] focus:outline-none'>
                Search
              </button>
            </div>
          </form>

          <button
            onClick={handleReset}
            className="px-2 md:px-4 font-roboto justify-center flex items-center gap-1 py-3 text-base font-medium rounded border"
          >
            <TbRefresh /> Reset
          </button>
        </div>

        <div className="pb-8 px-2 md:px-0 pt-2.5">
          <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-50 ">
                  <tr className=" text-sm">
                    <th scope='col'
                      className='text-center px-4 py-3.5  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm  uppercase font-lora font-bold"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm uppercase font-lora font-bold"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800 xl:text-lg text-sm uppercase font-lora font-bold text-center"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  xl:text-lg text-sm uppercase font-lora font-bold text-center"
                    >
                      Subscription
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-center xl:text-lg text-sm uppercase font-lora font-bold"
                    >
                      Action
                    </th>


                  </tr>
                </thead>
                <tbody className="font-montserrat">
                  {users?.map((user, indx) => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      indx={indx}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-primary rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-secondary hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <IoIosArrowBack />
            </div>
          </button>

          {/* Number of page */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={` ${currentPage === btnNum ? "bg-primary text-white" : ""
                } px-4 py-2 mx-1 border rounded-full sm:inline hover:bg-secondary hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-white bg-primary rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:bg-gray-200"
          >
            <div className="flex items-center -mx-1">
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
