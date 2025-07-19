import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateBlog = () => {

    const data = useLoaderData();
    const { _id, category, description, shortdescription, title, image, email } = data;

    const handleBlogUpdate = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const image = e.target.image.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const shortdescription = e.target.shortdescription.value;

        const updateValues = { title, image, category, description, shortdescription, _id }

        axios.patch('https://openjournal-server.vercel.app/blogs', updateValues)
            .then(result => {
                console.log(result.data);
                Swal.fire({
                    title: "update successfully!",
                    icon: "success",
                    draggable: true
                });
            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>Add blog</h1>
            <div className='w-11/12 mx-auto flex justify-center mb-8'>
                <form onSubmit={handleBlogUpdate}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        {/* blog title  */}
                        <label className="label">Blog Title</label>
                        <input type="text" name='title' defaultValue={title} className="input" placeholder="Blog Title" />

                        {/* image url  */}
                        <label className="label">Image URL</label>
                        <input type="text" name='image' defaultValue={image} className="input" placeholder="Image URL" />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" defaultValue={email} readOnly name='email' className="input" placeholder="Email" />

                        {/* blog category  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Blog Category</legend>
                            <select name='category' defaultValue={category} className="select">
                                <option disabled={true}>Blog Category</option>
                                <option>Lifestyle</option>
                                <option>Travel</option>
                                <option>Programing</option>
                                <option>career-tips</option>
                            </select>
                        </fieldset>

                        {/* long discription  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea className="textarea" name='description' defaultValue={description} placeholder="Description ...."></textarea>
                        </fieldset>

                        {/* short discription  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Short Description</legend>
                            <textarea className="textarea" name='shortdescription' defaultValue={shortdescription} placeholder="Short Description ..."></textarea>
                        </fieldset>

                        <button className="btn btn-neutral mt-4">Add Blog</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;