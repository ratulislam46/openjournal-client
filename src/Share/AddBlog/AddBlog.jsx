import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter'


const AddBlog = () => {

    const { user } = use(AuthContext)

    const handleAddJob = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const postValue = Object.fromEntries(formData.entries())
        // console.log(postValue);

        axios.post('https://openjournal-server.vercel.app/blogs', postValue)
            .then(res => {
                Swal.fire({
                    title: "Added new blog!",
                    icon: "success",
                    draggable: true
                });
                console.log(res.data);
            })
            .then(error => {
                console.log('error');
            })
    }

    return (
        <div>
            <h1 className='text-5xl lg:text-6xl text-center pt-28 pb-8 uppercase font-serif'>A
                <span className='text-2xl lg:text-4xl'>
                    <Typewriter
                        words={["dd blog"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="min-h-screen w-screen p-4">
                <form onSubmit={handleAddJob}>

                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">

                        {/* Blog Title */}
                        <div className="space-y-2">
                            <label className="label">Blog Title</label>
                            <input type="text" name='title' className="input input-bordered w-full" placeholder="Blog Title" required />
                        </div>

                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input input-bordered w-full" placeholder="Image URL" required />
                        </div>

                        {/* Email - Full width */}
                        <div className="space-y-2 lg:col-span-2">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                name='email'
                                className="input input-bordered w-full"
                                placeholder="Email"
                            />
                        </div>

                        {/* Blog Category */}
                        <div className="space-y-2">
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 w-full">
                                <legend className="fieldset-legend px-2">Blog Category</legend>
                                <select name='category' className="select select-bordered w-full">
                                    <option disabled selected>Select a category</option>
                                    <option>Lifestyle</option>
                                    <option>Travel</option>
                                    <option>Programing</option>
                                    <option>Career-tips</option>
                                    <option>Health</option>
                                </select>
                            </fieldset>
                        </div>

                        {/* Empty space to balance layout */}
                        <div className="hidden lg:block"></div>

                        {/* Long Description - Full width */}
                        <div className="space-y-2 lg:col-span-2">
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 w-full">
                                <legend className="fieldset-legend px-2">Description</legend>
                                <textarea
                                    className="textarea textarea-bordered w-full min-h-[150px]"
                                    name='description'
                                    placeholder="Description ...."
                                ></textarea>
                            </fieldset>
                        </div>

                        {/* Short Description - Full width */}
                        <div className="space-y-2 lg:col-span-2">
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 w-full">
                                <legend className="fieldset-legend px-2">Short Description</legend>
                                <textarea
                                    className="textarea textarea-bordered w-full min-h-[100px]"
                                    name='shortdescription'
                                    placeholder="Short Description ..."
                                ></textarea>
                            </fieldset>
                        </div>

                        {/* Submit Button - Full width */}
                        <div className="lg:col-span-2">
                            <button className="btn btn-primary w-full mt-2">
                                Add Blog
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;