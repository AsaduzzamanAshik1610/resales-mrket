import React from 'react';
import { Link } from 'react-router-dom';

const ProductsDetails = ({product}) => {
    const {category_id, catImg,catName, description, price} = product;
    console.log(product)
    return (
        <div>
            <div className="card card-compact w-64 mx-auto gap-x-6 bg-black shadow-xl text-white m-5">
                <figure><img src={
                 catImg}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{catName}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${category_id}`}><button className="btn btn-primary">Category</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;