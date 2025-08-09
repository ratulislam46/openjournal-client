import React from 'react';
import toast from 'react-hot-toast';

const NewLetter = () => {

    const handleNewsLetter = (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing to our newsletter')
        e.target.reset()
    }

    return (
        <div className='py-20 bg-gray-100'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-5xl font-bold lg:text-7xl text-center uppercase'>News letter</h1>
                <form onSubmit={handleNewsLetter} className='mt-16'>
                    <input type="email" className='input border-white w-[67%] py-8' required />
                    <input type="submit" value="Submit" className='btn bg-secondary text-white pb-10 pt-6 w-[30%]' />
                </form>
            </div>
        </div>
    );
};

export default NewLetter;