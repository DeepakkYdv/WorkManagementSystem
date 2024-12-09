import React from 'react'


function TaskList({data}) {

  //console.log(data)
  return (
    <div
  id="Tasklist"
  className="flex h-auto p-2 overflow-x-auto gap-5 mt-10 rounded-xl"
>
 { /*eslint-disable-next-line react/prop-types*/}
  {data?.map((task, index) => (
    <div
      key={index}
      className={`flex-shrink-0 h-[45vh] w-[75vw] md:w-[calc(25%-1.25rem)] ${
        task.Status === "Failed"
        ? "bg-red-500"
        : task.Status === "Completed"
        ? "bg-green-500"
        : task.Status === "Accepted" 
        ? "bg-yellow-500"
        : task.Status === "New"
        ? "bg-blue-500"
        : "bg-zinc-500"
      } rounded-xl text-white`}
    >
      {/* Task Header */}
      <div className="flex justify-between px-5 py-5">
        <h3 className="bg-red-500 rounded px-3 py-1 text-xs md:text-sm">
          {task.Priority}
        </h3>
        <h4 className="text-xs md:text-sm">{task.DueDate}</h4>
      </div>

      {/* Task Details */}
      <div className="flex flex-col justify-center px-5">
        <h2 className="mt-5 text-lg md:text-2xl font-semibold">
          {task.TaskName}
        </h2>
        <p className="text-xs md:text-sm mt-2 break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          facilis, omnis doloremque exercitationem fugiat atque!
        </p>
      </div>
      <div className={`w-full px-5 mt-10 rounded-lg`} >
     <button className={`${
        task.Status === "Failed"
        ? "bg-red-300"
        : task.Status === "Completed"
        ? "bg-green-300"
        : task.Status === "Accepted" 
        ? "bg-green-500"
        : task.Status === "New"
        ? "bg-yellow-500"
        : "bg-zinc-500"
      } w-full px-5 py-2 rounded-lg`}>
        { task.Status === "Failed"
        ? "Remark!"
        : task.Status === "Completed"
        ? "Excellent Work!"
        : task.Status === "Accepted" 
        ? "Compelete"
        : task.Status === "New"
        ? "Accept"
        : "bg-zinc-500"}</button>
   </div>
    </div>
  ))}
</div>

  )
}

export default TaskList
