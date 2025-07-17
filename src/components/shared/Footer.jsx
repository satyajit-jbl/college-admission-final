import React from 'react';
import Logo from '../lib/Logo';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-horizontal footer-center  p-10">
                <aside>
                    <Logo />
                    <p className="font-semibold">
                       
                        Enuring Smooth Admission Procedures Since 1992
                    </p>
            
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <BsTwitterX className='text-2xl' />
                        </a>

                        <a>
                            <IoLogoYoutube className='text-2xl' />
                        </a>
                        <a>
                            <FaFacebook className='text-2xl' />
                        </a>
                    </div>
                </nav>
                    </aside>
                     <hr/>
                <p className='italic'>
                    Copyright © {new Date().getFullYear()} - All right reserved by Admission Aid Ltd</p>
            </footer>
        </>
    );
};

export default Footer;