import { FaBookOpen } from "react-icons/fa";
import banner from "../assets/image/banner.jpg"
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">

          <div className="flex justify-center mb-4 text-4xl">
            <FaBookOpen />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Open Journal Platform
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Discover research, publish your ideas, and explore a world of
            academic knowledge through our modern open journal platform.
          </p>

          <Link to='allBlogs' className="px-6 py-3 bg-primary/90 hover:bg-primary transition rounded-lg text-white font-semibold">
            Explore Blogs
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;
