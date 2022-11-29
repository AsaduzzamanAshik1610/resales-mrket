import React from 'react';

const BookingModal = ({product}) => {
    const {Brand} = product;
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Brand}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-6'>
                    <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full input-bordered max-w-xs' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;