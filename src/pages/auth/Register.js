import React from 'react'

function Register() {
  return (
    <div className='flex justify-center items-center'>
      <div className='border rounded-md px-[20px] py-[30px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Register</h4>

          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            welcome, shop all the shelf
          </span>
        </div>

        <form className='py-2 flex flex-col gap-[20px]'>
          <div>
            <label htmlFor='email' className='block mb-[5px]'>Email</label>
            <input type='email' name='email'  className='px-[10px] py-[5px]' placeholder='enter email' />
          </div>

          <div>
            <label htmlFor='password' className='block mb-[5px]'>Password</label>
            <input type='password' name='password'  className='px-[10px] py-[5px]' placeholder='enter password' />
          </div>

          <div>
            <button type='submit' className='w-full bg-black text-white rounded-[5px] py-[15px] text-[15px]'>
              Create Account
            </button>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default Register