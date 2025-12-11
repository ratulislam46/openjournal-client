import React, { Suspense } from 'react';
import NewLetter from './NewLetter';
import Talk from '../Extra/Talk/Talk';
import Agency from '../Extra/Agency/Agency';
import Category from './Category';
import Cards from './Cards';
import StatsSection from './StatSection';
import Loading from '../Share/Loading/Loading.jsx';

// dynamic import for lazy loading 
const Banner = React.lazy(() => import('./Banner.jsx'));
const RecentPostedBlogs = React.lazy(() => import('../Share/RecentPostedBlogs/RecentPostedBlogs'));
const CustomerSay = React.lazy(() => import("./CustomerSay"));


const Home = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-20'>
                <Suspense fallback={<Loading />}>
                    <Banner />
                </Suspense>
            </section>
            <section>
                <Cards></Cards>
            </section>
            <section>
                <Suspense fallback={<Loading />}>
                    <RecentPostedBlogs />
                </Suspense>
            </section>
            <section className='hidden lg:block'>
                <Agency></Agency>
            </section>
            <section>
                <Category></Category>
            </section>
            <section>
                <Talk></Talk>
            </section>
            <section>
                <Suspense fallback={<Loading />}>
                    <CustomerSay />
                </Suspense>
            </section>
            <section>
                <StatsSection />
            </section>
            <section>
                <NewLetter></NewLetter>
            </section>
        </div>
    );
};

export default Home;