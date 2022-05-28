import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    // const [inputQuantity, setInputQuantity] = useState();
    // const [minimumOrder, setMinimumOrder ] = useState();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()


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
                navigate('/dashboard/myorders')
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


  