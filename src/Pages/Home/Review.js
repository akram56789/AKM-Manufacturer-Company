import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, picture, retting } = reviews;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={picture} />
                    </div>
                </div>
                <p>{name}</p>
                <div className="card-actions justify-end">
                 <p>{review}</p>
                 <p>{retting}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
