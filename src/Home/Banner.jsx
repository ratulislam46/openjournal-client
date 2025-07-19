import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen" style={{
            backgroundImage:
                "url(https://i.postimg.cc/WbFZ8HkV/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg)",
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    src="https://i.postimg.cc/4Nsd72Qw/rawkkim-o-Ge-VYS5-Po-EI-unsplash.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                    animate={{ x: [0, 50, 0, -40, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold uppercase text-white">
                        Chasing Dreams, Building Futures
                    </h1>
                    <p className="py-6 text-2xl">
                        <motion.span
                            animate={{
                                color: ["#7fff33", "#333eff", "#eb18c4", "#f9072e", "#f7f7f7 "], transition: { duration: 20, repeat: Infinity }
                            }}
                        >
                            Get career tips, productivity hacks, and motivational stories to help you move forward, grow professionally, and reach your goals.
                        </motion.span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;