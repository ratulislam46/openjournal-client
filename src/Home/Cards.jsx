import React from 'react';
import { FaPlane, FaCoffee, FaBriefcase } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdOutlineStyle } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter'


const Services = [
    {
        "id": 1,
        "title": "Travel",
        "details": "Explore hidden gems and unforgettable adventures. Stories from roads less traveled.",
        "icon": <FaPlane className="text-4xl text-blue-600 mb-4"></FaPlane>
    },
    {
        "id": 2,
        "title": "Lifestyle",
        "details": "Daily inspiration for mindful living. Balance, wellness, and joyful routines.",
        "icon": <MdOutlineStyle className="text-4xl text-green-600 mb-4"></MdOutlineStyle>
    },
    {
        "id": 3,
        "title": "Career",
        "details": "Growth, challenges, and success strategies. Navigate your professional journey.",
        "icon": <FaBriefcase className="text-4xl text-purple-600 mb-4"></FaBriefcase>
    },
    {
        "id": 4,
        "title": "Health",
        "details": "Fitness, nutrition, and mental wellness. Your guide to a healthier life.",
        "icon": <MdOutlineHealthAndSafety className="text-4xl text-yellow-600 mb-4"></MdOutlineHealthAndSafety>
    }
];


const Cards = () => {
    return (
        <section>
            <h2 className="text-5xl lg:text-6xl font-serif text-center uppercase mb-10">B
                <span className='text-2xl lg:text-4xl'>
                <Typewriter
                    words={["rowse Topics"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={100}
                    delaySpeed={1000}
                />
                </span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {Services.map(service => (
                    <div
                        data-aos="fade-up"
                        service={service}
                        key={service.id}
                        className="bg-white shadow-md rounded-2xl p-6  hover:shadow-xl"
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Cards;