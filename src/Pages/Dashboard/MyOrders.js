import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorders?client=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    return (
      <div>
              <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {
            orders.map((a, index) => <tr>
             <th>{index + 1}</th>
             <td>{a.clientName}</td>
             <td>{a.client}</td>
             <td>{a.product}</td>
             <td>{a.productPrice}</td>

            </tr>
            )
          }
            
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default MyOrders;