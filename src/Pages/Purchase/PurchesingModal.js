import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const PurchasingModal = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        console.log(data)
   
         
    }
    return (
    <div>
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input  className='mb-2' placeholder='product name' {...register("name", { required: true, maxLength: 20 })} />
            <input defaultValue={user.email} className='mb-2' placeholder='email' {...register("email")} />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input defaultValue={user?.displayName} className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
            <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
        
            <input className='w-50 mx-auto' type='submit' value="Add Product" />
        </form>
    </div>
    );
};

export default PurchasingModal;