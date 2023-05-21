
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='container mt-5 mb-5 bg-neutral text-neutral-content mx-auto'>
            <footer className="footer p-10 ">
                <div>
                    <img className='rounded w-[15%]' src="https://i.ibb.co/SN2vLXf/kl.png" alt="" />
                    <p>KidsToyZone<br />Production and Selling Kids World's Best Toys</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>Email: cse.pranto25@g,ail.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-2xl' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a className='text-2xl' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a className='text-2xl' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>

                </div>

            </footer>
            <div className="text-sm text-center pb-5">
                &copy; {new Date().getFullYear()} KidsToyZone. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
