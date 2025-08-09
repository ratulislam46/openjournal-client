import React from 'react';
import Marquee from "react-fast-marquee";

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
            <section className="pt-16 px-4 md:px-10">
                <div className="text-center mb-10">
                    <h2 className="text-5xl lg:text-6xl font-serif text-center mb-12">
                        We've logs in different categories.
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