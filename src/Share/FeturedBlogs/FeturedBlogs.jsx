import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loading from '../Loading/Loading';

const FeturedBlogs = () => {

    const [feturedBlogs, setFeturedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://openjournal-server.vercel.app/blogs/sorted')
            .then(res => {
                setFeturedBlogs(res.data.slice(0, 10))
                setLoading(false)
            })
            .then(error => {
                // console.log(error);
                setLoading(false)
            })
    }, []);

    if (loading) return <Loading></Loading>

    return (
        <div className="pb-16 pt-24 min-h-screen transition-colors duration-500">
            <div className="container mx-auto p-4 rounded-xl shadow ">

                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-primary/30">
                            <tr>
                                <th className="px-4 py-2 text-left">#</th>
                                <th className="px-4 py-2 text-left">Title</th>
                                <th className="px-4 py-2 text-left">Category</th>
                                <th className="px-4 py-2 text-left">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feturedBlogs.map((blog, index) => (
                                <tr
                                    key={blog._id}
                                    className="border-b transition-colors"
                                >
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{blog.title}</td>
                                    <td className="px-4 py-2">{blog.category}</td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-40 h-20 object-cover rounded-md"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeturedBlogs;