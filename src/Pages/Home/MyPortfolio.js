import React from 'react';

const MyPortfolio = () => {
    return (
   <section className="flex h-1/2  justify-center mt-12 text-white rounded-lg  bg-[url('/src/Images/img3.jpg')]">
        <div className=" ">
            <div class="card w-96 glass ">
        <figure><img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="car!"/></figure>
        <div class="card-body">
          <h2 class="card-title">Name: Akram Hossain</h2>
          <p>Email: akramhossain56789@gmail.com</p>
          <p>I am a junior web developer.</p>
          <p>skill: HTML, CSS, JavaScript, react ,mongo DB, Node Js.</p>

          <div class="card-actions ">
              <p>my best website 1 link </p>
           <button className='btn'> <a target="_blank" href="https://assignment-11-12f22.firebaseapp.com/" rel="noreferrer">click</a></button>
          </div>
          <div class="card-actions ">
              <p>my best website 2 link </p>
           <button className='btn'> <a target="_blank" href="https://fahim-assignment-10.firebaseapp.com/" rel="noreferrer">click</a></button>
          </div>
          <div class="card-actions ">
              <p>my best website 3 link </p>
           <button className='btn'> <a target="_blank" href="https://assignment-11-12f22.firebaseapp.com/" rel="noreferrer">click</a></button>
          </div>
       
        </div>
      </div>
    </div>
   </section>
    );
};

export default MyPortfolio;