import React from 'react';

const BusinessSummary = () => {
    return (

      <section className=' rounded-lg font-sans  mt-28 bg-base-200'>
           <div>
          <h2 className='text-center text-4xl font-bold uppercase text-red-300'>Our Business Summary</h2>
      </div>
   <div class="hero justify-center gap-28 flex   h-96 ">
   <div class="stats shadow">
  
  <div class="stat">
      <img className='h-20 ml-6' src="https://img.icons8.com/ios/344/flag--v1.png" alt="" />
    <div class="stat-title">Total Countries</div>
    <div class="stat-value text-secondary">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>
   <div class="stats shadow">
  
  <div class="stat">
      <img className='h-20 ml-6' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" alt="" />
    <div class="stat-title">Total Likes</div>
    <div class="stat-value text-red-300">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>
   <div class="stats shadow">
  
  <div class="stat">
      <img className='h-20 ml-6' src="https://img.icons8.com/ios/344/gender-neutral-user.png" alt="" />
    <div class="stat-title">Total Reviews</div>
    <div class="stat-value text-orange-300">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
</div>
 
</div>
      
      </section>
        
    );
};

export default BusinessSummary;