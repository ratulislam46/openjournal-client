import React from 'react';
import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-10">
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 items-center '>
                <div className='mb-10'>
                    <img src={logo} alt="log" className='w-24' />
                    <p className='w-[70%]'>
                        A space for curious minds,
                        heartfelt narratives, and thought-provoking perspectives.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;