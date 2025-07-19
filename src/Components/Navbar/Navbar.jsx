import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import { use } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, SignOutWithFireBase } = use(AuthContext)

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
            <li><NavLink to='/addBlog'>AddBlog</NavLink></li>
            <li><NavLink to='/allBlogs'>AllBlogs</NavLink></li>
            <li><NavLink to='/feturedBlogs'>FeturedBlogs</NavLink></li>
            <li><NavLink to='/wishList'>WishList</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                <a className="btn btn-ghost text-xl">OpenJournal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
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
    );
};

export default Navbar;