import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, picture, retting } = reviews;
    return (
     <section>
            <div class="card   lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
            <div class="avatar">
                <div class="w-24 mask mask-squircle">
                    <img src={picture}/>
                </div>
            </div>
                <h2 class="card-title">{name}</h2>
                <p>{review}</p>
                <p>retting: {retting}</p>
            </div>
             
        </div>
        
     </section>
    );
};

export default Review;
