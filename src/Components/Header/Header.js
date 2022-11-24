import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">resales</a>
                <Link className='mr-5' to='blog'>Blog</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;