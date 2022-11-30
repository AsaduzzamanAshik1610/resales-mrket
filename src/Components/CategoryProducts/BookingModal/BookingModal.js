import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Authconst } from '../../Context/Authprovider';

const BookingModal = ({ product }) => {
    console.log(product)
    const { user } = useContext(Authconst)
    const { Brand } = product;
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            name,
            email,
            phone,
            price,
            img,
            userName,
            location,
        }
        console.log(booking);
        fetch('https://used-resale-server.vercel.app/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {console.log(data)
            toast.success('Your Item is Booked') })

    }
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Brand}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' value={product?.name} disabled type="text" className="input input-bordered w-full mb-2" />
                        <input name='price' value={product?.price} disabled type="text" className="input input-bordered w-full mb-2" />
                        <input name='userName' value={user?.displayName} disabled type="text" className="input input-bordered w-full mb-2" />
                        <input name='email' value={user?.email} disabled type="email" className="input input-bordered w-full mb-2" />
                        <input name='img' value={product?.img} disabled type="text" className="input input-bordered w-full mb-2 hidden" />
                        <input name='phone' type="text" placeholder='Enter Phone Number' className="input input-bordered w-full mb-2" />
                        <input name='location' type="text" placeholder='Enter Your Location' className="input input-bordered w-full mb-2" />
                        <button type='submit' className='btn btn-primary w-full'>Submit</button>
                    </form>
                    <Toaster />
                </div>
            </div>
        </>
    );
};

export default BookingModal;