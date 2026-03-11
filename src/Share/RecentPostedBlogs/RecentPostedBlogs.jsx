import React, { useEffect, useState } from 'react';
import ShowRecentBlog from './ShowRecentBlog';
import { Typewriter } from 'react-simple-typewriter'
import Loading from '../Loading/Loading';
import { motion } from "framer-motion";

const RecentPostedBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://openjournal-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data.reverse().slice(0, 8));
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <section className='mt-20'>
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className='text-4xl lg:text-6xl uppercase font-bold text-gray-800'>
                    R
                    <span className='text-2xl lg:text-4xl font-semibold'>
                        <Typewriter
                            words={['ecently posted blogs', 'ead latest research']}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={80}
                            delaySpeed={1500}
                        />
                    </span>
                </h1>
                <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full opacity-30"></div>
            </div>

            {/* Grid Container */}
            <motion.div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                }}
            >
                {blogs?.map(blog => (
                    <ShowRecentBlog key={blog._id} blog={blog} />
                ))}
            </motion.div>
        </section>
    );
};

export default RecentPostedBlogs;