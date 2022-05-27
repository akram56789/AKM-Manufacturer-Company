
const BusinessSummary = () => {
  return (
 

          <section className=' rounded-lg font-sans p-8  mt-28 bg-base-200'>
               <div>
              <h2 className='text-center text-4xl font-bold uppercase text-red-300 p-6'>Our Business Summary</h2>
          </div>
       <div class="hero justify-center grid-cols-1 lg:grid-cols-3 lg:flex hidden lg:block lg:gap-28 h-80 ">
       <div class="stats shadow-xl">
      <div class="stat ">
          <img className='h-20 ml-6' src="https://img.icons8.com/ios/344/flag--v1.png" alt="" />
        <div class="stat-title">Total Countries</div>
        <div class="stat-value text-secondary ml-6">89</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

    </div>
       <div class="stats shadow-xl">

      <div class="stat">
          <img className='h-20 ml-6' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" alt="" />
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-red-300">12,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

    </div>
       <div class="stats shadow-xl">

      <div class="stat">
          <img className='h-20 ml-6' src="https://img.icons8.com/ios/344/gender-neutral-user.png" alt="" />
        <div class="stat-title">Total Reviews</div>
        <div class="stat-value text-orange-300">3,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

    </div>


    </div>
    <div class="card   bg-base-100 mb-12 shadow-xl">
      <div class="card-body">
        <div class="card-actions ">
            <h4 className='text-2xl text-red-400'>If you want to know more about Us  </h4> 
            <h4 className='text-4xl text-success '> Please Click Here</h4>
            <button className='btn btn-success ml-16'>Click</button>

        </div>

      </div>
    </div>

          </section>

  );
};

export default BusinessSummary;