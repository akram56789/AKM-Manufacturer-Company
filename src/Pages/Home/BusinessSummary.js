import React from 'react';

const BusinessSummary = () => {
    return (

      <section className='mt-28 text-center font-bold'>
         <h2 className='text-4xl text-primary'> Our Business Summary,</h2>
        <div className="hero h-96   text-black rounded-md   bg-[]">
         
         <div className="hero-content flex-col lg:flex-row-reverse">
             <div class="stats shadow">

                 <div class="stat">
                     <div class="stat-title">Total Page Views</div>
                     <div class="stat-value text-primary">89,400</div>
                     <div class="stat-desc">21% more than last month</div>
                 </div>

             </div>
             <div class="stats shadow">

                 <div class="stat">
                     <div class="stat-title">Total Page Views</div>
                     <div class="stat-value text-secondary">89,400</div>
                     <div class="stat-desc">21% more than last month</div>
                 </div>

             </div>
             <div class="stats shadow">

                 <div class="stat">
                     <div class="stat-title">Total Page Views</div>
                     <div class="stat-value">89,400</div>
                     <div class="stat-desc">21% more than last month</div>
                 </div>

             </div>
         </div>
     </div>
      </section>
    );
};

export default BusinessSummary;