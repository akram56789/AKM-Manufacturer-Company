import React from 'react';

const Ceo = () => {
    return (
      
        <div className="card lg:card-side bg-base-100 shadow-xl mt-12  bg-black">
            <figure className='flex-1 p-2'><img className=''   src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Album" /></figure>
            <div className="card-body flex-1 justify-center  text-white">
                <h4 className='text-primary text-4xl uppercase font-bold '> Our CEO
                </h4>
                <h2 className="card-title text-4xl">Make an appointment With the CEO</h2>
                <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h4>
                {/* <div className="card-actions mt-4">
                    <button>Get Started</button>
                </div> */}
            </div>
        </div>
    );
};

export default Ceo;