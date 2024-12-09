import React, { useContext } from 'react'
import Header from '../others/Header'
import TasksCards from '../others/TasksCards'
import { RenderContext } from '../../context/RenderContexProvider'


function Employeeashboard() {
  const {clickedCards} = useContext(RenderContext);
  return (
    <div className='p-10 bg-[#1C1C1C] h-auto'>
      <Header />
      <TasksCards/>
     {clickedCards}  
    </div>
  )
}

export default Employeeashboard
