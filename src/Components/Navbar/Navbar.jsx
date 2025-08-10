import { Link, NavLink } from 'react-router';
import logo from '../../../public/logo.png'
import { AuthContext } from '../../Auth/AuthProvider';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, SignOutWithFireBase } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


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
        <div className='shadow-sm fixed top-0 left-0 w-screen z-50 bg-red-100 px-4 md:px-6 lg:px-8'>
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
                    <ul className="menu menu-horizontal px-1 text-black">
                        {
                            links
                        }
                    </ul>
                </div>

                {/* Right side toggle button */}
                <div className="flex-none">
                    <button
                        className="btn btn-soft text-xl"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? "🌑 Dark" : "🔆 Light"}
                    </button>
                </div>

                <div className="navbar-end">

                    {
                        user &&
                        <img className='w-10 mr-2 rounded-2xl' src={user.photoURL || 'https://i.postimg.cc/pX5mX6Zd/istockphoto-1337144146-612x612.jpg'} alt="" />
                    }

                    {
                        user ?
                            <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button> :
                            <>
                                <Link to='/register' className='underline text-blue-500 mr-5'>Register</Link>
                                <Link to='/login' className='btn btn-info'>Sign in</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;