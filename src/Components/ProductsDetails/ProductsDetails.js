import React from 'react';

const ProductsDetails = ({product}) => {
    const {img,title, description, price} = product;
    return (
        <div>
            <div className="card card-compact w-64 mx-auto gap-x-6 bg-base-100 shadow-xl">
                <figure><img src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;