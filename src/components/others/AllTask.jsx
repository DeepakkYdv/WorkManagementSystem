import React, { useContext, useEffect} from 'react'
import { RenderContext } from '../../context/RenderContexProvider';

function AllTask() {

  const {allTask,setAlltask} = useContext(RenderContext)
  
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("employee"));
    setAlltask(data)

}, []);
 
  return (
    <div id='Tasklist' className="flex flex-col overflow-y-auto gap-5 w-full h-auto bg-zinc-700 mt-10 py-6 px-4 md:py-10 md:px-12 rounded-xl">
     <div className="flex flex-wrap bg-zinc-300 w-full justify-between items-center px-4 py-3 rounded text-sm md:text-base">
      <h2 className="flex-1 md:flex-[2] text-center md:text-left font-semibold">Employee Name(ID)</h2>
      <h3 className="flex-1 md:flex-[1] text-center md:text-left font-semibold">Task</h3>
      <h3 className="flex-1 md:flex-[1] text-center md:text-left font-semibold">Status</h3>
    </div>
{allTask!=null ? (
  allTask.map((emp) => (
   emp?.Tasks?.map((Task,index)=>(
    <div key={index} className={`flex ${
      Task.Status === "Failed"
        ? "bg-red-500"
        : Task.Status === "Completed"
        ? "bg-green-500"
        : Task.Status === "Accepted" 
        ? "bg-yellow-500"
        : Task.Status === "New"
        ? "bg-blue-500"
        : "bg-zinc-500"
    } w-full justify-between px-5 py-3 rounded`}>
    <h2 className="flex-1 md:flex-[2] text-center md:text-left font-semibold">{emp.Name}({emp.EmployeeID})</h2>
    <h3 className="flex-1 md:flex-[1] text-center md:text-left font-semibold">{Task.TaskName}</h3>
    <h3 className="flex-1 md:flex-[1] text-center md:text-left font-semibold">{Task.Status}</h3>
  </div>
   ))
  ))
) : (
  <p>No Task available</p> // Fallback if data is not an array
)}
      
    </div>
  )
}

export default AllTask
