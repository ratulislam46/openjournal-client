import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Talk = () => {
    // কন্টেইনারের জন্য এনিমেশন ভেরিয়েন্ট
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // প্রতিটি চাইল্ড এলিমেন্টের জন্য এনিমেশন
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="px-4 lg:px-2 overflow-hidden">
            <motion.div 
                className="flex flex-col lg:flex-row justify-between items-start my-16 lg:my-24 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <motion.h3 
                        variants={itemVariants}
                        className="text-xl text-amber-500 font-bold uppercase tracking-wide"
                    >
                        Talk to support
                    </motion.h3>
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight"
                    >
                        Frequently asked <br /> questions
                    </motion.h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-500 text-lg max-w-lg leading-relaxed"
                    >
                        Find answers to your questions instantly. Need more guidance? 
                        Dive into our extensive documentation for all your queries.
                    </motion.p>
                    
                    <motion.div variants={itemVariants} className="pt-2">
                        <Link to='/'>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary/80 hover:bg-primary text-gray-900 font-bold py-4 px-10 rounded-2xl shadow-lg transition-colors"
                            >
                                Contact Our Team
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Accordion */}
                <motion.div 
                    className="w-full lg:w-1/2"
                    variants={itemVariants}
                >
                    <div className="space-y-4">
                        {[
                            { q: "Why is traveling important?", a: "It helps people explore new cultures, relax, and gain new experiences." },
                            { q: "What is the use of functions?", a: "Functions help to reuse code and make the program organized and efficient." },
                            { q: "Why is regular exercise important?", a: "It improves heart health, boosts mood, and keeps the body fit." },
                            { q: "Why are soft skills important in a job?", a: "Soft skills like communication and teamwork help you work better with others." },
                            { q: "What is a variable in programming?", a: "A variable is a container that stores data values." }
                        ].map((faq, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="collapse collapse-plus bg-white border border-gray-100 shadow-sm rounded-2xl"
                            >
                                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                                <div className="collapse-title text-lg font-bold text-gray-700">
                                    {faq.q}
                                </div>
                                <div className="collapse-content text-gray-500">
                                    <p>{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Talk;