import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const ShowRecentBlog = ({ blog }) => {

    const { user } = use(AuthContext)

    const { _id, category, shortdescription, title, image, email } = blog;

    const handleWishList = (id) => {

        // console.log('added wishlisht', id);
        // console.log(blog);
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
                // console.log(error);
                toast.error('Error wihlisht')
            })
    }

    return (
        <div>
            <div className="rounded-lg border border-primary/10 shadow-xs bg-base-100 flex flex-col h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                {/* Blog Image */}
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full rounded-t-lg transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Blog Content */}
                <div className="flex flex-col justify-between p-6 space-y-6 flex-grow">
                    <div className="space-y-3">
                        {/* Title and Description */}
                        <h2 className="text-xl md:text-2xl text-base-content font-semibold line-clamp-2" title={title}>
                            {title}
                        </h2>
                        <p className="text-base-content line-clamp-3" title={shortdescription}>
                            {shortdescription}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link
                            to={`/blog_details/${_id}`}
                            className="btn btn-outline btn-info flex-1 text-center py-2 px-4 transition-colors"
                            aria-label={`View details of ${title}`}
                        >
                            Details
                        </Link>

                        <button
                            onClick={() => handleWishList(_id)}
                            className="btn btn-outline btn-success flex-1 py-2 px-4 transition-colors"
                            aria-label={`Add ${title} to wishlist`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRecentBlog;