import { useState, useEffect } from "react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            src: "https://i.postimg.cc/9XyJFdzM/Blue-Nature-Camping-Blog-Banner.png",
            alt: "Image 1",
        },
        {
            src: "https://i.postimg.cc/kXWJsXwG/White-and-Green-Simple-World-Environment-Day-2025-Banner-Horizontal.png",
            alt: "Image 2",
        },
        {
            src: "https://i.postimg.cc/bvKRHT3K/Green-and-Yellow-Simple-Explore-The-World-Youtube-Thumbnail.png",
            alt: "Image 4",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + images.length) % images.length
        );
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full relative rounded-2xl mb-12 lg:mb-24 overflow-hidden">
            {/* Carousel Items */}
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={image.src}
                            className="w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[480px] rounded-2xl border-2 border-transparent"
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

            {/* Carousel Controls */}
            <div className="absolute flex justify-between lg:justify-between bottom-0 lg:bottom-auto transform lg:-translate-y-1/2 left-0 right-0 lg:left-5 lg:right-5 lg:top-1/2 z-10">
                <button
                    onClick={prevSlide}
                    className="btn bg-transparent border-[3px] flex items-center text-xl text-white font-bold rounded-none lg:btn-circle"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="btn bg-transparent border-[3px] flex items-center text-xl text-white font-bold rounded-none lg:btn-circle"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Banner;