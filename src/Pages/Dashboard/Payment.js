import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3c7sCXchEbHwYXs8xtaWEwAYBQQt24lO3Pw9j7xd6PF5aWxosADjVmQvowJEALO78qI09C53Yh9tjECHMEK1uB006kOXdGvh');


const Payment = () => {
    const { id } = useParams();
    const url = `https://sheltered-meadow-75931.herokuapp.com/purchasing/${id}`;

    const { data: purchasing, isLoading } = useQuery(['purchasing', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {purchasing.clientName}</p>
                    <h2 class="card-title">Please Pay for {purchasing.product}</h2>
                  
                    <p>Please pay: ${purchasing.productPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  purchasing={purchasing} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;