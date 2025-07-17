'use client'

import React from 'react';
import Marquee from 'react-fast-marquee';
import useAuth from '../lib/useAuth';
import useAxiosPublic from '../lib/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Feedback = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: feedbacks = [], isLoading, error } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/allFeedBacks`);
            return res.data;
        },
    });


    if (!feedbacks) {
        return (
            <div className="flex justify-center items-center min-h-screen space-x-2">
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-md"></span>
            </div>
        )
    }

    return (
        <div>
            <Marquee autoFill={true} pauseOnHover={true}>
                {feedbacks?.map((feedback) =>
                    <div key={feedback._id} className='relative min-h-64 py-5 w-[350px] bg-center bg-cover rounded-3xl mr-20 text-black dark:text-white' style={{ backgroundImage: `url(${feedback.collegeImage})` }}
                    >
                        <div className="absolute inset-0 bg-gray-400 dark:bg-gray-800 opacity-80 z-0 rounded-3xl"></div>
                        <div className='z-10 relative min-h-64 flex flex-col justify-between'>
                            
                            <div className='flex flex-col items-center justify-center flex-1'>
                                <FaQuoteLeft className='my-5 ' />
                                <Rating style={{ maxWidth: 100 }} value={feedback.rating} readOnly />
                                <p className='text-center italic font-semibold '> {feedback.feedback}</p>
                                <FaQuoteRight className='my-5 ' />
                            </div>


                           <div className=' '>
                            <hr/>
                             <h2 className='text-center font-semibold'>{feedback.collegeName}</h2>
                            <h4 className='text-center italic'>Feedback from {feedback.displayName || feedback.email}</h4>
                           </div>
                        </div>
                    </div>)
                }
            </Marquee>
        </div>
    );
};

export default Feedback;