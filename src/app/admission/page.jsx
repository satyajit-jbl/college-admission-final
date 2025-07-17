'use client'

import AllColleges from '@/components/lib/AllColleges';
import AdmissionModal from '@/components/shared/AdmissionModal';
import Link from 'next/link';
import React, { useState } from 'react';

const page = () => {
    const { allCollege, isLoading } = AllColleges();
    const [open, setOpen] = useState(false)
    const [selectedCollege, setSelectedCollege] = useState(null)

    const handleOpen = (college) => {
        setSelectedCollege(college)
        setOpen(true);
    };
    const handleClose = () => {
        setSelectedCollege(null)
        setOpen(false)
    };
    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10'>
            <h1 className='text-center italic text-2xl font-semibold my-5'>Admission</h1>
            <p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Discover top colleges that match your dreams! Explore admission dates, reviews, and campus highlights all in one place. Whether you're looking for academic excellence, vibrant student life, or affordable options — find the perfect college for your future right here. Your journey to higher education starts now!</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    allCollege?.map(college => {
                        return (
                            <div key={college._id}
                                className='border p-3 rounded-md relative'>
                                <img
                                    className='rounded-md'
                                    src={college.collegeImage}
                                    alt="college" />
                                <h2 className='text-xl mt-4 mb-8'>{college.collegeName}</h2>
                                <Link href={`college/${college._id}`}
                                    className='absolute left-2 bottom-2 btn btn-sm  border p-1 rounded-bl-md bg-gray-800 text-white dark:bg-stone-300 dark:text-gray-950'>Details</Link>
                                <button onClick={() => handleOpen(college)}
                                    className='absolute bottom-2 right-2 btn btn-sm px-2  cursor-pointer rounded-br-md bg-gray-800 text-white dark:bg-stone-300 dark:text-gray-950'>
                                    Get Admitted</button>

                            </div>
                        )
                    })
                }
            </div>
            {open && (
                <div className="modal modal-open">
                    <div className="modal-box">
                     
                     <AdmissionModal selectedCollege={selectedCollege} ></AdmissionModal>
                        <div className="modal-action">
                            <button className="btn" onClick={() => handleClose()}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </div>

    );
};

export default page;