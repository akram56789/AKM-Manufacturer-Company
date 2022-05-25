import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
      if(user)
       {
        fetch(`http://localhost:5000/myorders?email=${user.email}`,{
          method: 'GET',
          headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
          .then(res => {
              if (res.status === 401 || res.status === 403) {
                  signOut(auth);
                  localStorage.removeItem('accessToken');
                  navigate('/');
              }
              return res.json()})
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
            <div className="overflow-x-auto">
        <table className="table">
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
             <td><button className='btn btn-secondary'>Pay</button></td>
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