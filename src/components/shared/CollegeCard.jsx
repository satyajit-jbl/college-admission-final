// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { FaArrowAltCircleRight } from "react-icons/fa";


// const CollegeCard = ({ college }) => {
//     const { _id, collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;

//     return (
//         <div>
//             <div className="card shadow-lg rounded-2xl">
//                 <div className=''>
//                     <Image src={collegeImage} width={384} height={200} alt='CollegeImage' className='object-cover overflow-hidden rounded-t-xl' />

//                 </div>
//                 <div className="card-body px-0">
//                     <h2 className="card-title">
//                         {collegeName}

//                     </h2>
//                     <div className="badge border-0 bg-gray-800 text-white dark:bg-stone-300 dark:text-gray-950">Admission Open : {admissionDate || college.admissionStart}</div>
//                     <p className='h-16'>{researchHistory}</p>
//                     <div className="card-actions justify-end pr-2">
//                         {events?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline">{event}</div>))}
//                     </div>
//                     <div className="card-actions justify-end pr-2">
//                         {sports?.slice(0,2).map((event, idx) => (<div key={idx} className="badge badge-outline ">{event}</div>))}
//                     </div>
//                 </div>
//                 <Link className='flex items-center gap-2 btn' href={`/college/${college._id}`}>Details <FaArrowAltCircleRight /></Link>
//             </div>
//         </div>
//     );
// };

// export default CollegeCard;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaFlask, FaFutbol, FaArrowRight } from 'react-icons/fa';

const CollegeCard = ({ college }) => {
  const { _id, collegeImage, collegeName, admissionDate, events, researchHistory, sports } = college;

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-[350px] h-[500px] flex flex-col">

      {/* Image */}
      <div className="h-[200px] overflow-hidden">
        <Image
          src={collegeImage}
          alt={collegeName}
          width={400}
          height={250}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{collegeName}</h2>

          <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            <span>Admission Open: {admissionDate || 'TBA'}</span>
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-400 flex items-start gap-2">
            <FaFlask className="mt-1 text-purple-500" />
            <p className="line-clamp-2">{researchHistory}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {events?.slice(0, 2).map((event, idx) => (
              <span key={idx} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white text-xs px-3 py-1 rounded-full">
                {event}
              </span>
            ))}
            {sports?.slice(0, 2).map((sport, idx) => (
              <span key={idx} className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <FaFutbol />
                {sport}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href={`/college/${_id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;


