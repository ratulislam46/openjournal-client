import React from 'react';

const Text = () => {
    return (
        <div>
            <div className=''>
                <div>
                    <marquee className='bg-[#f9e79f] py-2 uppercase font-bold text-3xl  font-serif' behavior="" scrollamount="10" direction="right"><i>🚀 Welcome to our Open Journal - Learn, Build, and Grow with Us!</i></marquee>
                </div>
                <div>
                    <marquee className='bg-[#1abc9c] py-2 uppercase font-bold text-3xl font-serif' behavior="" scrollamount="10" direction="left"><i>🔥 Check out our latest articles on Programing, Travel, Health and Career.</i></marquee>
                </div>
                <div>
                    <marquee className='bg-orange-400 py-2 uppercase  font-bold text-3xl font-serif' behavior="" scrollamount="20" direction="right"><i>💡 Boost your coding skills with our step-by-step tutorials and tips.</i></marquee>
                </div>
                <div>
                    <marquee className='bg-[#85c1e9] py-2 uppercase  font-bold text-3xl font-serif' behavior="" scrollamount="15" direction="left"><i>📢 New Blog Post Every Week – Stay Updated and Keep Learning!</i></marquee>
                </div>
            </div>
        </div>
    );
};

export default Text;