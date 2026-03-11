import React from 'react';
import logo from '../../../public/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="space-y-6 text-center sm:text-left">
                        <img src={logo} alt="logo" className="w-32 mx-auto sm:mx-0 brightness-200" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A space for curious minds, heartfelt narratives, and thought-provoking perspectives. Join our community of readers and writers today.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-4">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, idx) => (
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    key={idx}
                                    href="#"
                                    className="p-2.5 bg-gray-800/50 hover:bg-primary hover:text-white rounded-full transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 text-center sm:text-left">
                        <h6 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Services</h6>
                        {['Branding', 'Design', 'Marketing', 'Advertisement'].map((item) => (
                            <a key={item} className="hover:text-primary transition-colors duration-300 text-sm">{item}</a>
                        ))}
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4 text-center sm:text-left">
                        <h6 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Company</h6>
                        {['About us', 'Contact', 'Jobs', 'Press kit'].map((item) => (
                            <a key={item} className="hover:text-primary transition-colors duration-300 text-sm">{item}</a>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h6 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Newsletter</h6>
                        <p className="text-sm text-gray-400">Subscribe for the latest updates and articles.</p>
                        <div className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary transition-all"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-xl text-sm transition-all shadow-lg shadow-primary/20 active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-wider">
                    <p>© 2026 Open Journal. Built with <span className="text-primary"></span> by Md Ratul Howlader.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-all">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-all">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;