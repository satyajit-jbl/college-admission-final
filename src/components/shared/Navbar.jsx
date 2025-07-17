"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMenuOpen } from "react-icons/md";
import Logo from '../lib/Logo';
import useAuth from '../lib/useAuth';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = () => {
    const { user, userSignOut } = useAuth()
    const [dark, setDark] = useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    function capitalizeFirstLetter(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const splitted = user?.email?.split('@')[0]
    const navMenu = () => {
        return <>
            <li><Link href={'/'}>HOME</Link></li>
            <li><Link href={'/colleges'}>COLLEGES</Link></li>
            <li><Link href={'/admission'}>ADMISSION</Link></li>
            {user && <>
                <li><Link href={'/myCollege'}>MY COLLEGE</Link></li>
                <li><Link href={'/addCollege'}>ADD COLLEGE</Link></li></>}
        </>
    }
    return (
        <>
            <div className="navbar  shadow-sm fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-20 z-50">
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu()}
                    </ul>
                </div>

                <div className="navbar-end ">
                    <button onClick={() => darkModeHandler()} className='mr-2'>
                        {

                            dark && <IoSunny className="text-3xl" />
                        }
                        {
                            !dark && <IoMoon className="text-3xl text-gray-800" />
                        }
                    </button>

                    {user ?
                        <button onClick={() => userSignOut()} className="btn btn-outline">LogOut <span className='hidden lg:flex'>{capitalizeFirstLetter(user?.email?.split('@')[0])}?</span></button>
                        : <Link href={"/login"} className="btn btn-outline">LogIn</Link>}

                </div>


                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdOutlineMenuOpen className='text-3xl' />
                    </div>
                    <ul 
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box mt-3 w-28 p-2 shadow z-50 bg-stone-300 text-gray-800 dark:bg-black dark:text-white">
                        {navMenu()}
                    </ul>
                </div>
            </div>

            <div className='h-16 bg-gray-400 dark:bg-gray-950'>

            </div>
        </>
    );
};

export default Navbar;