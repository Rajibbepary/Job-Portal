import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import registerAnimationData from '../../assets/Animation - 1733853879954.json'
const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
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
    <div className="card bg-gray-400 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-4xl font-semibold text-center mt-5">Register</h1>
      <form onSubmit={handleRegister} className="card-body">
        
      <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white ">Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
          
                    <div className="form-control relative">
                      <label className="label">
                        <span className="label-text text-white ">Password</span>
                      </label>
                      <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <button onClick={()=> setShowPassword(!showPassword)} className=' bg-gray-700 border-none outline-none btn-sm absolute right-5 text-white top-10'>
                        
                        {
                          showPassword ? <FaEyeSlash/> :<FaEye />
                        }
                        </button>
                      <label className="label">
                        <a href="#" className="label-text-alt text-white link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
       
        <input type="submit" value="Register" className=' text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2'/>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;