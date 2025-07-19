import React, { useEffect, useState } from 'react';
import ShowRecentBlog from './ShowRecentBlog';

const RecentPostedBlogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://openjournal-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data.reverse().slice(0, 6))
            })
    }, [])

    return (
        <div className='py-16'>
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>Recently posted blogs</h1>
            <div className='w-11/12 mx-auto my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        blogs?.map(blog => <ShowRecentBlog blog={blog} key={blog._id} ></ShowRecentBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentPostedBlogs;