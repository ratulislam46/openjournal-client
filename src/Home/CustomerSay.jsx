import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from "framer-motion";

const customers = [
    {
        id: 1,
        name: "Midul Islam Rigan",
        post: "Sr. Doctor",
        comment: "This product completely changed the way we work. Highly recommended!",
        image: "https://i.postimg.cc/Wz5g0zc6/FB-IMG-1593317943446.jpg"
    },
    {
        id: 2,
        name: "Ratul Islam",
        post: "Software Engineer",
        comment: "Very intuitive and easy to use. Customer support was excellent.",
        image: "https://i.postimg.cc/NFD7bbmX/IMG-20230112-WA0006-01.jpg"
    },
    {
        id: 3,
        name: "Sadhin Khan",
        post: "Project Coordinator",
        comment: "We saved a lot of time after using this service. Great value!",
        image: "https://i.postimg.cc/s2WLKdXZ/IMG-20211216-WA0076-01.jpg"
    },
    {
        id: 4,
        name: "Siam Ahmed",
        post: "UI/UX Designer",
        comment: "The design and functionality exceeded my expectations. Great work!",
        image: "https://i.postimg.cc/vT4HSZ6v/IMG-20210813-WA0048-02.jpg"
    },
    {
        id: 5,
        name: "Syed Zakaria",
        post: "Operations Head",
        comment: "Smooth experience from start to finish. Would definitely use again.",
        image: "https://i.postimg.cc/d3gtMc2c/IMG20220611175555-01.jpg"
    }
];

const CustomerSay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = (currentIndex - 1 + customers.length) % customers.length;
    const nextIndex = (currentIndex + 1) % customers.length;

    const handlePrevious = () => setCurrentIndex(prevIndex);
    const handleNext = () => setCurrentIndex(nextIndex);

    const renderCard = (customer, type, isHiddenOnMobile = false) => {
        const isCenter = type === 'center';

        return (
            <motion.div
                key={customer.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.9,
                    filter: isCenter ? "blur(0px)" : "blur(2px)"
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`relative bg-white p-8 shadow-xl border border-gray-100 w-full flex flex-col items-center text-center ${isHiddenOnMobile ? 'hidden md:flex' : 'flex'}`}
            >
                {/* Quote Icon */}
                <div className="absolute -top-5 bg-primary p-4 rounded-full shadow-lg text-white">
                    <FaQuoteLeft />
                </div>

                <div className="mt-6 flex-grow">
                    <p className="text-gray-600 italic text-lg leading-relaxed">
                        “{customer.comment}”
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-dashed border-gray-200 my-6"></div>

                {/* Bottom Profile Section */}
                <div className="flex items-center gap-4 w-full justify-start pl-4">
                    <img
                        src={customer.image}
                        alt={customer.name}
                        className="w-14 h-14 rounded-2xl border-2 border-primary object-cover shadow-md"
                    />
                    <div className="text-left">
                        <h2 className="font-bold text-gray-800 text-lg">{customer.name}</h2>
                        <p className="text-sm font-medium tracking-wide uppercase">{customer.post}</p>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="py-20 px-4 lg:px-2 flex flex-col items-center overflow-hidden">

            {/* Heading Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                    W<span className='text-2xl lg:text-4xl uppercase tracking-tighter'>
                        <Typewriter
                            words={["hat our customers are saying"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                        />
                    </span>
                </h2>
                <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="max-w-2xl text-gray-500 text-lg">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment and strengthen your body with ease!
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative flex items-center justify-center gap-6 w-full mb-12 min-h-[450px]">
                <AnimatePresence mode='wait'>
                    {/* Side Card (Left) */}
                    {renderCard(customers[prevIndex], 'side', true)}

                    {/* Center Card */}
                    {renderCard(customers[currentIndex], 'center')}

                    {/* Side Card (Right) */}
                    {renderCard(customers[nextIndex], 'side', true)}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-6">
                <motion.button
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-lg"
                    onClick={handlePrevious}
                >
                    <FaArrowLeft size={20} />
                </motion.button>

                <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    onClick={handleNext}
                >
                    <FaArrowRight size={20} />
                </motion.button>
            </div>
        </section>
    );
};

export default CustomerSay;