import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-auto'>
      <Header/>
     <AllTask/>
     <CreateTask/>
    </div>
  )
}

export default AdminDashboard
