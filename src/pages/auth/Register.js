import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  fullName: '',
  email: '',
  password: '',
}

function Register() {
  const [fullName, setFullName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [password2, setPassword2] = useState('');

  if (password !== password2) {
    console.log('Password does not match')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {fullName, email, password}
      const url = '/register';
      await fetch(url, formData);

      console.log(formData);
      alert('Account created successfully')
      
    } catch (error) {
      console.error(error);
      alert('Account creation failed')
      
    }

    




  }

  return (
    <div className='flex justify-center items-center'>
      <div className='border rounded-md px-[20px] py-[30px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Register</h4>

          <span className='py-4 text-md w-2/3 text-center text-gray-500'>
            welcome, shop all the shelf
          </span>
        </div>

        <form onSubmit={handleSubmit} className='w-[300px] py-2 flex flex-col gap-[20px]'>
          <div>
            <label htmlFor='fullName' className='block text-[14px] font-bold mb-[5px]'>Name</label>
            <input 
              type='text' 
              name='fullName' 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}
              className='w-full px-[10px] py-[10px]' 
              placeholder='enter full name' 
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-[14px] font-bold mb-[5px]'>Email</label>
            <input 
              type='email' 
              name='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-[10px] py-[10px]' 
              placeholder='enter email' 
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-[14px] font-bold mb-[5px]'>Password</label>
            <input 
              type='password' 
              name='password'  
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-[10px] py-[10px]' 
              placeholder='enter password' 
            />
          </div>

          <div>
            <label htmlFor='password2' className='block text-[14px] font-bold mb-[5px]'>Confirm Password</label>
            <input 
              type='password' 
              name='password2'  
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className='w-full px-[10px] py-[10px]' 
              placeholder='re-type password' 
            />
          </div>

          <div>
            <button 
              type='submit' 
              className='w-full bg-black text-white rounded-[5px] py-[10px] text-[15px]'
            >
              Create Account
            </button>
          </div>

          <span className='text-[14px] font-normal'>
            Already have an account? {' '} <Link className="text-[red] text-[14px] font-medium" to='/auth/login'>Login</Link>
          </span>
        </form>

      </div>
      
    </div>
  )
}

export default Register