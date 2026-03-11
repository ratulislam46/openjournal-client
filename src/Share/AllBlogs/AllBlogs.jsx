
import React, { useEffect, useState } from 'react';
import ShowAllBlogs from './ShowAllBlogs';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import Loading from '../Loading/Loading';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://openjournal-server.vercel.app/blogs?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })
    }, [search])

    if (loading) return <Loading></Loading>

    return (
        <div className='pb-16 pt-10'>
            {/* --- Updated Header Section Start --- */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-center mt-16 md:mt-20 lg:mt-24 mb-12 px-4'
            >
                <p className='font-bold tracking-[0.3em] uppercase text-xl mb-4'>
                    Explore our repository
                </p>

                <p className='max-w-2xl mx-auto text-gray-500 text-lg lg:text-xl italic'>
                    "Knowledge is power. Dive into a world of shared insights, research, and stories from our global community of thinkers."
                </p>
            </motion.div>

            {/* search input  */}
            <div className='my-8 text-center'>
                <input type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-xl'
                    placeholder='Search . . .' />
            </div>
            <div className='container mx-auto'>
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-2 md:mx-0'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    {
                        blogs?.map(blog => <ShowAllBlogs blog={blog} key={blog._id}></ShowAllBlogs>)
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default AllBlogs;