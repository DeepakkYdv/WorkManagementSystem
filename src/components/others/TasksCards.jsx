import React, { useContext, useEffect, useState } from 'react'
import AcceptTask from '../../TaskList/AcceptTask'
import NewTask from '../../TaskList/NewTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'
import { AuthContext } from '../../context/AuthContextProvider'


function TasksCards() {
  const {currentuser} = useContext(AuthContext);
 
  const [task,setTask] = useState([null]);
  useEffect(() => {
    if (currentuser && currentuser.Data) {
      setTask(currentuser.Data.Tasks);
    }
  }, [currentuser]);
  

  //filtring data from currentuser
  const newTasks = task.filter(e => e && e.Status === "New");
  const completedTasks = task.filter(e => e && e.Status === "Completed");
  const acceptedTasks = task.filter(e => e && e.Status === "Accepted");
  const failedTasks = task.filter(e => e && e.Status === "Failed");


  //console.log(newTasks)
  return (
    <div className="mt-10 flex flex-wrap justify-between gap-5">
    <div className="flex-1 min-w-[250px] md:w-[calc(25%-1.25rem)]">
      <NewTask data={newTasks} />
    </div>
    <div className="flex-1 min-w-[250px] md:w-[calc(25%-1.25rem)]">
      <CompleteTask data={completedTasks} />
    </div>
    <div className="flex-1 min-w-[250px] md:w-[calc(25%-1.25rem)]">
      <AcceptTask data={acceptedTasks} />
    </div>
    <div className="flex-1 min-w-[250px] md:w-[calc(25%-1.25rem)]">
      <FailedTask data={failedTasks} />
    </div>
  </div>
  
  )
}

export default TasksCards
