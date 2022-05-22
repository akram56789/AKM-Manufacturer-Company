import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96 mt-12 text-black rounded-md   bg-[]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://www.cgdirector.com/wp-content/uploads/media/2019/01/Parts_Needed_to_Build_a_PC_Twitter-1200x675-768x432.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            {/* <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Visit Us</button> */}
          </div>
        </div>
      </div>
    );
};

export default Banner;