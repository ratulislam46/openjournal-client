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
        <div className="min-h-screen bg-base-100 py-12">
            <h1 className="text-3xl md:text-5xl text-center mb-10 uppercase font-serif">
                Update Blog
            </h1>

            <div className="w-full max-w-3xl mx-auto px-4">
                <form onSubmit={handleBlogUpdate} className="space-y-6">
                    {/* Blog Title */}
                    <div>
                        <label className="label font-semibold">Blog Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            className="input input-bordered w-full"
                            placeholder="Blog Title"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="label font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={image}
                            className="input input-bordered w-full"
                            placeholder="Image URL"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label font-semibold">Email</label>
                        <input
                            type="email"
                            defaultValue={email}
                            readOnly
                            name="email"
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    {/* Blog Category */}
                    <div>
                        <label className="label font-semibold">Blog Category</label>
                        <select
                            name="category"
                            defaultValue={category}
                            className="select select-bordered w-full"
                            required
                        >
                            <option disabled>Blog Category</option>
                            <option>Lifestyle</option>
                            <option>Travel</option>
                            <option>Programming</option>
                            <option>Career-tips</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label font-semibold">Description</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="description"
                            defaultValue={description}
                            placeholder="Description ..."
                            required
                        ></textarea>
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="label font-semibold">Short Description</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            name="shortdescription"
                            defaultValue={shortdescription}
                            placeholder="Short Description ..."
                            required
                        ></textarea>
                    </div>

                    <button className="btn btn-neutral w-full">Update Blog</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;