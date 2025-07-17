"use client"

import React, { useRef } from 'react';
import useAuth from '../lib/useAuth';

const Banner = () => {

    const inputRef = useRef()
    const { setSearch, search } = useAuth()

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(inputRef.current.value)
    }
   
    return (
        <div style={{ backgroundImage: "url('/assets/banner-home.jpg')" }} className='min-h-[calc(100vh-120px)] bg-cover bg-center bg-fixed flex items-center justify-center'>
            <form className="join border-2 border-white rounded-lg p-1 ">
                <input ref={inputRef} type='text' name='collegeSearch' className="input join-item text-gray-900 bg-white" placeholder="Search by College Name" />
                <button onClick={handleSearch} type='submit' className="btn join-item bg-gray-900 text-white rounded-r-md">Search</button>
            </form>
        </div>
    );
};

export default Banner;