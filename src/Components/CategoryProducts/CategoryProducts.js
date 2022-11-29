import React from 'react';

const CategoryProducts = ({product,setProduct}) => {
    const{Brand,Phone_Number,location,img,title,price,description}=product;
    return (
        <div>
           <div className="card card-compact w-64 mx-auto gap-x-6 bg-black shadow-xl text-white">
                <figure><img src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">Location:{location}</h2>
                    <p className='text-orange-600 text-2xl'>Price:{price}</p>
                    <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Booking Now</button> */}
                    <label htmlFor="Booking-modal" 
                    onClick={()=>setProduct(product)}
                    className="btn">BookingNow</label>    
                    </div>
                </div>
            </div>
            <div>
            <p className='bg-amber-400 text-black p-10 m-5 rounded-lg'>{description}</p>
            </div> 
        </div>
    );
};

export default CategoryProducts;