import React from 'react';
import toast from 'react-hot-toast';


const NewLetter = () => {

    const handleNewsLetter = (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing to our newsletter')
        e.target.reset()
    }

    return (
        <div className='py-20 pt-10'>
            <div data-aos="zoom-in-up"
                className='w-11/12 mx-auto py-16 rounded-md bg-primary/5 px-6 lg:px-36'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-serif uppercase text-center'>
                    Subscribe Newsletter
                </h1>
                <p className='text-center mt-2 text-base-content/60 text-xs md:text-md lg:text-xl'>Join our readers’ community and never miss a new post, story, or update from Open Journal.</p>
                <form onSubmit={handleNewsLetter}
                    className='mt-6 text-center flex items-center justify-center'>
                    <input type="email" className='input py-8 bg-base-100' placeholder='Enter Your Email' required />
                    <input type="submit" value="Submit" className='pb-6 pt-5 px-4 bg-primary border rounded-br-md rounded-tr-md rounded-tl-md rounded-bl-md border-none cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default NewLetter;