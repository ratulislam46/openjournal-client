import React from 'react';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";


const NewLetter = () => {

    const handleNewsLetter = (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing to our newsletter')
        e.target.reset()
    }

    return (
        <motion.div
            className="py-20 pt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // <--- animation only once
            transition={{ duration: 0.8 }}
        >
            <div className="py-16 rounded-md bg-primary/5 px-6 lg:px-36">
                <motion.h1
                    className="text-xl md:text-3xl lg:text-5xl font-serif uppercase text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Subscribe Newsletter
                </motion.h1>
                <motion.p
                    className="text-center mt-2 text-base-content/60 text-xs md:text-md lg:text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Join our readers’ community and never miss a new post, story, or update from Open Journal.
                </motion.p>
                <motion.form
                    onSubmit={handleNewsLetter}
                    className="mt-6 text-center flex flex-col md:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <input
                        type="email"
                        className="input py-4 md:py-6 px-4 bg-base-100 flex-1"
                        placeholder="Enter Your Email"
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="pb-3 pt-3 px-6 bg-primary border rounded-md border-none cursor-pointer hover:bg-primary/90 transition"
                    />
                </motion.form>
            </div>
        </motion.div>
    );
};

export default NewLetter;