import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    // const [inputQuantity, setInputQuantity] = useState();
    // const [minimumOrder, setMinimumOrder ] = useState();
    const { register, handleSubmit } = useForm();


    const [user] = useAuthState(auth)

    let { img, name, price, description, quantity, _id } = products;
    useEffect(() => {
       
        const url = `https://sheltered-meadow-75931.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [_id])
    // console.log(img, name, price, description, quantity, _id);

 
    const  handlePurchasing = event => {
         event.preventDefault();
        console.log(_id, name, quantity, price);
              const purchasing = {
              productId: _id,
              productPrice: price,
              productQuantity: quantity,
              product: name,
              clientName: user.displayName,
              email: user.email,
              

          }
        fetch('https://sheltered-meadow-75931.herokuapp.com/purchasing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('product added')
                setProducts(data)
               
            })

    

      

    };






    return (
       <div className='flex gap-12 '>
           <div class="card w-1/2 h-1/2  bg-base-100 shadow-xl">
           <figure><img src={img} alt="car!" /></figure>
          <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <h4> Per unit: {price}$</h4>
                  <h4>Available: {quantity}</h4>
                  <h4>{description}</h4>
    
           </div>
           </div>
           <div>
           <div className='flex justify-center items-center  '>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            {/* <h2 className="text-center text-2xl font-bold uppercase  ">Add Product</h2> */}
            <form  onSubmit={handlePurchasing}>
            <div className="  w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Client Name</span>
  
                </label>
                <input
                defaultValue={user.displayName}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  {...register("clientName")}
                />
  
                
              </div>
            <div className="  w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Product name</span>
  
                </label>
                <input
                defaultValue={name}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />
  
                
              </div>
  
              <div className="  w-full max-w-xs">
             
                <label className="label">
                  <span className="label-text">Price</span>
  
                </label>
                <input
                defaultValue={price}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
  
                
              </div>
  
            
  
              <div className=" w-full max-w-xs">
              
                <label className="label">
                  <span className="label-text">Quantity</span>
  
                </label>
                <input
               
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity")}
                />
  
                
              </div>
  
              {/* <div className="  w-full max-w-xs">
             
                <label className="label">
                  <span className="label-text">Minimum Order</span>
  
                </label>
                <input
                onClick={e =>  setMinimumOrder(e.target.value)}
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimumorder")}
                />
  
                
              </div> */}
              
   
   
              <input  className='btn w-full max-w-xs text-white mt-4' type="submit" value="Add" />
             
            </form>
        
          
  
  
  
  
  
  
          </div>
        </div>
      </div>
           </div>
       </div>
    );
};

export default Purchase;


 // <div className='flex justify-center'>
        //     <div className="card w-96 glass ">
        //         <figure><img src={img} alt="car!" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{name}</h2>
        //             <h4 className='text-xl'>Price</h4>
        //             <p> Per unit: {price}$</p>
        //             <p>Available: {quantity}</p>
        //             <p>{description}</p>

        //             <div className="card-actions justify-center mt-6 ">

        //                 <label htmlFor="my-modal-6" className="btn modal-button">purchase</label>



        //                 <input type="checkbox" id="my-modal-6" className="modal-toggle" />

        //                 <div className="modal modal-bottom sm:modal-middle">


        //                     <div className="modal-box">
        //                         <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        //                         <form onSubmit={handlePurchasing}>
        //                             <h4>Name</h4>
        //                             <input disabled defaultValue={user.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " />
        //                             <h4>Email</h4>
        //                             <input disabled defaultValue={user.email} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        //                             <h4>Phone</h4>
        //                             <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        //                             <h4>Product Name</h4>
        //                             <input defaultValue={name} type="text" placeholder="product name" className="input input-bordered w-full max-w-xs " />
        //                             <h4>Price</h4>
        //                             <input defaultValue={price} type="text" placeholder="" className="input input-bordered w-full max-w-xs  " />
        //                             <h4>Quantity</h4>

        //                             <input


        //                                 defaultValue={quantity} type="text"


        //                                 placeholder="Type here" className="input input-bordered w-full max-w-xs  " />

        //                             <input type="submit"
        //                                 value='Submit'
                                        
        //                                 className="btn btn-accent text-white font-normal mt-4	 input input-bordered w-full max-w-xs" />
        //                         </form>
                               

        //                     </div>
        //                 </div>


        //             </div>


        //         </div>
        //     </div>




        // </div >