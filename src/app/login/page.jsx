"use client"


import useAuth from '@/components/lib/useAuth';
import SocialLogin from '@/components/shared/SocialLogin';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { RiLoginCircleLine } from 'react-icons/ri';

const LogInPage = () => {
  const { loginUser, setLoading, setUser} = useAuth()
    const [visible, setVisible] = useState(false)
    const navigate = useRouter()
    const location = usePathname()
 
     const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedinUser = userCredential.user;
                setUser(loggedinUser);
                setLoading(false)
                navigate.push("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error( errorCode, errorMessage,"LOGIN ERROR! ")
            });
    }

    return (

            <div className="hero min-h-96 w-11/12 max-w-3xl mx-auto py-5 md:py-10 ">

                <div className="hero-content isolation-auto flex-col lg:flex-row gap-10 lg:gap-20 w-10/12 lg:w-11/12 mx-auto">
                   
                    <div className="card w-full shadow-2xl lg:flex-1 relative p-4">
                        <form className="card-body p-0" onSubmit={handleSignIn}>
                            <h1 className="text-center font-extrabold text-xl py-3 bg-gray-400 text-gray-700 rounded-xl flex items-center justify-center gap-3">Login to
                                                        <span className="italic">Admission Aid</span></h1>
                            <div className="form-control flex justify-between">
                                <label className="label ">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700 bg-gray-100" required />
                            </div>
                            <div className="form-control flex justify-between">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700 bg-gray-100" required />
                                
                            </div>
                            {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label> */}
                            <p className='flex gap-1 items-center justify-end italic text-gray-700 dark:text-white '>not registered? pls  <Link className='text-blue-700 flex  items-center font-semibold' href={'/register'}><RiLoginCircleLine/>SignUp</Link></p>

                            <div className="form-control mt-6 ">
                                <button className="btn bg-gray-400 w-full rounded-lg border-none">Login</button>
                            </div>
                        </form>
                        <button className="absolute right-8 top-31 py-2" onClick={() => setVisible(!visible)}>
                            {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                        </button>
                        <div className="divider divider-accent">or</div>

                       <div className="mx-auto">
                        <SocialLogin></SocialLogin>
                       </div>
                    </div>
                </div>

            </div>
    
    );
};

export default LogInPage;