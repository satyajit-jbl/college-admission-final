// "use client"

// import useAuth from '@/components/lib/useAuth';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

// const page = () => {
//     // const [selectedEvents, setSelectedEvents] = useState("");
//     const { loading, setLoading, user } = useAuth();
//     // const [sports, setSports] = useState("");
//     const { register,
//         formState: { error, errors },
//         handleSubmit,
//         reset } = useForm();

//     // to add image inside form
//     const image_hosting_key = process.env.NEXT_PUBLIC_ImgBbKey;
//     const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
//     const events = ["Science Fair", "Tech Talk", "Alumini Meet", "Annual Drama", "Art Exibition", "Creative Writing Workshop", "Business Summit", "StartUp Expo", "Robotics Show", "Hackathon", "Debate Championship"]

//     const sportsEvents = ["Football", "BasketBall", "Table Tennis", "Yoga", "Swimming", "Chess", "Carrom"]

//     const onSubmit = async (d) => {
//         //image upload to imgbb and then get an url
//         const imageFile = { image: d.image[0] }
//         const res = await axios.post(image_hosting_api, imageFile, {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         });

//         const collegeDetails = {
//             collegeName: d.collegeName,
//             admissionEnd: d.dateEnd,
//             admissionStart: d.dateStart,
//             events: d.events,
//             collegeImage: res.data.data.url,
//             researchHistory: d.researchHistory,
//             sports: d.sports,
//             addedBy: user?.email || "Anonymous"
//         }


//   try {

//             const res = await axios.post('/api/addCollege', collegeDetails)
            
//             if (res.data.insertedId) {
//                 toast.success('College Added Successfuly')
//                 setLoading(false)
//                 reset()
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false)
//         }
//     }
//     return (
//         <div>
//             <h2 className='text-center italic font-semibold text-2xl py-4'>Add A College</h2>
//             <form className='space-y-2 max-w-2xl mx-auto shadow-2xl p-4' onSubmit={handleSubmit(onSubmit)}>
//                 <div className='flex justify-between gap-4 items-center '>
//                     <label className='w-36'>
//                         College Name:
//                     </label>
//                     <input {...register("collegeName", { required: true })} className='input flex-1 text-gray-700 bg-gray-100' placeholder='Type College Name' />
//                      {errors.collegeName && <span className="text-red-500">This field is required</span>}
//                 </div>
//                 <div className='flex justify-between gap-4 items-center'>
//                     <label className='w-36'>
//                         Banner Image:
//                     </label>
//                     {/* <input className='input w-full max-w-xs' /> */}

//                     <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered flex-1 text-gray-700 bg-gray-100" />
//                     {errors.image && <span className="text-red-500">This field is required</span>}
//                 </div>
//                 <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
//                     <div className="form-control flex gap-4 col-span-2">
//                         <label className="label w-36">
//                             <span className="label-text dark:text-white">Start Date :</span>
//                         </label>
//                         <input type="date"   {...register("dateStart", { required: true })} className="input input-bordered flex-1 text-gray-700 bg-gray-100" required />
//                          {errors.dateStart && <span className="text-red-500">This field is required</span>}
//                     </div>
//                     <div className="form-control flex gap-4 col-span-2">
//                         <label className="label w-36">
//                             <span className="label-text dark:text-white">End Date :</span>
//                         </label>
//                         <input type="date"  {...register("dateEnd", { required: true })} className="input input-bordered flex-1 text-gray-700 bg-gray-100" />
//                          {errors.dateEnd && <span className="text-red-500">This field is required</span>}
//                     </div>
//                 </div>
//                 <div className='flex justify-between gap-4 items-center'>
//                     <label className='w-36'>
//                         Events:
//                     </label>
//                     <div className="grid grid-cols-2 gap-2">
//                         {events.map((event, index) => (
//                             <label key={index} className="flex items-center gap-2">
//                                 <input
//                                     type="checkbox"
//                                     value={event}
//                                     {...register("events", { required: true })}
//                                 />
//                                 <span>{event}</span>
//                             </label>
//                         ))}
//                     </div>
//                     {errors.events && <p className="text-red-500 text-sm mt-1">At least one event must be selected.</p>}
//                 </div>
//                 <div className='flex justify-between gap-4 items-center'>
//                     <label className='w-36'>
//                         Research History:
//                     </label>
//                     <input {...register("researchHistory", { required: true })} className='input flex-1 text-gray-700 bg-gray-100' placeholder='Type the history' />
//                 </div>
//                 <div className='flex justify-between gap-4 items-center'>
//                     <label className='w-36'>
//                         Sports Activities:
//                     </label>
//                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
//                         {sportsEvents.map((sport, index) => (
//                             <label key={index} className="flex items-center gap-2">
//                                 <input
//                                     type="checkbox"
//                                     value={sport}
//                                     {...register("sports", { required: true })}
//                                 />
//                                 <span>{sport}</span>
//                             </label>
//                         ))}
//                     </div>
//                     {errors.sports && <p className="text-red-500 text-sm mt-1">At least one sport must be selected.</p>}
//                 </div>
//                 {
//                     loading ?
//                         <div>
//                             <button
//                                 type="submit"

