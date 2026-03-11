import { FaBookOpen, FaGlobe, FaUsers, FaFileAlt } from "react-icons/fa";
import banner from "../assets/image/banner.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  // এনিমেশন ভেরিয়েন্ট
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="relative h-screen min-h-[600px] mt-20 w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* overlay  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-white"
        >
          {/* Animated Icon */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-6 text-5xl text-primary"
          >
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <FaBookOpen />
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Open <span className="text-primary">Journal</span> Platform
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering researchers to share knowledge. Discover peer-reviewed journals, 
            publish your insights, and join a global academic community.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              to="allBlogs"
              className="px-8 py-4 bg-primary hover:bg-primary/80 transition-all duration-300 rounded-full text-white font-bold shadow-lg shadow-primary/30"
            >
              Explore Blogs
            </Link>
            {/* <Link
              to="publish"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-300 rounded-full text-white font-bold"
            >
              Publish Journal
            </Link> */}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-4"
          >
            <div className="flex flex-col items-center">
              <FaGlobe className="text-xl mb-2 text-primary" />
              <span className="text-xl font-bold italic">50k+</span>
              <p className="text-xs uppercase tracking-widest text-gray-400">Readers</p>
            </div>
            <div className="flex flex-col items-center border-x border-white/10 px-4">
              <FaFileAlt className="text-xl mb-2 text-primary" />
              <span className="text-xl font-bold">1200+</span>
              <p className="text-xs uppercase tracking-widest text-gray-400">Journals</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-xl mb-2 text-primary" />
              <span className="text-xl font-bold">800+</span>
              <p className="text-xs uppercase tracking-widest text-gray-400">Authors</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom subtle gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Banner;