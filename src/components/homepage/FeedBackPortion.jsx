import React from 'react';
import Feedback from './Feedback';

const FeedBackPortion = () => {
    return (
        <div className='pb-5 lg:pb-10'>
            <h2 className='text-center italic font-semibold text-2xl py-4'>formers spoken to help you decide...</h2>
<p className='text-center max-w-xl mx-auto pb-5 lg:pb-10'>Read honest student reviews, discover campus experiences, and make informed decisions. Our trusted college reviews help you choose the right path with real insights from real students.</p>
            <Feedback />
        </div>
    );
};

export default FeedBackPortion;