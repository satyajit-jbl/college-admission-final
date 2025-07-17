import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


const CollegeCard = ({ college }) => {
    const { _id, collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;

    return (
        <div>
            <div className="card shadow-lg rounded-2xl">
                <div className=''>
                    <Image src={collegeImage} width={384} height={200} alt='CollegeImage' className='object-cover overflow-hidden rounded-t-xl' />

                </div>
                <div className="card-body px-0">
                    <h2 className="card-title">
                        {collegeName}

                    </h2>
                    <div className="badge border-0 bg-gray-800 text-white dark:bg-stone-300 dark:text-gray-950">Admission Open : {admissionDate || college.admissionStart}</div>
                    <p className='h-16'>{researchHistory}</p>
                    <div className="card-actions justify-end pr-2">
                        {events?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline">{event}</div>))}
                    </div>
                    <div className="card-actions justify-end pr-2">
                        {sports?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline ">{event}</div>))}
                    </div>
                </div>
                <Link className='flex items-center gap-2 btn' href={`/college/${college._id}`}>Details <FaArrowAltCircleRight /></Link>
            </div>
        </div>
    );
};

export default CollegeCard;