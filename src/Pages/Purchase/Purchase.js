import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const { img, name, price, description, quantity } = product;
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
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
                    <button class="btn btn-wide items-center">Purchase</button>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Purchase;