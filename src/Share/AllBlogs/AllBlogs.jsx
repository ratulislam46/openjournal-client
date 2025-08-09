
import React, { useEffect, useState } from 'react';
import ShowAllBlogs from './ShowAllBlogs';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://openjournal-server.vercel.app/blogs?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [search])

    // console.log(search);

    return (
        <div className='pb-16 pt-20'>
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>All blogs</h1>

            {/* search input  */}
            <div className='my-8 text-center'>
                <input type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-xl'
                    placeholder='Search . . .' />
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {
                        blogs?.map(blog => <ShowAllBlogs blog={blog} key={blog._id}></ShowAllBlogs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;