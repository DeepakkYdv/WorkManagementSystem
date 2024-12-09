import React, { useContext } from 'react'
import { RenderContext } from '../context/RenderContexProvider'
import TaskList from './TaskList'

function FailedTask({data}) {
  const {setClickedCards} = useContext(RenderContext)

  const handleClick =()=>{
  setClickedCards(<TaskList data ={data}/>)
  }
  return (
    <div className='bg-red-400 px-10 py-8 rounded-lg ' onClick={handleClick}>
        <h2 className='text-3xl font-semibold'>{data.length}</h2>
        <h1 className='text-xl font-medium'>Failed Task</h1>
       </div>
  )
}

export default FailedTask
