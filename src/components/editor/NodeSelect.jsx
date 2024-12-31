import React, { useEffect, useMemo, useState } from 'react'
import nodesTypes from '../nodes'
import { BiSearch } from 'react-icons/bi'
import { useDragDrop } from '../../context/DragDropContext'

const NodeSelect = ({handleAddElement}) => {

  const [filteredNodes, setFilteredNodes] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [nodeGroupSelected, setNodeGroupSelected] = useState('wireframe')

  const {setType} = useDragDrop()

  const handleOnDragStart = (e, nodeType) => {
    setType(nodeType);
    e.dataTransfer.effectAllowed = 'move';
  }

  useEffect(() => {

    if(filterValue) {
      const filtereNodes = Object.keys(nodesTypes).filter(node => node.includes(filterValue))
      setFilteredNodes(filtereNodes)
      setNodeGroupSelected('')
    } else {
      setFilteredNodes([])
      setNodeGroupSelected('wireframe')
    }

  }, [filterValue])

  useEffect(() => {

    if(!filterValue) {
      const filtereNodes = Object.keys(nodesTypes).filter(node => nodesTypes[node].group === nodeGroupSelected)
      setFilteredNodes(filtereNodes)
    }

  }, [nodeGroupSelected])

  return (
    <div className='bg-white w-66 rounded-lg mt-0 ml-2 border p-4 h-full overflow-hidden flex flex-col gap-3 '>
     <div className='relative pl-8 border rounded-md p-px py-1'>
        <div className='absolute top-0 bottom-0 left-2 flex items-center'>
          <BiSearch className='text-gray-500'/>
        </div>
        <input className='w-full outline-none text-sm placeholder:text-gray-500' placeholder='Search' type='text' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
      </div>
      <div className="bg-gray-100 p-0.5 flex gap-px rounded-md items-stretch h-7 flex-none">
        {['wireframe', 'shape', 'social'].map((item) => (
          <button key={item} onClick={() => setNodeGroupSelected(item)} className={`rounded text-xs font-semibold flex-auto hover:bg-white ${nodeGroupSelected === item ? 'bg-white' : 'text-gray-500'}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      {nodeGroupSelected === 'social' && <>
        <div className='text-xs border p-1 px-2 rounded bg-gray-50'>
        All brand icons and logos are the property of their respective owners.
        </div>
      </>}
      <div className='text-xs  text-gray-500'> 
          Tap on a node or drag and drop it to add to the flow
      </div>
      <div className='overflow-y-scroll'>
        <div className='grid grid-cols-2 gap-2 justify-items-stretch'>
          {filteredNodes.length > 0 ? <> 
            {filteredNodes.map((element, i) => {
            const node = nodesTypes[element];  
            return (
              <button key={i} 
                className='bg-gray-50 p-4 pb-2 flex flex-col items-center relative rounded  hover:bg-gray-100 overflow-hidden group' 
                onClick={() => handleAddElement(element)}
                onDragStart={(e) => handleOnDragStart(e, element)}
                draggable
                >
                <div className={' ' + (node.group !== "social" && 'scale-90')}>
                  {React.createElement(node.component, {key: element, data: {color: "gray", preview: true}})}
                </div>
                <div className='font-semibold text-xs capitalize my-1 group-hover:text-blue-700'>{node.label}</div>
              </button>
            )})} </>
            : 
            <div className='flex flex-col items-center justify-center text-sm h-40 col-span-2'>
              <div className='font-medium'>No nodes found</div>
              <small className='text-gray-500'>Try searching for a different node name</small>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default NodeSelect