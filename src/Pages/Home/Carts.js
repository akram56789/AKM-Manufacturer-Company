import React from 'react';

const Carts = ({ part }) => {
  const { name, img, quantity, per, price, description } = part

  return (
    //   <div class="card glass lg:max-w-lg">
    //   <figure><img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!"/></figure>
    //   <div class="card-body">
    //     <h2 class="card-title">{name}</h2>
    //     <p>Price: {price}</p>
    //     <p>quantity: {quantity}</p>
    //     <p>per: {per}</p>
    //     <div class="card-actions">
    //       <button class="btn btn-primary">Book Now</button>
    //     </div>
    //   </div>
    // </div>

    <div class="card  lg:max-w-lg text-white image-full">
      <figure><img src={img} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>

        <p className='mt-2'>Price: {price}$</p>
        <p>quantity: {quantity}</p>
        <p>{description}</p>
         
        <div class="card-actions ">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carts;