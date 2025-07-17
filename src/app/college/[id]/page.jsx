// "use server"

import dbConnect, { collectionNames } from '@/components/lib/dbConnect';

import CollegeDetails from '@/components/shared/CollegeDetails';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({ params }) => {
    const collegeID = await params.id;
    const db= dbConnect(collectionNames.collegeCollection)
    const collegeData = await db.findOne({ _id: new ObjectId(collegeID) })
  if (!collegeData){
    return <>College data loading</>
  }

    const plainCollegeData = {
    ...collegeData,
    _id: collegeData._id.toString(),
  };
      return (
        <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10'>
            <CollegeDetails college={plainCollegeData} />
        </div>
    );
};

export default page;