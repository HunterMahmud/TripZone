import {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const Navbar: React.FC = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);


    // const { user } = useAuth();
    // const navigate = useNavigate();
    const user = null

    const navLinks = <>
        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-secondary pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-secondary'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:pb-1 hover:text-secondary hover:rounded-none text-[16px] hover:border-b-2 border-secondary mt-2'
        } to={'/'}> Home </NavLink> </li>


        {/* {user && <> */}

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-secondary pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-secondary'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-secondary'
        } to={'/community'}> Community </NavLink> </li>


        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-secondary pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-secondary'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-secondary'
        } to={'/about'}> About Us </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-secondary pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-secondary'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-secondary'
        } to={'/contact'}> Contact Us </NavLink> </li>

        {/* </>} */}

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 text-secondary pb-1 rounded-none text-[16px] border-b-2 font-medium mt-2 border-secondary'
                :
                'font-medium p-0 transition-all duration-200 ease-in-out hover:text-secondary hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-secondary'
        } to={'/blogs'}> Blogs </NavLink> </li>

    </>


    // const handleLogoutBtn = () => {
    //     logOut()
    //     navigate('/')
    //         .then(() => {
    //             console.log("Sing Out Successfully");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    // console.log(isOpenMenu);

    return (

        <div className=" navbar items-center justify-between roboto min-h-[99px] p-0 md:py-3 py-5 container mx-auto md:px-10 px-1">

            <div className="">

                <details className="dropdown">
                    <summary className="m-1 text-white btn bg-transparent border-none hover:bg-transparent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </summary>
                    <ul className="p-2 shadow dropdown-content z-50 bg-white rounded-box w-52 text-black space-y-2">
                        {
                            navLinks
                        }
                    </ul>
                </details>



                <Link to={'/'} className="font-bold text-lg md:text-3xl gap-3 flex items-center">
                    <span className="text-secondary"><span className="text-white">Trip</span><span className="">Zone</span></span>
                    </Link>


            </div>
            {/* Nav Menu */}
            <div className="navbar-center hidden ml-8 lg:flex">
                <ul className="menu-horizontal space-x-5 ">
                    {navLinks}
                </ul>
            </div>


            {/* NavEnds */}
            <div className="">
                {
                    user ? <>
                        <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="btn btn-ghost btn-circle avatar text-white">
                            <div className=" w-12 rounded-full ">
                                <img alt={"User"} src='{user.photoURL}' />
                            </div>
                        </div>
                        {
                            isOpenMenu &&
                            <ul className="absolute bg-white top-20 right-16 rounded-lg py-2 z-10 w-[150px] border-t-2 border-[#ddd]">
                                <li>
                                    {/* <a className="text-black">{user.displayName}</a> */}
                                    <Link to={`/dashboard`} className='flex w-full items-center px-4 py-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                                        <MdDashboard className='w-5 h-5' />

                                        <span className='mx-3 font-medium'>Dashboard</span></Link>
                                </li>
                                <div
                                    // onClick={handleLogoutBtn}
                                    className='flex w-full items-center px-4 py-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                                >
                                    <GrLogout className='w-5 h-5' />

                                    <span className='mx-4 font-medium'>Logout</span>
                                </div>
                            </ul>
                        }

                    </>
                        :
                        <>
                            <div className=" flex ">
                                <Link to={`/login`} className="md:mr-2 mr-1 md:px-[30px] md:py-[12px] py-0.5 px-1.5 ease-out font-medium tracking-wide text-white md:text-[15px] text-xs capitalize transition-colors duration-300 transform rounded-md border-secondary hover:bg-secondary hover:border-secondary border hover:border">
                                    Login
                                </Link>
                                <Link to={`/register`} className="md:px-[30px] md:py-[12px] px-1 ease-out font-medium tracking-wide text-white md:text-[15px] text-xs capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-transparent border-secondary hover:border-secondary border  ">
                                    Sign Up
                                </Link>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};


export default Navbar;