//                                 className="btn">
//                                 <span className="animate-spin text-lg">
//                                     s</span>
//                                 Adding Collage....
//                             </button>
//                         </div> :
//                         <button
//                             type='submit'
//                             className="btn w-full justify-center">
//                             Add Collage</button>
//                 }
//             </form>
//         </div>
//     );
// };

// export default page;

"use client";

import useAuth from "@/components/lib/useAuth";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const { loading, setLoading, user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const image_hosting_key = process.env.NEXT_PUBLIC_ImgBbKey;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const events = [
    "Science Fair", "Tech Talk", "Alumini Meet", "Annual Drama",
    "Art Exibition", "Creative Writing Workshop", "Business Summit",
    "StartUp Expo", "Robotics Show", "Hackathon", "Debate Championship"
  ];

  const sportsEvents = [
    "Football", "BasketBall", "Table Tennis", "Yoga",
    "Swimming", "Chess", "Carrom"
  ];

  const onSubmit = async (d) => {
    const imageFile = { image: d.image[0] };
    try {
      setLoading(true);

      const imageRes = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const collegeDetails = {
        collegeName: d.collegeName,
        admissionEnd: d.dateEnd,
        admissionStart: d.dateStart,
        events: d.events,
        collegeImage: imageRes.data.data.url,
        researchHistory: d.researchHistory,
        sports: d.sports,
        addedBy: user?.email || "Anonymous",
      };

      const response = await axios.post("/api/addCollege", collegeDetails);

      if (response.data.insertedId) {
        toast.success("🎓 College Added Successfully!");
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-sky-100 via-purple-50 to-pink-100 min-h-screen py-10 px-4">
      <h2 className="text-4xl text-center font-bold italic text-purple-700 mb-10 drop-shadow">
        🎓 Add a New College
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl space-y-6 border border-purple-200"
      >
        {/* College Name */}
        <div>
          <label className="block font-semibold text-gray-700">College Name</label>
          <input
            {...register("collegeName", { required: true })}
            className="input input-bordered w-full mt-1 bg-purple-50"
            placeholder="Enter College Name"
          />
          {errors.collegeName && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        {/* Banner Image */}
        <div>
          <label className="block font-semibold text-gray-700">Banner Image</label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full mt-1 bg-purple-50"
          />
          {errors.image && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700">Start Date</label>
            <input
              type="date"
              {...register("dateStart", { required: true })}
              className="input input-bordered w-full mt-1 bg-purple-50"
            />
            {errors.dateStart && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
          <div>
            <label className="block font-semibold text-gray-700">End Date</label>
            <input
              type="date"
              {...register("dateEnd", { required: true })}
              className="input input-bordered w-full mt-1 bg-purple-50"
            />
            {errors.dateEnd && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        {/* Events */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Select Events</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-pink-50 p-4 rounded-xl border border-pink-200">
            {events.map((event, i) => (
              <label key={i} className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value={event}
                  {...register("events", {
                    validate: (value) => value.length > 0 || "Select at least one event"
                  })}
                />
                {event}
              </label>
            ))}
          </div>
          {errors.events && <p className="text-red-500 text-sm mt-1">Select at least one event</p>}
        </div>

        {/* Research History */}
        <div>
          <label className="block font-semibold text-gray-700">Research History</label>
          <textarea
            {...register("researchHistory", { required: true })}
            className="textarea textarea-bordered w-full mt-1 bg-purple-50"
            placeholder="Brief research history"
          />
          {errors.researchHistory && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        {/* Sports */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Select Sports</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-sky-50 p-4 rounded-xl border border-sky-200">
            {sportsEvents.map((sport, i) => (
              <label key={i} className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value={sport}
                  {...register("sports", {
                    validate: (value) => value.length > 0 || "Select at least one sport"
                  })}
                />
                {sport}
              </label>
            ))}
          </div>
          {errors.sports && <p className="text-red-500 text-sm mt-1">Select at least one sport</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`btn w-full text-white transition-transform transform hover:scale-105 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                Adding College...
              </>
            ) : (
              "Add College"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
