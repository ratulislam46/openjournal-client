import React from 'react';
import Banner from './Banner';
import NewLetter from './NewLetter';
import RecentPostedBlogs from '../Share/RecentPostedBlogs/RecentPostedBlogs';
import Talk from '../Extra/Talk/Talk';
import Text from './Text';
import Agency from '../Extra/Agency/Agency';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <section className='mt-2'>
                <Banner></Banner>
            </section>
            <section className='bg-[#eafaf1]'>
                <RecentPostedBlogs></RecentPostedBlogs>
            </section>
            <section>
                <Agency></Agency>
            </section>
            <section>
                <Text></Text>
            </section>
            <section>
                <Talk></Talk>
            </section>
            <section>
                <NewLetter></NewLetter>
            </section>
        </div>
    );
};

export default Home;