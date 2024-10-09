import React from 'react'
import avatar from '../../assets/avatar.png'

function UpdateProfile() {
  return (
    <div className='flex justify-center items-center'>
      <div className='border px-[20px] py-[30px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Update Profile</h4>

          <span className='py-2 text-md w-2/3 text-center text-gray-500'>
            make your update to shop safely on the go...
          </span>
        </div>

        <form className='py-2 flex flex-col gap-[20px]'>
          <div className='flex justify-center items-center py-4'>
            <label htmlFor='profile'>
                <img src={avatar} alt='avatar' className='h-[100px] w-[100px]' />
            </label>

            <input type='file' id='profile' name='profile' />
          </div>

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
                Update Profile
            </button>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default UpdateProfile;