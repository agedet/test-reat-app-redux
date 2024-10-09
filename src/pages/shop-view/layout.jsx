import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopHeader from './header'

function ShopLayout() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      {/* <ShopHeader /> */}
      <ShopHeader />
      <main className='flex flex-col w-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default ShopLayout