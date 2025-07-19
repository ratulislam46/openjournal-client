import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const ShowAllBlogs = ({ blog }) => {

    const { user } = use(AuthContext)
    // console.log(blog);
    const { _id, category, shortdescription, title, image, email } = blog;

    const handleWishList = (id) => {

        console.log('added wishlisht', id);
        console.log(blog);
        axios.post('https://openjournal-server.vercel.app/wishlist', {
            userEmail: user?.email,
            category: blog.category,
            shortdescription: blog.shortdescription,
            description: blog.description,
            id: blog._id,
            image: blog.image,
            title: blog.title,
            email: blog.email
        })
            .then(res => {
                toast.success('Add wishlist successfully')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">

                {/* blog image  */}
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

                {/* blog title and description  */}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h4 className='bg-blue-200 inline-block px-4 rounded-xs'> {category} </h4>
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-500"> {shortdescription} </p>
                    </div>

                    {/* details and wishlist button  */}
                    <div className='flex gap-4'>

                        {/* details button  */}
                        <Link to={`/blog_details/${_id}`} type="button" className="btn btn-info w-[50%]">Details</Link>

                        {/* wishlist button  */}
                        <Link onClick={() => handleWishList(_id)} type="button" className="btn btn-secondary w-[50%]">Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllBlogs;