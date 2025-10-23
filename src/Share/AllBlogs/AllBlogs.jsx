
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
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>A
                <span className='text-2xl lg:text-4xl'>
                    <Typewriter
                        words={["ll blogs"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

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