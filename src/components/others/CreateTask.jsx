import React, { useContext, useState } from 'react'
import { updateData } from '../../DataBase/LocalStorage';
import { RenderContext } from '../../context/RenderContexProvider';

function CreateTask() {
  const [assignTo,setAssignto] = useState('');
  const [taskTitle,setTasktitle] = useState('');
  const [DueDate, setDuedate] = useState('');
  const [empId, setEmpId] = useState('');

  const {setAlltask} = useContext(RenderContext)

  
  const handleStorageChange = () => {
    const updatedData = JSON.parse(localStorage.getItem("employee"));
  setAlltask(updatedData)

  };


  const newTask = {TaskName:taskTitle,DueDate:DueDate, Status:"New"}
  const handleSubmit = () =>{
   if(assignTo&&taskTitle&&DueDate&&empId)
    {
      updateData(newTask,empId)
      alert("Task Assigned")
    } 
    else{
      alert("Make sure! you entred all data fields")
    }
    setAssignto("")
      setDuedate("")
        setEmpId('')
        setTasktitle("")
      
  }

  return (
    <>
    <div className='flex items-center justify-center font-mono text-white w-full bg-zinc-700 mt-10 py-5 px-5 text-center md:px-12 rounded-xl md:bg-black md:flex-row"'>
      <h1 className='text-xl md:text-3xl'>Assign a New Task to Your Team</h1>
    </div>
    <div className="flex flex-col w-full bg-zinc-700 mt-10 py-10 px-6 md:px-12 rounded-xl md:bg-black md:flex-row">
  {/* Left Section */}

  <div className="w-full md:w-1/2 flex py-5 px-4 md:px-8 md:flex-none">
    <form onSubmit={handleSubmit}  className="w-full">
      <h3 className="text-white font-semibold text-lg md:text-xl">Task Title</h3>
      <input
        onChange={(e)=>setTasktitle(e.target.value)}
        value={taskTitle}
        placeholder="Task Headline"
        className="px-2 py-1 w-full rounded mb-4 md:mb-5 outline-none"
      />

      <h3 className="text-white font-semibold text-lg md:text-xl">Date</h3>
      <input
        onChange={(e)=>setDuedate(e.target.value)}
        value={DueDate}
        type="date"
        className="px-2 py-1 w-full rounded mb-4 md:mb-5 outline-none"
      />

      <h3 className="text-white font-semibold text-lg md:text-xl">Assign To</h3>
      <input
        onChange={(e)=>setAssignto(e.target.value)}
        value={assignTo}
        type="text"
        placeholder="Employee Name"
        className="px-2 py-1 w-full rounded mb-4 md:mb-5 outline-none"
      />

      <h3 className="text-white font-semibold text-lg md:text-xl">Employee Id</h3>
      <input
        onChange={(e)=>setEmpId(e.target.value)}
        value={empId}
        placeholder="101 , 102 etc"
        className="px-2 py-1 w-full rounded outline-none"
      />
    </form>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-8">
    <h3 className="text-white font-semibold text-lg md:text-xl">Description</h3>
    <textarea
      className="px-2 py-1 w-full rounded h-32 md:h-[70%] outline-none mb-4"
    />
    <button onClick={() => {handleSubmit(); handleStorageChange() }}    className="py-3 w-full rounded bg-green-500 text-white mt-3 text-lg md:text-xl font-semibold">
      Create Task
    </button>
  </div>
</div>
</>
  )
}
export default CreateTask
