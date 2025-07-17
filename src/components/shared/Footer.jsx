// import React from 'react';
// import Logo from '../lib/Logo';
// import { FaFacebook } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io";
// import { BsTwitterX } from "react-icons/bs";

// const Footer = () => {
//     return (
//         <>
//             <footer className="footer footer-horizontal footer-center  p-10">
//                 <aside>
//                     <Logo />
//                     <p className="font-semibold">
                       
//                         Enuring Smooth Admission Procedures Since 1992
//                     </p>
            
//                 <nav>
//                     <div className="grid grid-flow-col gap-4">
//                         <a>
//                             <BsTwitterX className='text-2xl' />
//                         </a>

//                         <a>
//                             <IoLogoYoutube className='text-2xl' />
//                         </a>
//                         <a>
//                             <FaFacebook className='text-2xl' />
//                         </a>
//                     </div>
//                 </nav>
//                     </aside>
//                      <hr/>
//                 <p className='italic'>
//                     Copyright © {new Date().getFullYear()} - All right reserved by Admission Aid Ltd</p>
//             </footer>
//         </>
//     );
// };

// export default Footer;

import React from 'react';
import Logo from '../lib/Logo';
import { FaFacebook } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* Left Section: Logo + Description */}
        <div className="text-center lg:text-left">
          <Logo />
          <p className="mt-2 text-lg font-medium tracking-wide max-w-sm mx-auto lg:mx-0">
            Empowering students with smooth admission journeys since 1987.
          </p>
        </div>

        {/* Center Section: Social Links */}
        <div className="text-center">
          <p className="mb-2 font-semibold text-gray-600 dark:text-gray-300">Connect with us</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-purple-600 dark:hover:text-pink-400 transition"
            >
              <BsTwitterX />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-red-600 dark:hover:text-red-400 transition"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Section: Legal */}
        <div className="text-center lg:text-right">
          <p className="italic text-sm">
            &copy; {new Date().getFullYear()} Admission Aid Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
