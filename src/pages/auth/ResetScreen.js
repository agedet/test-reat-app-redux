import React, { useState } from 'react'
   

function ResetScreen() {
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {password}

    const url = '/api/reset';

    const response = await fetch(url, formData);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='px-[20px] py-[20px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Reset Password </h4>

          <span className='py-4 text-md w-2/3 text-center text-gray-500'>
            welcome back, shop all the shelf
          </span>
        </div>

        <form onSubmit={handleSubmit} className='w-[300px] py-2 flex flex-col gap-[20px]'>
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

          <div>
            <label htmlFor='password' className='block text-[14px] font-bold mb-[5px]'>Confirm Password</label>
            <input 
              type='password' 
              name='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className='w-full px-[10px] py-[5px]' 
              placeholder='re-type password' 
              required
            />
          </div>

          <div>
            <button 
              type='submit' 
              className='w-full bg-black text-white rounded-[5px] py-[10px] text-[15px]'
            >
              Reset Password
            </button>
          </div>

          
        </form>
      </div>
    </div>
  )
}

export default ResetScreen