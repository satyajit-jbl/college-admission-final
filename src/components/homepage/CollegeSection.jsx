// 'use client'

// import React, { useEffect, useState } from 'react';
// import CollegeCard from '../shared/CollegeCard';
// import useAuth from '../lib/useAuth';
// import useAxiosPublic from '../lib/useAxiosPublic';



// const CollegeSection = () => {
//   const [colleges, setColleges] = useState([]);
//   const { search, setSearch } = useAuth()
// const axiosPublic=useAxiosPublic()
//   useEffect(() => {

//     axiosPublic.get(`/api/searchCollege?search=${search}`)
//       .then(res => {
//         setColleges(res.data);
//       })
//       .catch(err => console.error('Fetch error:', err));
//   }, [search]
// )

//   return (
//     <div className='w-11/12 md:w-10/12 mx-auto py-5 lg:py-10'>
//       <h1 className='text-center italic text-2xl font-semibold my-5'>Colleges We Deal With</h1>
//       <p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Explore top colleges, compare details, and find the perfect fit for your future. Your journey to higher education starts now!</p>
//       <div className='grid gap-5 lg:grid-cols-3 justify-items-center'>
//         {colleges?.slice(0, 3).map((college) => (
//           <CollegeCard key={college._id} college={college} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CollegeSection;

    "use client";

import React, { useEffect, useState } from "react";
import CollegeCard from "../shared/CollegeCard";
import useAuth from "../lib/useAuth";
import useAxiosPublic from "../lib/useAxiosPublic";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const { search, setSearch } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(`/api/searchCollege?search=${search}`)
      .then((res) => {
        setColleges(res.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [search]);

  return (
    <section className="w-full bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 dark:text-pink-300 mb-4 italic drop-shadow-sm">
          Featured Colleges
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10">
          Discover inspiring institutions tailored to your goals. From cutting-edge research to vibrant campus life — these colleges offer more than just academics. Begin exploring your future today.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {colleges?.slice(0, 3).map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeSection;
