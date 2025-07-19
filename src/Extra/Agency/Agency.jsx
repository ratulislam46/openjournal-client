import React from 'react';
import Travel from '../../assets/image/view.jpg';
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

const Agency = () => {
    return (
        <div className='bg-[#ebf5fb]'>
            <div className='w-11/12 mx-auto py-16 :g:py-32'>
                <div className='lg:flex items-center gap-1 px-6'>
                    <div className=' lg:w-[40%]'>
                        <img src={Travel} alt="" className='w-96 h-[500px] rounded-3xl' />
                    </div>
                    <div className=' lg:w-[60%] space-y-6 mt-18 lg:mt-0'>
                        <p className='text-blue-800'>
                            About Travil Agency
                        </p>
                        <h1 className='text-3xl lg:text-5xl font-bold'>
                            Our Journey Memorable Adventures Worldwide
                        </h1>
                        <h4 className='text-gray-500'>
                            We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more than buying individual tickets for your tour package system.
                        </h4>
                        <h2 className='font-semibold text-xl  border-l-4 border-blue-700 py-8 px-6 bg-amber-300'>
                            “Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida”
                        </h2>
                        <div>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-blue-400' /> Trusted, Local Travel Experts</p>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-blue-400' /> Real-Time Itinerary Updates</p>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-blue-400' /> Flexible, Hassle-Free Bookings</p>
                        </div>
                        <div >
                            <button className='flex items-center gap-4 px-6 text-white font-semibold text-xl py-4 rounded-3xl border-3 border-indigo-300 bg-indigo-400 hover:border-amber-200 hover:bg-amber-300'>More About Travil <span><FaArrowRight /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;