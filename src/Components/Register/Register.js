import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authconst } from '../Context/Authprovider';


const Register = () => {
    const {createUser} = useContext(Authconst)
    const handleLogin = event=>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email, password)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
     .catch(err=>console.error(err))
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-warning mt-5 mb-5">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-black">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div>
                               <p>All ready have an account?<Link className='text-blue-600' to='/login'>Login</Link></p>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;