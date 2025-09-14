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
            <div data-aos="zoom-in-up"
                className='w-11/12 mx-auto py-16 rounded-md bg-primary/5 px-36'>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-serif uppercase text-center'>
                    Subscribe Newsletter
                    {/* <span className='text-2xl lg:text-4xl'>
                        <Typewriter
                            words={["ews letter"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span> */}
                </h1>
                <p className='text-center mt-2 text-base-content/60 text-xs md:text-md lg:text-xl'>Join our readers’ community and never miss a new post, story, or update from Open Journal.</p>
                <form onSubmit={handleNewsLetter}
                    className='mt-6 text-center'>
                    <input type="email" className='input w-[50%] py-8 bg-base-100' placeholder='Enter Your Email' required />
                    <input type="submit" value="Submit" className='btn btn-primary pb-10 pt-6 w-[20%]' />
                </form>
            </div>
        </div>
    );
};

export default NewLetter;