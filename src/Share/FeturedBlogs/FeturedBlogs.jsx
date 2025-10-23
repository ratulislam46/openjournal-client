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
                // console.log(res.data);
                setFeturedBlogs(res.data.slice(0, 10))
                setLoading(false)
            })
            .then(error => {
                // console.log(error);
                setLoading(false)
            })
    }, []);

    const tableData = [
        {
            name: 'Title',
            selector: row => row.title
        },
        {
            name: 'Category',
            selector: row => row.category
        },
        {
            name: 'Image',
            cell: row => <img src={row.image} className='rounded-md w-46 h-20 py-1' alt={row.title} />,
            ignoreRowClick: true,
            button: `true`
        }
    ];

    if (loading) return <Loading></Loading>

    return (
        <div className='pb-16 pt-24'>
            <div className='container mx-auto'>
                <DataTable
                    columns={tableData}
                    data={feturedBlogs}
                    highlightOnHover
                    striped>
                </DataTable>
            </div>
        </div>
    );
};

export default FeturedBlogs;