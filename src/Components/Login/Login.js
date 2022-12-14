import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authconst } from '../Context/Authprovider';

const Login = () => { 
    const {signIn, signInWithgoogle} = useContext(Authconst);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            const currentUser = {
                email:user.email,
            }
            navigate(from, {replace:true})
            console.log(currentUser);
        })
        .catch(err=> console.error(err))
    }
    const handleGoogleSignIn =()=>{
        signInWithgoogle()
        .then(result=>{
          const user = result.user;
          console.log(user);
        })   
        .catch(error=> 
         console.error(error))
    } 

    return (
        <div>
            <div className="hero min-h-screen bg-warning mt-5 mb-5">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-black">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleSignIn} className='bg-blue-600 text-white ms-5 border-0 p-2 mb-2 mt-2 rounded-lg'>GoogleSignIn</button>
                            </div>
                            <div>
                            <p>All ready have an account?<Link className='text-blue-600' to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;