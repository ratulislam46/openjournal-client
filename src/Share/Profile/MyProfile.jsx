import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { FaUserCircle, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClock, FaIdCard } from "react-icons/fa";
import { motion } from 'framer-motion';

const MyProfile = () => {
    const { user } = use(AuthContext);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    if (!user) return <p className="text-center mt-10">No user logged in.</p>;

    return (
        <section className="min-h-screen bg-gradient-to-br from-base-100 to-base-100 py-16 px-4 mt-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                {/* Profile Header Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 rounded-3xl shadow-2xl border border-primary/10 overflow-hidden mb-8"
                >
                    {/* Decorative Top Bar */}
                    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    
                    <div className="p-8">
                        {/* Profile Header */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                            {/* Avatar */}
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-4xl font-bold uppercase shadow-xl overflow-hidden ring-4 ring-primary/20">
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
                                {/* Online Indicator */}
                                <div className="absolute bottom-2 right-2 w-5 h-5 bg-success rounded-full border-4 border-base-100"></div>
                            </motion.div>

                            {/* User Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                    {user?.displayName || "Unknown User"}
                                </h1>
                                <p className="text-base-content/60 flex items-center justify-center md:justify-start gap-2 mb-4">
                                    <FaEnvelope className="text-primary" />
                                    {user?.email || "N/A"}
                                </p>
                                
                                {/* Verification Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-primary/20">
                                    {user?.emailVerified ? (
                                        <>
                                            <FaCheckCircle className="text-success" />
                                            <span className="text-sm font-medium text-success">Verified Account</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaTimesCircle className="text-warning" />
                                            <span className="text-sm font-medium text-warning">Unverified Account</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Phone Card */}
                            <motion.div 
                                whileHover={{ y: -4 }}
                                className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                        <FaPhone className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 font-medium uppercase tracking-wider">Phone Number</p>
                                        <p className="text-base font-semibold text-base-content mt-1">{user?.phoneNumber || "Not provided"}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* UID Card */}
                            <motion.div 
                                whileHover={{ y: -4 }}
                                className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-5 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                                        <FaIdCard className="text-secondary text-xl" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs text-base-content/50 font-medium uppercase tracking-wider">User ID</p>
                                        <p className="text-sm font-semibold text-base-content mt-1 truncate">{user?.uid || "N/A"}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Account Created Card */}
                            <motion.div 
                                whileHover={{ y: -4 }}
                                className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-5 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                        <FaCalendarAlt className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 font-medium uppercase tracking-wider">Account Created</p>
                                        <p className="text-sm font-semibold text-base-content mt-1">{formatDate(user?.metadata?.creationTime || "") || "N/A"}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Last Sign-In Card */}
                            <motion.div 
                                whileHover={{ y: -4 }}
                                className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-5 border border-success/10 hover:border-success/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                                        <FaClock className="text-success text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 font-medium uppercase tracking-wider">Last Sign-In</p>
                                        <p className="text-sm font-semibold text-base-content mt-1">{formatDate(user?.metadata?.lastSignInTime || "") || "N/A"}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MyProfile;