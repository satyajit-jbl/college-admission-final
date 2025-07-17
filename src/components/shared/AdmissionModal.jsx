import React from 'react';
import useAuth from '../lib/useAuth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../lib/useAxiosPublic';
import { toast } from 'react-toastify';

const AdmissionModal = ({ selectedCollege}) => {

 const axiosPublic=useAxiosPublic()
    const { user } = useAuth()
    const router = useRouter()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {   
         const submissionForm = {
                name: data.name,
                course: data.course,
                email: data?.email,
                phone: data.phone,
                date_of_birth: data.date_of_birth,             
                collegeName: selectedCollege.collegeName,
                collegeImage: selectedCollege.collegeImage,
                collegeId: selectedCollege._id
            }
        try {      
               const res = await axiosPublic.post('/api/submissionForm', submissionForm)
                   if (res.data.insertedId) {
                toast.success('Your form is submitted')
                reset()
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
      <div>

<h2 className='text-center text-2xl mb-4'>Submission Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* 1 row */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block'>Name</label>
                                    <input
                                        defaultValue={user?.displayName}
                                        className='input'
                                        {...register('name', { required: true })}
                                        type="text"
                                        placeholder='Enter your name' />
                                </div>
                                <div>
                                    <label htmlFor="" className='block'>course</label>
                                    <input
                                        className='input'
                                        {...register('course', { required: true })}
                                        type="text"
                                        placeholder='Enter your course' />
                                </div>
                            </div>
                            {/* second row */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block'>Email</label>
                                    <input
                                        className='input'
                                        defaultValue={user?.email}
                                        {...register('email', { required: true })}
                                        type="email"
                                        placeholder='Enter your email' />
                                </div>
                                <div>
                                    <label htmlFor="" className='block'>Phone</label>
                                    <input
                                        className='input'
                                        {...register('phone', { required: true })}
                                        type="phone"
                                        placeholder='Enter your phone' />
                                </div>
                            </div>
                            {/* row 3 */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block'>Date of birth</label>
                                    <input
                                        className='input'
                                        {...register('date_of_birth', { required: true })}
                                        type="date"
                                        placeholder='Enter your phone' />
                                </div>
                                
                            </div>
                            <div className='mt-4'>
                                <button
                                    className='w-full'
                                    type='submit'
                                   >
                                    Submit
                                </button>
                            </div>
                        </form>


      </div>
    );
};

export default AdmissionModal;