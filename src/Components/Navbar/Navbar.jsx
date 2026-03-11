import { Link, NavLink } from 'react-router';
import logo from '../../../public/logo.png'
import { AuthContext } from '../../Auth/AuthProvider';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { user, SignOutWithFireBase } = use(AuthContext);
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const handleLogOut = () => {
        SignOutWithFireBase()
            .then(() => {
                toast.success('Logout successfully')
            })
            .catch(error => console.log(error))
    }

    // NavLink এর জন্য স্লিম স্টাইল
    const navLinkStyles = ({ isActive }) => 
        `relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
            isActive ? "text-white bg-primary shadow-md shadow-primary/20" : "text-gray-600 hover:text-primary hover:bg-primary/5"
        }`;

    const links = (
        <>
            <li><NavLink to='/' className={navLinkStyles}>Home</NavLink></li>
            <li><NavLink to='/allBlogs' className={navLinkStyles}>All Blogs</NavLink></li>
            <li><NavLink to='/feturedBlogs' className={navLinkStyles}>Featured</NavLink></li>
            {user && (
                <>
                    <li><NavLink to='/addBlog' className={navLinkStyles}>Add Blog</NavLink></li>
                    <li><NavLink to='/wishList' className={navLinkStyles}>Wishlist</NavLink></li>
                </>
            )}
        </>
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300'>
            {/* navbar container */}
            <div className="navbar container mx-auto min-h-[60px] py-0"> 
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 min-h-0 h-auto mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-[1] mt-2 w-52 p-3 shadow-xl border border-gray-100 space-y-1">
                            {links}
                        </ul>
                    </div>
                    
                    {/* Logo - size reduced for slim look */}
                    <Link to='/' className="flex items-center transition-transform active:scale-95">
                        <img src={logo} alt="logo" className='w-20 lg:w-24 object-contain' />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2 md:gap-3">
                    {/* Theme Toggle */}
                    {/* <button
                        className="btn btn-ghost btn-circle btn-sm bg-gray-50/50 hover:bg-primary/10 transition-all duration-300"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? <MdDarkMode size={18} className="text-primary" /> : <MdLightMode size={18} className="text-warning" />}
                    </button> */}

                    {/* Profile Section */}
                    <div className="relative">
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className="flex items-center py-2"
                        >
                            <div className="avatar online cursor-pointer">
                                {/* Avatar size reduced to w-8 h-8 */}
                                <div className="w-8 h-8 rounded-full ring-2 ring-primary ring-offset-1 hover:ring-offset-2 transition-all duration-300">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt="Avatar" />
                                    ) : (
                                        <div className="bg-primary/10 h-full w-full flex items-center justify-center">
                                            <FaUserCircle size={22} className="text-primary" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 top-full pt-2 w-60 z-[100]"
                                    >
                                        <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-100">
                                            {user ? (
                                                <>
                                                    <div className="text-center">
                                                        <div className="avatar mb-2">
                                                            <div className="w-12 h-12 rounded-full ring-1 ring-primary ring-offset-1">
                                                                <img src={user?.photoURL} alt="User" />
                                                            </div>
                                                        </div>
                                                        <h3 className="font-bold text-sm text-gray-800 line-clamp-1">{user?.displayName || "Member"}</h3>
                                                        <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{user?.email}</p>
                                                    </div>
                                                    <div className='divider opacity-50 my-3 text-[10px]'>Account</div>
                                                    <div className="space-y-2">
                                                        <Link to="/my-profile" className="btn btn-outline btn-primary btn-xs w-full rounded-full">Profile</Link>
                                                        <button onClick={handleLogOut} className="btn btn-primary btn-xs w-full rounded-full shadow-md shadow-primary/10">Log Out</button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center space-y-3">
                                                    <p className="text-gray-500 text-xs italic">Join OpenJournal</p>
                                                    <div className="flex flex-col gap-1.5">
                                                        <Link to="/login" className="btn btn-primary btn-xs rounded-full">Login</Link>
                                                        <Link to="/register" className="btn btn-outline btn-primary btn-xs rounded-full">Register</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;