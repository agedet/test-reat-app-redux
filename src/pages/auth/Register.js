import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LuLoader } from 'react-icons/lu';
// import PasswordStrengthMeter from '../../components/PasswordStrengthMeter';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== password2) {
        console.log('Password does not match');
        // toast.error('Password does not match')
      }
      const url = 'http://localhost:4000/api/auth/register';
      const response = await axios.post(url, {fullName, email, password});

      console.log(response);
      toast.success('Account created successfully');

      navigate('/verify-email');
      
    } catch (error) {
      console.error(error);
      toast.error('Account creation failed')
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='border rounded-md px-[20px] py-[30px]'>
        <div className='flex flex-col items-center'>
          <h4 className='text-3xl font-bold'>Register</h4>

          <span className='py-2 text-md w-2/3 text-center text-gray-500'>
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
              className='w-full px-[10px] py-[5px]' 
              placeholder='enter full name' 
              required
            />
          </div>

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

            {/* {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>} */}
          </div>

          <div>
            <label htmlFor='password2' className='block text-[14px] font-bold mb-[5px]'>Confirm Password</label>
            <input 
              type='password' 
              name='password2'  
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className='w-full px-[10px] py-[5px]' 
              placeholder='re-type password' 
              required
            />
          </div>

          {/* <PasswordStrengthMeter password={password} /> */}

          <div>
            <button 
              type='submit' 
              className='w-full bg-black text-white rounded-[5px] py-[10px] text-[15px]'
              // disabled={isLoading}
            >
              {/* {isLoading ? <LuLoader className='animate-spin mx-auto' size={24} /> : "Create Account"} */}
              Create Account
            </button>
          </div>

          <span className='text-[14px] font-normal'>
            Already have an account? {' '} 
            <Link 
              className="text-[red] text-[14px] font-medium hover:underline" 
              to='/auth/login'
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register