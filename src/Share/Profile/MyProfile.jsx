import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
    const { user } = use(AuthContext);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString(); // e.g. "10/23/2025, 5:13:11 PM"
    }

    if (!user) return <p className="text-center mt-10">No user logged in.</p>;

    return (
        <div className="container mx-auto p-4 mt-24 ">
            <div className="max-w-md mx-auto shadow-lg rounded-xl p-6 bg-base-100 border border-gray-200 hover:shadow-xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                        />
                    ) : (
                        <FaUserCircle size={96} className="text-primary" />
                    )}
                </div>

                {/* User Info */}
                <div className="space-y-3">
                    {/* Name */}
                    <p><span className="font-semibold ">Name:</span> {user?.displayName || 'N/A'}</p>
                    {/* Email */}
                    <p><span className="font-semibold">Email:</span> {user?.email || 'N/A'}</p>
                    {/* Phone */}
                    <p><span className="font-semibold">Phone:</span> {user?.phoneNumber || 'N/A'}</p>
                    {/* Email Verified */}
                    <p><span className="font-semibold">Email Verified:</span> {user?.emailVerified ? 'Yes' : 'No'}</p>
                    {/* UID */}
                    <p><span className="font-semibold">UID:</span> {user?.uid || 'N/A'}</p>

                    {/* Metadata */}
                    <p>
                        <span className="font-semibold">Account Created:</span> {formatDate(user?.metadata?.creationTime || '') || 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold">Last Sign-In:</span> {formatDate(user?.metadata?.lastSignInTime || '') || 'N/A'}
                    </p>
                </div>

                {/* Optional: Update button */}
                {/* <div className="mt-6 flex justify-center">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                        Update Profile
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default MyProfile;