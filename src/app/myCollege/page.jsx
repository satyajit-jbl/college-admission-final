'use client'

import TableData from '@/components/lib/TableData';
import useAuth from '@/components/lib/useAuth';
import useAxiosPublic from '@/components/lib/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: myCollege = [], isLoading, error } = useQuery({
        queryKey: ['myCollege', user?.email],
        enabled: !!user?.email, 
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/myCollege/${user.email}`);
            return res.data;
        },
    });

    //  user not yet available
    if (!user) {
        return (
            <div className='min-h-screen flex items-center justify-center text-center'>
                <h3>Please log in to check your submission details.</h3>
            </div>
        );
    }

    //  request is loading
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen space-x-2">
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    // ✅ request failed
    if (error) {
        return (
            <div className="text-center text-red-500 mt-10">
                Something went wrong while loading your colleges.
            </div>
        );
    }

    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10'>
            <h1 className='text-center italic text-2xl font-semibold my-5'>My Submissions</h1>
            <TableData myCollege={myCollege} isLoading={isLoading} />
        </div>
    );
};

export default Page;
