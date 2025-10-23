import React, { useEffect, useState } from 'react';
import ShowRecentBlog from './ShowRecentBlog';
import { Typewriter } from 'react-simple-typewriter'
import Loading from '../Loading/Loading';
import { motion } from "framer-motion";

const RecentPostedBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://openjournal-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data.reverse().slice(0, 8))
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading></Loading>

    return (
        <div className='mt-10 px-2 lg:px-0'>
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>R
                <span className='text-2xl lg:text-4xl'>
                    <Typewriter
                        words={['ecently posted blogs']}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    ></Typewriter>
                </span>
            </h1>
            <div className='my-16'>
                <motion.div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    {
                        blogs?.map(blog =>
                            <ShowRecentBlog
                                key={blog._id}
                                blog={blog}
                            >
                            </ShowRecentBlog>)
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default RecentPostedBlogs;