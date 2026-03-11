import React from 'react';
import { motion } from "framer-motion";
import TravelImg from '../../assets/image/view.jpg';
import { GoArrowRight } from "react-icons/go";

const Agency = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-16 lg:py-24 px-4 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Image Section - Left Side */}
                <motion.div 
                    className="w-full lg:w-[45%] flex justify-start "
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative group">
                       
                        
                        <motion.img 
                            whileHover={{ scale: 1.02 }}
                            src={TravelImg} 
                            alt="Travel Experience" 
                            className="w-full max-w-md h-[700px] object-cover shadow-2xl cursor-pointer"
                        />
                        
                        {/* Floating Experience Badge */}
                        <motion.div 
                            className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                            initial={{ scale: 0, rotate: -10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        >
                            <p className="text-3xl font-bold text-primary">12+</p>
                            <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Section - Right Side */}
                <motion.div 
                    className="w-full lg:w-[55%] space-y-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="space-y-3">
                        <motion.p 
                            variants={itemVariants}
                            className="text-primary text-lg font-bold tracking-widest uppercase"
                        >
                            About Our Journey
                        </motion.p>
                        
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl lg:text-5xl font-extrabold text-gray-800 leading-tight"
                        >
                            Memorable Adventures <br className="hidden lg:block" /> Crafted For You
                        </motion.h2>
                    </div>

                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-500 text-lg leading-relaxed"
                    >
                        We offer carefully curated destinations and tours that capture the true essence of each location. Our attraction passes save you more than buying individual tickets, ensuring a seamless travel experience.
                    </motion.p>

                    {/* Blockquote / Highlight Section */}
                    <motion.div 
                        variants={itemVariants}
                        className="relative"
                    >
                        <p className="font-medium text-lg text-gray-700 italic border-l-4 border-primary py-6 px-8 bg-primary/5 rounded-r-2xl">
                            “Travel is the only thing you buy that makes you richer. We ensure every step of your journey is filled with joy.”
                        </p>
                    </motion.div>

                    {/* Feature List Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {[
                            "Trusted Local Experts",
                            "Real-Time Updates",
                            "Flexible Bookings",
                            "24/7 Premium Support"
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="flex items-center gap-3 group/item"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 90 }}
                                    className="p-1 bg-primary/10 rounded-full transition-colors group-hover/item:bg-primary/20"
                                >
                                    <GoArrowRight className="text-primary text-xl" />
                                </motion.div>
                                <span className="font-semibold text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Action Button */}
                    <motion.div variants={itemVariants}>
                        <motion.button 
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 flex items-center gap-2"
                        >
                            Learn More About Us <GoArrowRight />
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Agency;