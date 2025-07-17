// 'use client'


// import AllColleges from '@/components/lib/AllColleges';
// import CollegeCard from '@/components/shared/CollegeCard';




// const page = () => {
//     const { allCollege } = AllColleges();

//     return (
//         <>
//             <h1 className='text-center italic text-2xl font-semibold my-5'>All Colleges</h1>
//             <p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Discover top colleges that match your dreams! Explore admission dates, reviews, and campus highlights all in one place. Whether you're looking for academic excellence, vibrant student life, or affordable options — find the perfect college for your future right here. Your journey to higher education starts now!</p>
//             <div className='w-11/12 md:w-10/12 mx-auto pb-5 md:pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
//                 {allCollege?.map(college => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
//             </div>
//         </>
//     );
// };

// export default page;

'use client';

import AllColleges from '@/components/lib/AllColleges';
import CollegeCard from '@/components/shared/CollegeCard';
import { motion } from 'framer-motion';

const Page = () => {
  const { allCollege } = AllColleges();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 py-12 px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold italic text-purple-700 drop-shadow mb-3"
        >
          🎓 Explore All Colleges
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-600 font-medium leading-relaxed">
          Explore a world of exceptional colleges curated just for you. Uncover key admission dates, insightful reviews, and vibrant campus life — all in one place. Whether you seek academic brilliance, creative freedom, or a thriving student community, the perfect college experience begins here.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {allCollege?.length > 0 ? (
          allCollege.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 font-semibold">
            No colleges available at the moment.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Page;
