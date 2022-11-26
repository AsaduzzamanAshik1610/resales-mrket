import React, { useEffect, useState } from 'react';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products/upcoming')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 ml-12 mb-5 lg:grid-cols-4'>
            {
                products.map(product=> <ProductsDetails
                key = {product}
                product = {product}
                ></ProductsDetails>)
            }
        </div>
    );
};

export default Products;