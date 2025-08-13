import React from 'react';
import toast from 'react-hot-toast';
import { Typewriter } from 'react-simple-typewriter'


const NewLetter = () => {

    const handleNewsLetter = (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing to our newsletter')
        e.target.reset()
    }

    return (
        <div className='py-20 pt-10'>
            <div data-aos="zoom-in-up" className='w-11/12 mx-auto'>
                <h1 className='text-5xl lg:text-6xl font-serif uppercase text-center'>N
                    <span className='text-2xl lg:text-4xl'>
                        <Typewriter
                            words={["ews letter"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <form onSubmit={handleNewsLetter} className='mt-16'>
                    <input type="email" className='input w-[67%] py-8' placeholder='Enter Your Email' required />
                    <input type="submit" value="Submit" className='btn btn-outline btn-error pb-10 pt-6 w-[30%]' />
                </form>
            </div>
        </div>
    );
};

export default NewLetter;