import { Link, NavLink } from 'react-router';
import logo from '../../../public/logo.png'
import { AuthContext } from '../../Auth/AuthProvider';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, SignOutWithFireBase } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    console.log(user);


    const handleLogOut = () => {
        SignOutWithFireBase()
            .then(() => {
                toast.success('Logout successfully')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>

            <li><NavLink to='/allBlogs'>All Blogs</NavLink></li>
            <li><NavLink to='/feturedBlogs'>Fetured Blogs</NavLink></li>

            {user &&
                <>
                    <li><NavLink to='/addBlog'>Add Blog</NavLink></li>
                    <li><NavLink to='/wishList'>WishList</NavLink></li>
                </>}
        </>

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-sm fixed top-0 left-0 w-full z-50 border-b-2 border-primary rounded-b-xl backdrop-blur-2xl'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="text-xl h-1 flex items-center">
                        <img src={logo} alt="logo" className='w-24' />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-content">
                        {
                            links
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* Right side toggle button */}
                    <div className="flex-none ml-8 md:ml-4">
                        <button
                            className="px-2 py-1 rounded-md bg-base-100"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <MdDarkMode size={28} /> : <MdLightMode size={28} />}
                        </button>
                    </div>

                    {/* 🔥 Profile Dropdown Section */}
                    <div className="relative ml-4">
                        {/* Profile Icon */}
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className="cursor-pointer"
                        >
                            <FaUserCircle size={34} className="text-primary" />

                            {/* Dropdown Content */}
                            {open && (
                                <div className="absolute right-0 mt-3 w-44 bg-base-100 shadow-lg rounded-xl p-3 z-50">
                                    {user ? (
                                        <>
                                            {/* Profile Image */}
                                            <div className="flex justify-center mb-2">
                                                {user?.photoURL ? (
                                                    <img
                                                        src={user.photoURL}
                                                        alt="User"
                                                        className="w-12 h-12 rounded-full object-cover border border-primary"
                                                    />
                                                ) : (
                                                    <FaUserCircle size={48} className="text-primary" />
                                                )}
                                            </div>

                                            <p className="text-center font-medium mb-2">
                                                {user?.displayName || user?.email || "User"}
                                            </p>

                                            <Link
                                                to="/my-profile"
                                                className="w-full btn btn-info btn-soft"
                                            >
                                                View Profile
                                            </Link>
                                            <button
                                                onClick={handleLogOut}
                                                className="w-full mt-2 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login"
                                                className="block text-center bg-primary text-white py-1 rounded-md hover:bg-primary/80 transition"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/register"
                                                className="block text-center mt-2 border border-primary text-primary py-1 rounded-md hover:bg-primary hover:text-white transition"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;