'use client'
import React, { useState } from 'react';
import TableRow from './TableRow';
import FeedbackModal from '../shared/FeedbackModal';



const TableData = ({ myCollege, isLoading }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [feedbackForCollege, setFeedbackForCollege] = useState(null)

    const handleFeedbackOpen = (college) => {
        setFeedbackForCollege(college)
        setIsOpen(true);
    };
    const handleFeedbackClose = () => {
        setFeedbackForCollege(null)
        setIsOpen(false)
    };


    return (
        <div className="overflow-x-auto my-12">

            <p className='text-center max-w-lg mx-auto italic mb-5'>View all your college admission applications in one place — track status, review details, and stay organized with ease.</p>
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <div className="modal-action mt-0">
                            <button className="btn btn-sm btn-error" onClick={() => handleFeedbackClose()}>
                                X
                            </button>
                        </div>
                        <FeedbackModal college={feedbackForCollege} handleFeedbackClose={handleFeedbackClose} setIsOpen={setIsOpen}></FeedbackModal>

                    </div>
                </div>
            )}



            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Name</th>
                        <th>College Name</th>
                        <th>College Banner</th>
                        <th>Course</th>
                        <th>College Details</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <div>Data is Loading</div> :
                        myCollege?.map((college, idx) => {
                            return (
                                <TableRow
                                    idx={idx}
                                    college={college}
                                    key={college._id}
                                    handleFeedback={handleFeedbackOpen}
                                    isOpen={isOpen}
                                />



                            )
                        })
                    }

                </tbody>
                {/* foot */}
                <tfoot className=''>
                    <tr className=' '> <td colSpan="7" className="text-center font-semibold py-3">Submission Details</td></tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableData;