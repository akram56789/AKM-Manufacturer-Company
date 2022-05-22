import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
 
    const [user] = useAuthState(auth)

    const { img, name, price, description, quantity } = products;
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productId])
    return (
        <div className='flex justify-center'>
            <div class="card w-96 glass ">
                <figure><img src={img} alt="car!" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h4 className='text-xl'>Price</h4>
                    <p> Per unit: {price}$</p>
                    <p>Available: {quantity}</p>
                    <p>{description}</p>

                    <div class="card-actions justify-center mt-6 ">
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-6" class="btn modal-button">purchase</label>

                        {/* <!-- Put this part before </body> tag --> */}
                  

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                  
                    <div class="modal modal-bottom sm:modal-middle">
                       
                 
                        <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h4>Name</h4>
                        <input disabled  defaultValue={user.displayName} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs " />
                        <h4>Email</h4>
                        <input disabled defaultValue={user.email}  type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <h4>Phone</h4>
                        <input    type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <h4>Product Name</h4>
                        <input defaultValue={name} type="text" placeholder="product name" class="input input-bordered w-full max-w-xs " />
                        <h4>Price</h4>
                        <input defaultValue={price} type="text" placeholder="" class="input input-bordered w-full max-w-xs  " />
                        <h4>Quantity</h4>
                        <input defaultValue={quantity} type="text" 
                        
                        placeholder="Type here" class="input input-bordered w-full max-w-xs  " /> 
                        <button 
                        
                        className='btn btn-primary ml-2 mt-6'>increase</button>
                        <button className='btn btn-ascent ml-16'>discrease</button>
                           
                            <div class="flex justify-center mt-4">
                            <button class="btn btn-wide">Purchase now</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        

        </div >
    );
};

export default Purchase;