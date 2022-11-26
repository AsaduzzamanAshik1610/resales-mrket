import React from 'react';
import { Link } from 'react-router-dom';

const ProductsDetails = ({product}) => {
    const {_id,img,title, description, price} = product;
    return (
        <div>
            <div className="card card-compact w-64 mx-auto gap-x-6 bg-black shadow-xl text-white">
                <figure><img src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${_id}`}><button className="btn btn-primary">Product Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;