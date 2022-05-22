import React, { useEffect, useState } from 'react';
import Carts from './Carts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
     <div className='grid grid-cols-3 gap-5 mt-12'>
         {
             parts.map(part => <Carts
             key={part._id}
             part={part}


             >

             </Carts>)
         }
     </div>
    );
};

export default Parts;