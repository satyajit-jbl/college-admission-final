"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


const CollegeDetails = ({ college }) => {
    const { collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;
    const [detail, setDetail] = useState(false)


    return (
        <div>
            <div className="card  shadow-sm">
                <div className="relative w-full h-[400px]">
                    <Image
                        src={collegeImage}
                        alt="CollegeImage"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="card-body px-0">
                    <h2 className="card-title">
                        CollegeName:  {collegeName}

                    </h2>
                    <div className="badge badge-secondary">Admission Open : {admissionDate}</div>
                    <p>{researchHistory}</p>

                </div>


                {detail ?
                    <>
                        <div className="card-actions justify-end pr-2">
                            {events?.map((event, idx) => (<div key={idx} className="badge badge-outline">{event}</div>))}
                        </div>
                        <div className="card-actions justify-end pr-2 py-5">
                            {sports?.map((event, idx) => (<div key={idx} className="badge badge-outline bg-green-400">{event}</div>))}
                        </div>
                        <button className='btn' onClick={() => setDetail(false)}>See Less</button>
                    </>
                    :
                    <>
                        <button className='btn' onClick={() => setDetail(true)}>Details</button></>
                }




                {/* <Link className='flex items-center gap-2 btn' href={`/college/${college._id}`}>Details <FaArrowAltCircleRight /></Link> */}
            </div>
        </div>
    );
};

export default CollegeDetails;