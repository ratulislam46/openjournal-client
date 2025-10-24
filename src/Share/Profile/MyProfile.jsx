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
        <section>
            {/*  User Info Section */}
            <div className="p-6 rounded-2xl border border-primary/10 shadow-md transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto mt-24">

                {/*  Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold uppercase shadow-sm overflow-hidden">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt={user?.displayName || 'User'}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span>
                                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
                            </span>
                        )}
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-base-content">{user?.displayName || "Unknown User"}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">User Profile Information</p>
                    </div>
                </div>

                {/*  Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-400 dark:text-gray-400">
                    <p><span className="font-semibold text-base-content">Email:</span> {user?.email || "N/A"}</p>
                    <p><span className="font-semibold text-base-content">Phone:</span> {user?.phoneNumber || "N/A"}</p>
                    <p><span className="font-semibold text-base-content">Email Verified:</span> {user?.emailVerified ? " Yes" : " No"}</p>
                    <p><span className="font-semibold text-base-content">UID:</span> {user?.uid || "N/A"}</p>
                    <p><span className="font-semibold text-base-content">Account Created:</span> {formatDate(user?.metadata?.creationTime || "") || "N/A"}</p>
                    <p><span className="font-semibold text-base-content">Last Sign-In:</span> {formatDate(user?.metadata?.lastSignInTime || "") || "N/A"}</p>
                </div>

                {/* 💬 Footer */}
                {/* <div className="mt-6 text-center">
                    <button className="px-5 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition">
                        Manage Account
                    </button>
                </div> */}
            </div>

        </section>
    );
};

export default MyProfile;