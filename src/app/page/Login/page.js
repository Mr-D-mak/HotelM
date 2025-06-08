'use client'
import '../../css/login_css/page.css'
import React, { useState } from 'react'

export default function page() {

  const [formData,setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    pwd: '',
    cpwd: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("Submitted Data :",formData);
    if(formData.pwd != formData.cpwd){
      alert('Passwords do not match!');
      return;
    }
  }

  return (
    <div className='form-container'>
        <h1>Register</h1><br/><br/>
        <form className='login' onSubmit={handleSubmit}>
          <input
          className='inputcss'
          name='fname'
          placeholder='First Name'
          type='text'
          value={formData.fname}
          onChange={handleChange}
          required
          /><br/><br/>

          <input
          className='inputcss'
          name='lname'
          placeholder='Last Name'
          type='text'
         value={formData.lnamename}
          onChange={handleChange}
          required
          /><br/><br/>

          <input
          className='inputcss'
          name='email'
          placeholder='Email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
          /><br/><br/>

          <input
          className='inputcss'
          name='dob'
          placeholder='D.O.B'
          type='date'
          value={formData.dob}
          onChange={handleChange}
          required
          /><br/><br/>

          <input
          className='inputcss'
          name='pwd'
          placeholder='Password'
          type='password'
          value={formData.pwd}
          onChange={handleChange}
          required
          /><br/><br/>

          <input
          className='inputcss'
          name='cpwd'
          placeholder='Confirm Password'
          type='password'
          value={formData.cpwd}
          onChange={handleChange}
          required
          /><br/><br/>

          <button type='submit' className='submit-btn'>Register</button>

        </form>
    </div>
  )
}
