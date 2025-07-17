// "use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { MdOutlineMenuOpen } from "react-icons/md";
// import Logo from '../lib/Logo';
// import useAuth from '../lib/useAuth';
// import { IoMoon, IoSunny } from 'react-icons/io5';

// const Navbar = () => {
//     const { user, userSignOut } = useAuth()
//     const [dark, setDark] = useState(false);
//     const darkModeHandler = () => {
//         setDark(!dark);
//         document.body.classList.toggle("dark");
//     }
//     function capitalizeFirstLetter(str) {
//         if (!str) return '';
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     const splitted = user?.email?.split('@')[0]
//     const navMenu = () => {
//         return <>
//             <li><Link href={'/'}>HOME</Link></li>
//             <li><Link href={'/colleges'}>COLLEGES</Link></li>
//             <li><Link href={'/admission'}>ADMISSION</Link></li>
//             {user && <>
//                 <li><Link href={'/myCollege'}>MY COLLEGE</Link></li>
//                 <li><Link href={'/addCollege'}>ADD COLLEGE</Link></li></>}
//         </>
//     }
//     return (
//         <>
//             <div className="navbar  shadow-sm fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-20 z-50">
//                 <div className="navbar-start">
//                     <Logo />
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navMenu()}
//                     </ul>
//                 </div>

//                 <div className="navbar-end ">
//                     <button onClick={() => darkModeHandler()} className='mr-2'>
//                         {

//                             dark && <IoSunny className="text-3xl" />
//                         }
//                         {
//                             !dark && <IoMoon className="text-3xl text-gray-800" />
//                         }
//                     </button>

//                     {user ?
//                         <button onClick={() => userSignOut()} className="btn btn-outline">LogOut <span className='hidden lg:flex'>{capitalizeFirstLetter(user?.email?.split('@')[0])}?</span></button>
//                         : <Link href={"/login"} className="btn btn-outline">LogIn</Link>}

//                 </div>


//                 <div className="dropdown dropdown-end ">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <MdOutlineMenuOpen className='text-3xl' />
//                     </div>
//                     <ul 
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content  rounded-box mt-3 w-28 p-2 shadow z-50 bg-stone-300 text-gray-800 dark:bg-black dark:text-white">
//                         {navMenu()}
//                     </ul>
//                 </div>
//             </div>

//             <div className='h-16 bg-gray-400 dark:bg-gray-950'>

//             </div>
//         </>
//     );
// };

// export default Navbar;
"use client"

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMoon, IoSunny } from "react-icons/io5";
import Logo from "../lib/Logo";
import useAuth from "../lib/useAuth";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const navMenu = () => (
    <>
      <li>
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/colleges"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Colleges
        </Link>
      </li>
      <li>
        <Link
          href="/admission"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Admission
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link
              href="/myCollege"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              My College
            </Link>
          </li>
          <li>
            <Link
              href="/addCollege"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Add College
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-md bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 shadow-sm">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="navbar-start">
              <Logo />
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal flex space-x-8 text-gray-800 dark:text-gray-200 font-semibold">
                {navMenu()}
              </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
              <button
                onClick={darkModeHandler}
                aria-label="Toggle Dark Mode"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
              >
                {dark ? <IoSunny /> : <IoMoon />}
              </button>

              {user ? (
                <button
                  onClick={userSignOut}
                  className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-md px-4 py-1 font-semibold"
                >
                  Logout{" "}
                  <span className="hidden lg:inline ml-2">
                    {capitalizeFirstLetter(user?.email?.split("@")[0])}
                  </span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-md px-4 py-1 font-semibold"
                >
                  Login
                </Link>
              )}

              {/* Mobile menu button */}
              <div className="dropdown dropdown-end lg:hidden relative">
                <label
                  tabIndex={0}
                  className="btn btn-ghost p-2 text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                >
                  <MdOutlineMenuOpen />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact mt-2 p-4 shadow bg-white dark:bg-gray-800 rounded-md w-48 text-gray-800 dark:text-gray-200 space-y-2"
                >
                  {navMenu()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div so content doesn't go under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

