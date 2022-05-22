import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, price, quantity, description } = product

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/product/${_id}`)

    }
    return (
        <div class="card lg:max-w-lg text-white image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>

                <p className='mt-2'>Price: {price}$</p>
                <p>quantity: {quantity}</p>
                <p>{description}</p>

                <div class="card-actions ">
                    <button class="btn btn-primary " 
                    onClick={() => navigateToPurchase(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;