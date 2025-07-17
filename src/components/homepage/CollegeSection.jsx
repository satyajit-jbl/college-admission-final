'use client'

import React, { useEffect, useState } from 'react';
import CollegeCard from '../shared/CollegeCard';
import useAuth from '../lib/useAuth';
import useAxiosPublic from '../lib/useAxiosPublic';



const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const { search, setSearch } = useAuth()
const axiosPublic=useAxiosPublic()
  useEffect(() => {

    axiosPublic.get(`/api/searchCollege?search=${search}`)
      .then(res => {
        setColleges(res.data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, [search]
)

  return (
    <div className='w-11/12 md:w-10/12 mx-auto py-5 lg:py-10'>
      <h1 className='text-center italic text-2xl font-semibold my-5'>Colleges We Deal With</h1>
      <p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Explore top colleges, compare details, and find the perfect fit for your future. Your journey to higher education starts now!</p>
      <div className='grid gap-5 lg:grid-cols-3 justify-items-center'>
        {colleges?.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;

    