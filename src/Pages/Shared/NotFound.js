import React from 'react';
import { Link } from 'react-router-dom';
 

const NotFound = () => {
  return (
    <div className='mt-12' >
      <div id='notfound' className='flex w-100  justify-center'>
        <img height={'350px'} src="https://relaxed-northcutt-57de90.netlify.app/images/no-result-found.webp" alt="" />
      </div>
      <div className='flex justify-center  '>
        <Link to='/home'>
          <button className='btn btn-danger mb-2'>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;