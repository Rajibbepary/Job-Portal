import Lottie from 'lottie-react';
import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerAnimationData from '../../assets/Animation - 1733853879954.json'
const Register = () => {

  const handleRegister = e =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length < 6){
      toast.error("Password must be 6 characters");
       return;
     }

     if(!/[a-z]/.test(password)){
      toast.error("Password must contain at least one Lowercase letter.");
       return;
     }
    

     if(!/[A-Z]/.test(password)){
       toast.error("Password must contain at least one Uppercase letter.");
       return;
     }
     toast.success("Register successfully!");
    console.log(email, password)


  }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     <Lottie animationData={registerAnimationData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-4xl font-semibold text-center mt-5">Register</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;