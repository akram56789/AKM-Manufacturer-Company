import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
 


const AddProduct = () => {
    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = "https://sheltered-meadow-75931.herokuapp.com/product";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('product added')
            })

    };
    return (
        <div className='flex justify-center items-center mt-12 '>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold uppercase  ">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product name</span>
  
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />
  
                
              </div>
  
              <div className="form-control w-full max-w-xs">
             
                <label className="label">
                  <span className="label-text">Price</span>
  
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
  
                
              </div>
  
              <div className="form-control w-full max-w-xs">
              
                <label className="label">
                  <span className="label-text">Description</span>
  
                </label>
                <input type="text"   class="input input-bordered input-lg w-full max-w-xs" 
                  {...register("description")}
                />

  
                
              </div>
  
              <div className="form-control w-full max-w-xs">
              
                <label className="label">
                  <span className="label-text">Available Quantity</span>
  
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity")}
                />
  
                
              </div>
  
              <div className="form-control w-full max-w-xs">
             
                <label className="label">
                  <span className="label-text">Minimum Order</span>
  
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimumorder")}
                />
  
                
              </div>
              <div className="form-control w-full max-w-xs">
             
                <label className="label">
                  <span className="label-text">Photo Url</span>
  
                </label>
                <input type="text" placeholder='Photo Url' {...register("img")} className="input input-bordered w-full max-w-xs" />
  
                
              </div>
   
   
              <input  className='btn w-full max-w-xs text-white mt-4' type="submit" value="Add" />
             
            </form>
        
          
  
  
  
  
  
  
          </div>
        </div>
      </div>
         
    );
};

export default AddProduct;






 