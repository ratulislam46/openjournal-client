import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddBlog = () => {

    const { user } = use(AuthContext)

    const handleAddJob = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const postValue = Object.fromEntries(formData.entries())
        console.log(postValue);

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
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className='text-5xl lg:text-6xl text-center mt-16 mb-8 uppercase font-serif'>Add blog</h1>
            <div className='w-11/12 mx-auto flex justify-center mb-8'>
                <form onSubmit={handleAddJob}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        {/* blog title  */}
                        <label className="label">Blog Title</label>
                        <input type="text" name='title' className="input" placeholder="Blog Title" required />

                        {/* image url  */}
                        <label className="label">Image URL</label>
                        <input type="text" name='image' className="input" placeholder="Image URL" required />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" defaultValue={user?.email} readOnly name='email' className="input" placeholder="Email" />

                        {/* blog category  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Blog Category</legend>
                            <select name='category' defaultValue="Pick a color" className="select">
                                <option disabled={true}>Blog Category</option>
                                <option>Lifestyle</option>
                                <option>Travel</option>
                                <option>Programing</option>
                                <option>Career-tips</option>
                                <option>Health</option>
                            </select>
                        </fieldset>

                        {/* long discription  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea className="textarea" name='description' placeholder="Description ...."></textarea>
                        </fieldset>

                        {/* short discription  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Short Description</legend>
                            <textarea className="textarea" name='shortdescription' placeholder="Short Description ..."></textarea>
                        </fieldset>

                        <button className="btn btn-neutral mt-4">Add Blog</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;