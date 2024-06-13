import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard';

export default function User() {
    
    const [formData,setFormData]=useState({});
    //console.log(formData);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value});
      }
    
      const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        navigate('/dashboard', {state:formData});
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" size={40} placeholder='Full Name'  id='name' onChange={handleChange} /><br />
          <input type="email" placeholder='E-mail address'  id='email' onChange={handleChange} /><br />
          <input type="name" placeholder='Username'  id='username' onChange={handleChange} /><br />
          <input type="password" placeholder='Password'  id='password' onChange={handleChange} /><br />
          
          <button type='submit' className='text-[#00ff31] text-lg outline rounded-full p-2 px-5 hover:text-black hover:bg-[#00ff31]'>Sign Up</button>
          
        </form>
    </div>
  )
}
