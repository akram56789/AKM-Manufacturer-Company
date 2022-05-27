import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    
  

    useEffect(() => {
        fetch('http://localhost:5000/purchasing')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data);
            })
    }, [])

    const handleDelete = _id => {
     
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            if (result) {
              const url = `http://localhost:5000/product/${_id}`
              fetch(url, {
                  method: "DELETE"
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      const remaining = allOrders.filter(order => order._id !== _id)
                      setAllOrders(remaining)
                  })
    
          }
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
  
        })
    
      }
    return (
        <div>
        <h2>My Orders: {allOrders.length}</h2>
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
      allOrders.map((order, index) => <tr>
       
       <th>{index + 1}</th>
       <td>{order.clientName}</td>
       {/* <td>{order.client}</td> */}
       <td>{order.product}</td>
       {/* <td>{order.productPrice}</td> */}
       <td>{order.productQuantity}</td>
        <td>
          {(order.productPrice && !order.paid) &&  <button className='btn btn-secondary'>Pay</button> }
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

export default AllOrders;