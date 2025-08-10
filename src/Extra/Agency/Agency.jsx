import React from 'react';
import Travel from '../../assets/image/view.jpg';
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

const Agency = () => {
    return (
        <div className='px-2 lg:px-0'>
            <div className='py-16 lg:py-24'>
                <div className='lg:flex items-center gap-1'>

                    <div data-aos="fade-right" className=' lg:w-[40%]'>
                        <img src={Travel} alt="" className='w-96 h-[500px] rounded-3xl' />
                    </div>

                    <div data-aos="fade-left" className=' lg:w-[60%] space-y-6 mt-18 lg:mt-0'>
                        <p className='text-sky-500 text-xl'>
                            About Travil Agency
                        </p>
                        <h1 className='text-3xl lg:text-5xl font-bold'>
                            Our Journey Memorable Adventures Worldwide
                        </h1>
                        <h4 className='text-base-content'>
                            We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more than buying individual tickets for your tour package system.
                        </h4>
                        <h2 className='font-semibold text-xl text-gray-700 border-l-4 border-sky-700 py-8 px-6 bg-red-100 rounded-r-lg'>
                            “Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida”
                        </h2>
                        <div>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-sky-500' /> Trusted, Local Travel Experts</p>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-sky-500' /> Real-Time Itinerary Updates</p>
                            <p className='flex gap-1 font-semibold items-center'> <GoArrowRight className='text-sky-500' /> Flexible, Hassle-Free Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;