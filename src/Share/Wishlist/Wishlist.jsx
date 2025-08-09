import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import ShowWishlist from './ShowWishlist';

const Wishlist = () => {

    const { user } = use(AuthContext)
    const initialBlogs = useLoaderData();
    // console.log(initialBlogs);
    const [wishlists, setWishlists] = useState(initialBlogs)

    useEffect(() => {
        const remainingBlogs = wishlists.filter(myWishlist => myWishlist.userEmail === user.email);
        // console.log(remainingBlogs);
        setWishlists(remainingBlogs)
    }, [])

    console.log(initialBlogs);

    return (
        <div className='mb-24 pt-12'>

            <div className='grid grid-cols-1 gap-6 my-16'>
                {
                    wishlists?.map(wishlist => <ShowWishlist
                        key={wishlist._id}
                        wishlists={wishlists}
                        setWishlists={setWishlists}
                        wishlist={wishlist}></ShowWishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;