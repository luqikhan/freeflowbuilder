import React, {useEffect, useState} from 'react'
import { LuTrash } from 'react-icons/lu'
import { colors } from '../colors'

const NodeEdit = ({node, updateNode, deleteElements}) => {

  const [label, setLabel] =useState("")
  const [selectedColor, setSelectedColor] = useState("")

  const handleColorChange = (color) => {
    setSelectedColor(color)
    updateNode(node.id, {color: color})
  }

  const handleLabelChange = (e) => {
    const value = e.target.value
    setLabel(value)
    updateNode(node.id, {label: value})
  }

  const handleDeleteNode = () => {
    deleteElements({nodes: [{id: node.id}]})
  }

  useEffect(() => {

    if(node.data) {
      setLabel(node.data.label)
      setSelectedColor(node.data.color)
    }

  }, [node])

  return (
    <div className='flex flex-col gap-4 p-4'>

      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Label</label>
        <input type="text" value={label} onChange={handleLabelChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
        <div className='flex items-center gap-1'>
          {Object.keys(colors).map(color => 
            <button key={color} onClick={() => handleColorChange(color)} className={'h-5 w-5 rounded' + (` bg-${color}-400 hover:bg-${color}-500`) + (selectedColor === color && " ring-[2px] ring-gray-300 border-2 border-white")}></button>
          )}
        </div>
      </div>

      <div >
        <button className='bg-white border hover:bg-gray-100 rounded px-2 py-1.5' onClick={handleDeleteNode}>
          <LuTrash />
        </button>
      </div>

    </div>
  )
}

export default NodeEdit