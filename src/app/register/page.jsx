"use client"

import useAuth from '@/components/lib/useAuth';
import SocialLogin from '@/components/shared/SocialLogin';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import Link from 'next/link';
import { RiLoginCircleLine } from "react-icons/ri";

const RegisterPage = () => {
      const [visible, setVisible] = useState(false)
    const [passErr, setPassErr] = useState("")
    const { setLoading, createUser, setUser, auth, userSignOut } = useAuth()
    const navigate = useRouter()
    // const axiosPublicly = useAxiosPublic();
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;
        const name = form.name.value;

        setPassErr("")
        let regExp = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        if (!regExp.test(password)) {
            setPassErr("Password to be atleast 6 characters & atleast one Uppercase ,one special character & one digit");
            toast.error("Please check requirement above the REGISTER button")
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const newUser = userCredential.user;
                setUser(newUser);
                setLoading(false);
                //new lines 
                const userInfo = {
                    email: email,
                    name: name,
                    role: "user"
                };
                // axiosPublic.post('/users/new-user', userInfo)
                //     .then(res => {
                //         if (res.data) {
                //             updateProfile(auth.currentUser, { photoURL: photo, displayName: name })
                //                 .then(() => {
                //                     // Profile updated!
                //                     // ...
                //                 }).catch((error) => {
                //                     // An error occurred
                //                     console.log(error)
                //                 });
                //         }
                //     })
                userSignOut()
                Swal.fire({
                    title: "Registration Complete",
                    text: "LogIn to Explore",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "LogIn Now!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate.push("/login")
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setPassErr(errorCode, errorMessage)
                toast.error(`Resgistration Failed due to ${passErr}`)
            });
    }
    return (
        <div className='w-11/12 max-w-3xl mx-auto py-5 md:py-10'>
            <div className="hero  min-h-screen ">

                <div className="hero-content isolation-auto flex-col lg:flex-row-reverse gap-10 lg:gap-20 w-10/12 lg:w-11/12 mx-auto">
                   
                    {/* bg-[#6A609F] */}
                    <div className="card w-full shadow-2xl lg:flex-1   p-4">
                        <form className="card-body p-2 relative" onSubmit={handleRegister}>
                            <h1 className="text-center font-extrabold text-xl py-3 bg-gray-400 text-gray-700 rounded-xl">Sign Up</h1>
                            <div className="grid grid-cols-1 gap-3">
                                   <div className="form-control flex justify-between">
                                    <label className="label">
                                        <span className="label-text ">Name :</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-gray-700 bg-gray-100" required />
                                </div>
                                <div className="form-control flex justify-between">
                                    <label className="label">
                                        <span className="label-text ">Email :</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700 bg-gray-100" required />
                                </div>
                             
                                <div className="form-control flex justify-between">
                                    <label className="label">
                                        <span className="label-text">Password :</span>
                                    </label>
                                    <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700 bg-gray-100 " required />
                                </div>
                            

                            </div>
                            <p className="text-red-500 font-bold text-center">{passErr}</p>
                            <p className='flex gap-1 items-center justify-end italic text-gray-700 dark:text-white'>already signed up? pls  <Link className='text-blue-700 flex  items-center font-semibold' href={'/login'}><RiLoginCircleLine/>LogIn</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-gray-400 w-full rounded-lg border-none">Register</button>
                            </div>
                        </form>

                        <button className="absolute right-8 top-44 py-5" onClick={() => setVisible(!visible)}>
                            {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                        </button>

                        <div className="divider divider-accent">or</div>
                        <div className="text-center mx-auto">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;