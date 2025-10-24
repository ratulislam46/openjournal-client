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
    const [open, setOpen] = useState(false);
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

                {/* Right Side Actions */}
                <div className="navbar-end flex items-center gap-2 md:gap-3">
                    {/* Theme Toggle Button */}
                    <div className="flex-none">
                        <button
                            className="btn btn-ghost btn-circle hover:bg-primary/10 transition-all duration-300"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ?
                                <MdDarkMode size={24} className="text-primary" /> :
                                <MdLightMode size={24} className="text-warning" />
                            }
                        </button>
                    </div>

                    {/* Profile Dropdown Section */}
                    <div className="relative">
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className="cursor-pointer"
                        >
                            {/* Profile Icon/Avatar */}
                            <div className="avatar online placeholder hover:scale-105 transition-transform duration-200">
                                {user?.photoURL ? (
                                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} alt="User Avatar" className="object-cover" />
                                    </div>
                                ) : (
                                    <FaUserCircle size={40} className="text-primary hover:text-primary/80 transition-colors" />
                                )}
                            </div>

                            {/* Enhanced Dropdown Content */}
                            {open && (
                                <div className="absolute right-0 w-64 bg-base-100 shadow-2xl rounded-2xl p-4 border border-primary/10 z-[100] animate-fade-in">
                                    {user ? (
                                        <>
                                            {/* Profile Header */}
                                            <div className="flex flex-col items-center mb-4">
                                                <div className="avatar mb-3">
                                                    {user?.photoURL ? (
                                                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                            <img
                                                                src={user.photoURL}
                                                                alt="User Profile"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                            <FaUserCircle size={64} className="text-primary" />
                                                        </div>
                                                    )}
                                                </div>

                                                <h3 className="font-semibold text-lg text-center line-clamp-1">
                                                    {user?.displayName || "User"}
                                                </h3>
                                                <p className="text-sm text-base-content/60 text-center line-clamp-1">
                                                    {user?.email}
                                                </p>
                                            </div>

                                            <div className='divider my-2'></div>

                                            {/* Action Buttons */}
                                            <div className="space-y-2">
                                                <Link
                                                    to="/my-profile"
                                                    className="btn btn-outline btn-primary w-full normal-case"
                                                >
                                                    <FaUserCircle className="mr-2" />
                                                    View Profile
                                                </Link>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="btn btn-primary w-full normal-case hover:btn-error transition-colors"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="text-center mb-4">
                                                <FaUserCircle size={48} className="text-primary mx-auto mb-2" />
                                                <p className="text-sm text-base-content/60">Sign in to continue</p>
                                            </div>
                                            <div className="space-y-2">
                                                <Link
                                                    to="/login"
                                                    className="btn btn-primary w-full normal-case"
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    to="/register"
                                                    className="btn btn-outline btn-primary w-full normal-case"
                                                >
                                                    Register
                                                </Link>
                                            </div>
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