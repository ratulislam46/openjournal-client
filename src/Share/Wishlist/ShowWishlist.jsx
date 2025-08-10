import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ShowWishlist = ({ wishlist, wishlists, setWishlists }) => {

    const { email, title, userEmail, image, description, shortdescription, category, id, _id } = wishlist;


    // console.log(wishlist);

    const handleRemove = (_id) => {
        console.log('remove', _id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://openjournal-server.vercel.app/wishlist/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        const remaingWishList = wishlists.filter(wish => wish._id !== _id);
                        setWishlists(remaingWishList)
                        console.log(remaingWishList);

                        console.log('after delete', data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })


            }
        });

    }


    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <ul className="list bg-base-100 rounded-box shadow-md">
                    <li className="list-row">
                        <div><img className="size-10 rounded-box" src={image} /></div>
                        <div>
                            <div className='text-2xl font-semibold'>{title}</div>
                            <div>
                                <p className="text-xs uppercase font-semibold opacity-60">{category}</p>
                                <p className="text-xs font-semibold opacity-60">{email}</p>
                            </div>
                        </div>
                        <p className="list-col-wrap text-xl">
                            {shortdescription}
                        </p>
                        <div className='flex  gap-2'>
                            <Link to={`/blog_details/${id}`} className='btn btn-info'>Details</Link>
                            <button onClick={() => handleRemove(_id)} className='btn btn-error text-white'>Remove</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ShowWishlist;