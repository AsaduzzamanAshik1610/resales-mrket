import React, { useEffect, useState } from 'react';
import BookingModal from '../CategoryProducts/BookingModal/BookingModal';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://used-resale-server.vercel.app/category')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
         <div className='grid grid-cols-1 md:grid-cols-2 ml-12 m-5 lg:grid-cols-3'>
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