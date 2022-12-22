import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';








const Login = () => {

    const {providerGoogle ,signIn }= useContext(AuthContext)
    const Navigate= useNavigate()
    const location = useLocation()
    const from= location.state?.from?.pathname || '/';
    
  
    
    const googleProvider= new GoogleAuthProvider()
    
        const handelSignin = ()=>{
            providerGoogle(googleProvider)
            .then(result=>{
                const user = result.user
                console.log(user)
                Navigate(from , {replace: true})
            })
            .catch(err=>console.error(err))
        }

        const handleSubmit = event => {
          event.preventDefault();
          const form= event.target;
        
          const email= form.email.value;
          const password= form.password.value;
        
          console.log( email , password)
          signIn(email, password)
            .then(result=> {
              const user = result.user
              console.log(user)
              Navigate(from , {replace: true})
            })
            .catch(err => { 
              const error= err.message
              console.error(error)
            })
        }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  name="email" type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#s" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log in</button>
              </div>
            </form>
            <p className="ml-5">Are You new our site ?? pleace  <a href="/rigester">register</a> </p>
            <div className="d-grid gap-2 col-4 mx-auto d-flex">
<button  onClick={handelSignin} className="btn btn-primary mb-3 mr-3" type="button"> <i className="fa-brands fa-google"> </i> Google </button>
<button  onClick={handelSignin} className="btn btn-primary" type="button"> <i className="fa-brands fa-google"> </i> faceBook </button>
</div>
          </div>
        </div>
      
      </div>
    );
};

export default Login;

