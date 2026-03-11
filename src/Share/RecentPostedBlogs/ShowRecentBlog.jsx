import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const ShowRecentBlog = ({ blog }) => {
    const { user } = use(AuthContext);
    const { _id, category, shortdescription, title, image } = blog;

    const handleWishList = (id) => {
        axios.post('https://openjournal-server.vercel.app/wishlist', {
            userEmail: user?.email,
            ...blog,
            id: blog._id // mapping server requirements
        })
        .then(() => toast.success('Added to wishlist!'))
        .catch(() => toast.error('Failed to add wishlist'));
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -8 }}
            className="group bg-white  overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-xs font-bold rounded-full shadow-sm">
                        {category || "Journal"}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {shortdescription}
                </p>

                {/* Bottom Actions */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-50">
                    <Link
                        to={`/blog_details/${_id}`}
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                    >
                        Read More <FaArrowRight className="text-xs" />
                    </Link>

                    <button
                        onClick={() => handleWishList(_id)}
                        className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                        title="Add to wishlist"
                    >
                        <FaHeart />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ShowRecentBlog;