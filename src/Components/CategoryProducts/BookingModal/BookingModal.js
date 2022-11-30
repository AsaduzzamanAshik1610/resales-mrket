import React, { useContext } from 'react';
import { Authconst } from '../../Context/Authprovider';

const BookingModal = ({product}) => {
    const {user} = useContext(Authconst)
    const {Brand} = product;
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking ={
            name,
            email,
            phone,
        }
        console.log(booking);
        fetch('http://localhost:5000/products', {
           method:'POST',
           headers:{'content-type':'application/json'},
           body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
 
    }
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Brand}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                    <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full input-bordered max-w-xs' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;