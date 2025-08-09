import React from 'react';
import Banner from './Banner';
import NewLetter from './NewLetter';
import RecentPostedBlogs from '../Share/RecentPostedBlogs/RecentPostedBlogs';
import Talk from '../Extra/Talk/Talk';
import Text from './Text';
import Agency from '../Extra/Agency/Agency';
import CustomerSay from './CustomerSay';
import Category from './Category';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-20'>
                <Banner></Banner>
            </section>
            <section>
                <RecentPostedBlogs></RecentPostedBlogs>
            </section>
            <section>
                <Agency></Agency>
            </section>
            {/* <section>
                <Text></Text>
            </section> */}
            <section>
                <Category></Category>
            </section>
            <section>
                <Talk></Talk>
            </section>
            <section>
                <CustomerSay></CustomerSay>
            </section>
            <section>
                <NewLetter></NewLetter>
            </section>
        </div>
    );
};

export default Home;