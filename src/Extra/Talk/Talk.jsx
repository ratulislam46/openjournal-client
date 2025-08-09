import React from 'react';
import { Link } from 'react-router';

const Talk = () => {
    return (
        <div>
            <div className='px-2 lg:px-0'>
                <div className='lg:flex justify-between items-center my-24'>
                    <div data-aos="fade-right" className=' space-y-5'>
                        <h3 className='text-xl text-amber-500 font-semibold'>Talk to support</h3>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold -mt-4 '>Frequently asked questiions</h1>
                        <p className='text-gray-500'>Find answers to your questions instantly. Need more guidance? Dive into our extensive documentation for all your queries.</p>
                        <Link to='/'><button className='btn bg-amber-400 px-6 md:px-8 lg:px-10 p rounded'>Contact Our Team</button></Link>
                    </div>

                    <div data-aos="fade-left" className='mt-12 lg:mt-0'>
                        <div className="collapse collapse-plus bg-white border border-base-300">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-semibold">Why is traveling important?</div>
                            <div className="collapse-content text-sm text-gray-500">It helps people explore new cultures, relax, and gain new experiences.</div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-base-300 mt-3">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">What is the use of functions?</div>
                            <div className="collapse-content text-sm text-gray-500"> Functions help to reuse code and make the program organized and efficient.</div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-base-300 mt-3">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Why is regular exercise important?</div>
                            <div className="collapse-content text-sm text-gray-500">It improves heart health, boosts mood, and keeps the body fit.</div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-base-300 mt-3">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Why are soft skills important in a job?</div>
                            <div className="collapse-content text-sm text-gray-500">Soft skills like communication and teamwork help you work better with others.</div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-base-300 mt-3">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">What is a variable in programming?</div>
                            <div className="collapse-content text-sm text-gray-500">A variable is a container that stores data values.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Talk;