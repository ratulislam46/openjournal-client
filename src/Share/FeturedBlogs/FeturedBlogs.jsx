import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

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
    ]

    return (
        <div className='py-16'>
            <div className='w-11/12 mx-auto shadow-xl'>
                <DataTable
                    columns={tableData}
                    data={feturedBlogs}
                    progressPending={loading}
                    highlightOnHover
                    striped>
                </DataTable>
            </div>
        </div>
    );
};

export default FeturedBlogs;