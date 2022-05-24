import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    const handleDelete = _id => {
      const proceed = window.confirm('Delete tha product !!')
      if (proceed) {
          const url = `http://localhost:5000/order/${_id}`
          fetch(url, {
              method: "DELETE"
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  const remaining = orders.filter(order => order._id !== _id)
                  setOrders(remaining)
              })

      }
    }

    return (
      <div>
              <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
        <table class="table">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              {/* <th>Email</th> */}
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
          {
            orders.map((order, index) => <tr>
             
             <th>{index + 1}</th>
             <td>{order.clientName}</td>
             {/* <td>{order.client}</td> */}
             <td>{order.product}</td>
             <td>{order.productPrice}</td>
             <td>{order.productQuantity}</td>
           <td>  <button onClick={() => handleDelete(order._id)} className='btn btn-warning text-white'>DELETE</button></td>

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