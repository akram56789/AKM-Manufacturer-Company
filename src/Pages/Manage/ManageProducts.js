import React from 'react';
import Swal from 'sweetalert2';
import useManageProducts from '../../Hooks/UseManageProducs';

const ManageProducts = () => {
    const [products, setProducts] = useManageProducts()

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
                      const remaining = products.filter(product => product._id !== _id)
                      setProducts(remaining)
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
       
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-5 mt-28'>
                {
                    products.map(product =>
                        <div key={product._id}>
                            <div class="card  bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src={product.img} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{product.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions">
                                        <button onClick={() => handleDelete(product._id)}  class="btn btn-warning">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
       
    );
};

export default ManageProducts;