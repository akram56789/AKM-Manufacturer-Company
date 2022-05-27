import { useEffect, useState } from "react"

const useManageProducts = () =>{
    const [products, setProducts]  =useState([])

    useEffect(()=>{
        fetch('https://sheltered-meadow-75931.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
}

export default useManageProducts;