import React, { createContext, useState, useContext } from "react";

const DragDropContext = createContext()

export const DDProvider = ({children}) => {
  const [type, setType] = useState(null)

  return(
    <DragDropContext.Provider value={{type, setType}}>
      {children}
    </DragDropContext.Provider>
  )
}

export default DragDropContext;

export const useDragDrop = () => {
  return useContext(DragDropContext);
}