import { createBrowserRouter, RouterProvider, } from "react-router";
import Layout from "../RootLayout/Layout";
import Home from '../Home/Home';
import AddBlog from '../Share/AddBlog/AddBlog'
import AllBlogs from '../Share/AllBlogs/AllBlogs'
import FeturedBlogs from '../Share/FeturedBlogs/FeturedBlogs'
import WishList from '../Share/Wishlist/Wishlist'
import Login from "../Share/Login/Login";
import Register from "../Share/Register/Register";
import Error from "../Share/Error/Error";
import BlogDetails from "../Share/AllBlogs/BlogDetails";
import UpdateBlog from "../Share/UpdateBlog/UpdateBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Wishlist from "../Share/Wishlist/Wishlist";
import Loading from "../Share/Loading/Loading";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/addBlog',
                element: <PrivateRoute>
                    <AddBlog></AddBlog>
                </PrivateRoute>
            },
            {
                path: '/allBlogs',
                Component: AllBlogs
            },
            {
                path: '/blog_details/:id',
                Component: BlogDetails,
                loader: ({ params }) => fetch(`https://openjournal-server.vercel.app/blogs/${params.id}`),
                HydrateFallback: Loading
            },
            {
                path: '/blog_update/:id',
                Component: UpdateBlog,
                loader: ({ params }) => fetch(`https://openjournal-server.vercel.app/blogs/${params.id}`),
                HydrateFallback: Loading
            },
            {
                path: '/feturedBlogs',
                Component: FeturedBlogs
            },
            {
                path: '/wishList',
                element: <PrivateRoute>
                    <Wishlist></Wishlist>
                </PrivateRoute>,
                loader: () => fetch('https://openjournal-server.vercel.app/wishList'),
                HydrateFallback: Loading
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/*',
        Component: Error
    }
]);


