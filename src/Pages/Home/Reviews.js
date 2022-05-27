import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='mt-12' >
            <h2 className='text-4xl text-center font-bold text-secondary ' >Our Client Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
            {
                reviews.map(reviews =><Review
                key={reviews._id}
                reviews={reviews}
                ></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;
 
