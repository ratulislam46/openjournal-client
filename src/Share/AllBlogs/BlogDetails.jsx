import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import { CiWarning } from "react-icons/ci";
import ShowComments from './ShowComments';
import Swal from 'sweetalert2';

const BlogDetails = () => {

    const { user } = use(AuthContext)

    const data = useLoaderData();

    const { _id, category, description, shortdescription, title, image, email } = data;


    const handleComment = (e) => {
        e.preventDefault()

        const comment = e.target.comment.value;
        axios.post('https://openjournal-server.vercel.app/comments', {
            comment,
            email: data.email,
            image: data.image,
            blogId: data._id,
            userEmail: user?.email
        })
            .then(res => {
                Swal.fire({
                    title: 'Comment submited',
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error);
            })
        e.target.reset()
    }

    const [comments, setComments] = useState([]);
    // console.log(comments);

    useEffect(() => {
        axios.get('https://openjournal-server.vercel.app/comments')
            .then(res => {
                setComments(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            <div className='w-11/12 mx-auto mt-20 mb-16'>
                <div className='bg-amber-100'>
                    <div className="lg:flex shadow-sm">
                        <div className='lg:w-[50%]'>
                            <img
                                src={image}
                                alt="Album" />
                        </div>
                        <div className="lg:w-[50%] flex flex-col justify-center px-2 py-10 lg:py-0 space-y-3">
                            <p className='text-xl text-orange-500 '>{category}</p>
                            <h2 className="card-title text-4xl">{title}</h2>
                            <p className='text-xl'>{shortdescription}</p>
                            <p className='text-gray-600'>{description}</p>
                            <div className="flex justify-between lg:pr-10 mt-8">
                                <div>
                                    <h4>Posted by: <span className='text-blue-600'>{email}</span></h4>
                                </div>
                                <div>
                                    {
                                        (user?.email === email) && <Link
                                            to={`/blog_update/${_id}`}
                                            className="btn btn-secondary"
                                        >Update</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto mt-16'>
                    {
                        email !== user?.email ?
                            <form onSubmit={handleComment}>
                                <input type="text" name="comment" className='textarea w-full py-16' placeholder='Comment . . . . . .' /> <br />
                                <input type="submit" value="Submit" className='btn btn-success mt-5 w-full' />
                            </form> :
                            <div>
                                <h2 className='text-2xl text-red-500 flex justify-center gap-2 items-center py-4 border border-amber-300 hover:bg-amber-200 rounded-md hover:border-amber-300'> <CiWarning size={28} /> Can't comment on own blog</h2>
                            </div>
                    }
                </div>
                <div>
                    <ShowComments
                        comments={comments}
                        data={data}>
                    </ShowComments>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;