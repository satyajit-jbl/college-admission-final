'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import FeedbackModal from '../shared/FeedbackModal';

const TableRow = ({ idx, college,handleFeedback }) => {

  



    return (
        <>
            <tr className='text-center'>
                <th>
                    <label>
                        {idx + 1}
                    </label>
                </th>
                <th>
                    <label>
                        {college.name}
                    </label>
                </th>
                
                <td>
                    <span>{college.collegeName}</span>
                </td>
                <td>
                    <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={college.collegeImage}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                       
                    </div>
                </td>
                <td>
                   <div>
                            <div className="text-sm opacity-50">{college.course}</div>
                        </div>
                </td>
          
                <td>
                    <Link href={`/college/${college.postID}`}>
                        Details
                    </Link>

                </td>
                <td>
                    <button onClick={()=>handleFeedback(college)}>Feedback</button>
                </td>


               
            </tr>
        </>
    );
};

export default TableRow;