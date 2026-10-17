import React from 'react';
import  logo from '/logo.jpeg'
import { useState } from 'react';

const Form = () =>{

    const [formData, setFormData]= useState({email:'', password:""});
    const[error, setError] =useState({});

    const validate=() =>{
        let newError ={};
        if(!formData.email){newError.email = "Email is required"};
        if(!formData.password){newError.email = "Password is required"} ;

        setError(newError);
        return Object.keys(newError).length == 0;
    }

   const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
   }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validate()){
        alert('Form Submitted');
        console.log(formData)
    }
  }

    return(
        <div className='relative flex-1 flex flex-col  justify-center px-20 gap-12.5'>
        <button type="button" className="absolute top-6 right-6 px-5.5 py-2.5 bg-black text-white border-none rounded-full cursor-pointer ">Sign up</button>
  <h3 className=" top-11 relative text-lg font-bold">Welcome Back to GHIPSS Dashboard</h3>
      <p className='relatve top-10 text-[0.8rem] text-[#888] '>Sign in to continue</p>
    <form action=""onSubmit={handleSubmit} className='block mt-4 mx-0 mb-1.5'>
       
      <div className="relative bottom-12">

  <label className='inline-block mt-4 mx-0 mb-1.5' htmlFor="email" >Email</label>
  <input className='w-full py-2.5 pb-3 b-width border-solid rounded-lg bg-[#ddd] border-[#ddd]' id="email" type="email" name='email' value={formData.email} onChange={handleChange}  />

  {error.email && <p className='text-red-600'>{error.email}</p>}
 
  <label className='inline-block mt-4 mx-0 mb-1.5' htmlFor="password">Password</label>
  <input className='w-full py-2.5 pb-3 b-width border-solid rounded-lg bg-[#ddd] border-[#ddd]' id="password " type="password" value={formData.password} name='password' onChange={handleChange}  />
   
     {error.email && <p className='text-red-600'>{error.name}</p>}

  </div>
  
 
<div className='relative bottom-10'>
  <button type="submit" className='w-full mt-5 p-3 bg-[#111] text-white border-none rounded-lg cursor-pointer'>Log in</button>
   <div className = 'm-0 flex items-center gap-70 top-4 relative'>
    <label htmlFor="forgetPassword">
        <input type="checkbox" name='remember'/>Remember me
    </label>
    <a href="#" className='underline underline-offset-2 decoration-2 decoration-black'>Forget password?</a>
    </div>
   </div>
                  
</form>
</div>
    );
} 
export default Form