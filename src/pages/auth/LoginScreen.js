import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {email, password}

    const url = '/api/login';

    const response = await fetch(url, formData);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='px-[20px] py-[20px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Login</h4>

          <span className='py-4 text-md w-2/3 text-center text-gray-500'>
            welcome back, shop all the shelf
          </span>
        </div>

        <form className='w-[300px] py-2 flex flex-col gap-[20px]'>
          <div>
            <label htmlFor='email' className='block text-[14px] font-bold mb-[5px]'>Email</label>
            <input 
              type='email' 
              name='email'  
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-[10px] py-[5px]' 
              placeholder='enter email' 
              required
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-[14px] font-bold mb-[5px]'>Password</label>
            <input 
              type='password' 
              name='password'  
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-[10px] py-[5px]' 
              placeholder='enter password' 
              required
            />
          </div>

          <span className='w-full text-end'>
            <Link className="text-[red] text-[14px] font-medium" to='/reset'>
              forgot password?
            </Link>
          </span>

          <div>
            <button 
              type='submit' 
              className='w-full bg-black text-white rounded-[5px] py-[10px] text-[15px]'
            >
              Login
            </button>
          </div>

          <span className='text-[14px] font-normal'>
            Dont have an account? {' '} <Link className="text-[red] text-[14px] font-medium" to='/auth/register'>Create Account</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen