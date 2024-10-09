import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminheader from './header'
import AdminSideBar from './sidebar'

function AdminLayout() {
  return (
    <div className='flex min-h-screen w-full'>
        {/* admin sidebar */}
        <AdminSideBar />
        <div className='flex flex-1 flex-col'>
            <Adminheader />
            <main className='flex-1 flex bg-muted/40 md:p-5'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AdminLayout