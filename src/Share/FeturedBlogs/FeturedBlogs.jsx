import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { motion } from 'framer-motion';
import Loading from '../Loading/Loading';
import { Typewriter } from 'react-simple-typewriter';

const FeaturedBlogs = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://openjournal-server.vercel.app/blogs/sorted')
            .then(res => {
                setFeaturedBlogs(res.data.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);

    // DataTable এর কলাম কনফিগারেশন
    const columns = [
        {
            name: '# SL',
            selector: (row, index) => index + 1,
            sortable: true,
            width: '80px',
        },
        {
            name: 'Blog Title',
            selector: row => row.title,
            sortable: true,
            wrap: true,
            cell: row => <span className="font-bold text-gray-700">{row.title}</span>,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
            cell: row => (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {row.category}
                </span>
            ),
        },
        {
            name: 'Preview',
            cell: row => (
                <div className="py-2">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={row.image}
                        alt={row.title}
                        className="w-24 h-14 object-cover rounded-xl shadow-md border border-gray-100"
                    />
                </div>
            ),
        },
    ];

    // কাস্টম স্টাইল ফর DataTable
    const customStyles = {
        header: {
            style: {
                display: 'none',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f8fafc',
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '#e2e8f0',
            },
        },
        headCells: {
            style: {
                color: '#1e293b',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
            },
        },
        rows: {
            style: {
                minHeight: '80px',
                '&:not(:last-of-type)': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: '#f1f5f9',
                },
                '&:hover': {
                    backgroundColor: '#f1f5f9',
                    transition: '0.3s',
                },
            },
        },
    };

    if (loading) return <Loading />;

    return (
        <section className="pb-16 pt-10">
            <div className="container mx-auto px-2">
                {/* --- Header Section Start --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center mt-16 md:mt-20 lg:mt-24 mb-12 px-4'
                >
                    <p className='font-bold tracking-[0.3em] uppercase text-xl mb-4'>
                        Elite Content Hub
                    </p>

                    <p className='max-w-2xl mx-auto text-gray-500 text-lg lg:text-xl italic'>
                        "Explore our most impactful stories and research papers. This curated list represents the voices that have shaped our community's latest discussions."
                    </p>
                </motion.div>

                {/* Table Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-4 md:p-8"
                >
                    <DataTable
                        columns={columns}
                        data={featuredBlogs}
                        customStyles={customStyles}
                        responsive
                        highlightOnHover
                        noHeader
                        pagination={false}
                    />
                </motion.div>

                {/* Footer Note */}
                <p className="text-center mt-10 text-gray-400 text-sm italic">
                    * Showing the top 10 most influential blogs sorted by engagement.
                </p>
            </div>
        </section>
    );
};

export default FeaturedBlogs;