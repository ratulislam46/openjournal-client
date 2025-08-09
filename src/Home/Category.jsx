import React from 'react';
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'

const CategoriesList = [
    { id: 1, title: "Travel" },
    { id: 2, title: "Life Style" },
    { id: 3, title: "Career" },
    { id: 4, title: "Health" },
    { id: 4, title: "Education" },
];

const Category = () => {
    return (
        <div>
            <section className="px-4 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-serif text-center uppercase mb-12">
                        W
                        <span className='text-2xl lg:text-4xl'>
                            <Typewriter
                                words={["e've logs in different categories"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={150}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                </div>

                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {CategoriesList.map((list, index) => (
                        <div key={index} className="mx-24">
                            <h2 className='font-bold text-2xl'>{list.title}</h2>
                        </div>
                    ))}
                </Marquee>
            </section>
        </div>
    );
};

export default Category;