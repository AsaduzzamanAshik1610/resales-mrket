import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../CategoryProducts/BookingModal/BookingModal';
import CategoryProducts from '../CategoryProducts/CategoryProducts';


const Detailes = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct]= useState(null)
    useEffect(()=>{
        fetch(`https://used-resale-server.vercel.app/products/${id}`)
        .then(res=> res.json())
        .then(data=>  setProducts(data))
    },[id])

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 ml-12 m-5 lg:grid-cols-2'>
             {
                products.map(product=><CategoryProducts
                key={product}
                product={product}
                setProduct= {setProduct}
                ></CategoryProducts>)
             }
        </div>
        {
           product &&
           <BookingModal
            product={product}
          ></BookingModal>
        }
        </section>
    );
};

export default Detailes;