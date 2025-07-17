'use client'


import AllColleges from '@/components/lib/AllColleges';
import CollegeCard from '@/components/shared/CollegeCard';




const page = () => {
    const { allCollege } = AllColleges();

    return (
        <>
            <h1 className='text-center italic text-2xl font-semibold my-5'>All Colleges</h1>
            <p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Discover top colleges that match your dreams! Explore admission dates, reviews, and campus highlights all in one place. Whether you're looking for academic excellence, vibrant student life, or affordable options — find the perfect college for your future right here. Your journey to higher education starts now!</p>
            <div className='w-11/12 md:w-10/12 mx-auto pb-5 md:pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allCollege?.map(college => (<CollegeCard key={college._id} college={college}></CollegeCard>))}
            </div>
        </>
    );
};

export default page;