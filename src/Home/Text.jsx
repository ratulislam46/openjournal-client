import React from 'react';

const Text = () => {
    return (
        <div>
            <div className='bg-red-50 py-8 px-1'>
                <div>
                    <marquee className=' py-2 uppercase font-bold text-3xl   ' behavior="" scrollamount="10" direction="right"><i> Welcome to our Open Journal - Learn, Build, and Grow with Us!</i></marquee>
                </div>
                <div>
                    <marquee className=' py-2 uppercase font-bold text-3xl  ' behavior="" scrollamount="10" direction="left"><i> Check out our latest articles on Programing, Travel, Health and Career.</i></marquee>
                </div>
                <div>
                    <marquee className=' py-2 uppercase font-bold text-3xl  ' behavior="" scrollamount="10" direction="right"><i> Boost your coding skills with our step-by-step tutorials and tips.</i></marquee>
                </div>
                <div>
                    <marquee className=' py-2 uppercase font-bold text-3xl  ' behavior="" scrollamount="10" direction="left"><i> New Blog Post Every Week – Stay Updated and Keep Learning!</i></marquee>
                </div>
            </div>
        </div>
    );
};

export default Text;