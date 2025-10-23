import React from 'react';
import Banner from './Banner';
import NewLetter from './NewLetter';
import RecentPostedBlogs from '../Share/RecentPostedBlogs/RecentPostedBlogs';
import Talk from '../Extra/Talk/Talk';
import Text from './Text';
import Agency from '../Extra/Agency/Agency';
import CustomerSay from './CustomerSay';
import Category from './Category';
import Cards from './Cards';
import FeaturesSection from './FeturesSection';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-20'>
                <Banner></Banner>
            </section>
            <section>
                <Cards></Cards>
            </section>
            <section>
                <RecentPostedBlogs></RecentPostedBlogs>
            </section>
            <section className='hidden lg:block'>
                <Agency></Agency>
            </section>
            {/* <section>
                <Text></Text>
            </section> */}
            <section>
                <FeaturesSection />
            </section>
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