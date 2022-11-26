import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailes = () => {
    const userDetailes = useLoaderData()
    console.log(userDetailes)
    const { _id, img, title, description, price } = userDetailes;
    return (
        <div className='m-5'>
            <div className="card card-compact w-64 mx-auto gap-x-6 bg-black shadow-xl text-white">
                <figure><img src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-orange-600 text-2xl'>Price:{price}</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
            <p className='bg-amber-400 text-black p-10 mt-5 rounded-lg'>{description}</p>
            </div>
        </div>
    );
};

export default Detailes;