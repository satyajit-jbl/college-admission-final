import React, { useState } from 'react';
import useAxiosPublic from '../lib/useAxiosPublic';
import useAuth from '../lib/useAuth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Rating as ReactRating } from '@smastrom/react-rating'
import { toast } from 'react-toastify';


const FeedbackModal = ({ college, setIsOpen }) => {
 const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const router = useRouter()
    const [rating, setRating] = useState(0)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
          const feedbackForm = {
            email: user?.email,
            feedback: data.feedback,
            collegeName: college.collegeName,
            collegeImage: college.collegeImage,
            collegeId: college._id,
            rating: rating
        }
        
        try {
            const res = await axiosPublic.post('/api/addFeedback', feedbackForm)
            if (res.data.insertedId) {
                toast.success(`Feedback on ${college.collegeName} posted successfully`)
                reset()
                setIsOpen(false)
                router.push('/myCollege')
            }
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <div>

            <h2 className='text-center text-2xl mb-4'><span className='italic'>feedback on</span ><br />
                {college.collegeName}</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 mt-10'>
                <div className='flex'>
                    <label htmlFor="" className='block w-20'>Rating</label>
                    <ReactRating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                </div>
                {/* 1 row */}
                <div className=' mb-2 flex items-center'>

                    <label htmlFor="" className='block w-20'>Feedback</label>
                    <input
                        // defaultValue={user?.displayName}
                        className='input flex-1'
                        {...register('feedback', { required: true })}
                        type="text"
                        placeholder='Enter your feedback ...' />
                </div>

               <div className='flex justify-end mt-10'>
                 <button className='btn' type='submit'>Submit Feedback</button>
               </div>
            </form>

        </div>
    );
};

export default FeedbackModal;