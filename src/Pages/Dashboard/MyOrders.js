import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
 
    const navigate = useNavigate()

    useEffect(() => {
      if(user)
       {
        fetch(`https://sheltered-meadow-75931.herokuapp.com/myorders?email=${user.email}`,{
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
     
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this item?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          if (result) {
            const url = `https://sheltered-meadow-75931.herokuapp.com/order/${_id}`
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
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
        }

      })
  
    }

    return (
      <div>
              <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
        <table className="table table-compact">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              {/* <th>Email</th> */}
              <th>Product</th>
              <th>Price</th>
              <th>Payment</th>
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
             {/* <td>{order.productPrice}</td> */}
             <td>{order.productQuantity}</td>
              <td>
                {(order.productPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-secondary'>Pay</button></Link>}
                {(order.productPrice && order.paid) && <span className='text-gray-500 font-bold'>Paid</span>}
                
                </td>
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