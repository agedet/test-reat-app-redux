import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='flex min-h-screen w-full'>
        <div className='hidden lg:flex items-center justify-center bg-black w-1/2 px-12'>
            <div className='max-w-md space-y-8 text-center text-primary-foreground '>
                <h1 className='text-4xl text-white font-bold tracking-tight'>
                    Welcome to DreepStore
                </h1>

                <p className='text-muted text-white'>
                    Africa's largest market place for swag and dreep products
                </p>
            </div>
        </div>

        <div className='flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-5 lg:px-8'>
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout