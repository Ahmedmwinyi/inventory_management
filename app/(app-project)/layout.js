import Header from '@/components/dashboard/header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='ml-60 w-full bg-slate-100'>
        <Header />
        {children}
        </main>
    </div>
  )
}
