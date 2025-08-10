import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import ShowWishlist from './ShowWishlist';
import Loading from '../Loading/Loading';

const Wishlist = () => {

    const { user } = useContext(AuthContext);
    const initialBlogs = useLoaderData() || [];
    const [wishlists, setWishlists] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (Array.isArray(initialBlogs) && user?.email) {
            const remainingBlogs = initialBlogs.filter(myWishlist => myWishlist.userEmail === user.email);
            setWishlists(remainingBlogs);
        }
        setLoading(false);
    }, [initialBlogs, user?.email]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="pb-24 pt-12">
            <div className="grid grid-cols-1 gap-6 my-16">
                {Array.isArray(wishlists) && wishlists.map(wishlist => (
                    <ShowWishlist
                        key={wishlist._id}
                        wishlists={wishlists}
                        setWishlists={setWishlists}
                        wishlist={wishlist}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;