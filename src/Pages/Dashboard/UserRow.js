import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';



const UserRow = ({ user, refetch }) => {
    const [users, setUsers] = useState([])
    const { email, role } = user;
    const makeAdmin = () => {

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })





    }
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
                    const url = `http://localhost:5000/user/${email}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            const remaining = users.filter(u => u.email !== email)
                            setUsers(remaining)
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
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button className='btn btn-xs' onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(users.email)} className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;

