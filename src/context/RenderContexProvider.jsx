import React from "react";

import { useState } from "react";
//import NewTask from "../TaskList/NewTask";
import TaskList from "../TaskList/TaskList";
export const RenderContext = React.createContext();

// eslint-disable-next-line react/prop-types
const RenderContextProvider = ({children}) => {

    const [clickedCards, setClickedCards] = useState(<TaskList/>);
    const [allTask,setAlltask] = useState([])

    const [taskStatusColors, setTaskStatusColors] = useState({
      compelete: 'blue-500',
      accept: 'yellow-500',
      new: 'green-500',
      failed: 'red-500',
    });
   
  return (
    <div>
     <RenderContext.Provider value={{clickedCards,setClickedCards,allTask,setAlltask,taskStatusColors}}>
        { children }
     </RenderContext.Provider>
    </div>
  )
}

export default RenderContextProvider
