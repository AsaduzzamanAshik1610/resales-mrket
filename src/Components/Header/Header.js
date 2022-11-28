import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authconst } from '../Context/Authprovider';
const Header = () => {
    const { user, logOut } = useContext(Authconst);
    console.log(user);
    const logOutHandle = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">resales</a>
                <Link className='mr-5' to='blog'>Blog</Link>
                <Link className='mr-5' to='/'>Home</Link>
                {user?.email && <span className='text-white'>{user?.email}</span>}

                {
                    user?.uid ? <button onClick={logOutHandle} className='bg-danger text-white rounded border-0'>Logout</button>
                        :

                        <Link className="nav-link text-white" to="/login">Login</Link>

                }
            </div>
        </div>
    );
};

export default Header;