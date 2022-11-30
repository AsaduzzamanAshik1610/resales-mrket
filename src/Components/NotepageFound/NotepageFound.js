import React from 'react';
import { Link } from 'react-router-dom';

const NotepageFound = () => {
    return (
        <div>
            <img className='w-60 mx-auto' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
            <div className='flex justify-center items-center pt-5'>
                <button className='bg-orange-500 text-white px-3 py-2 font-semibold'><Link to='/'>Back to Home</Link></button>
            </div>
        </div>
    );
};

export default NotepageFound;