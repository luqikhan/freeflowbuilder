import React, { useEffect, useRef, useState } from 'react'
import {  LuTrash2 } from 'react-icons/lu'
import {  PiDotsThreeVertical, PiDotsThreeVerticalBold, PiPlusBold, PiXBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { colors } from '../colors'

const Groups = ({groups, addGroup, changeColor, deleteGroup, clearGroupInFlows}) => {

  const [newGroupName, setNewGroupName] = useState('')
  const [formActive, setFormActive] = useState(false)
  const formNameRef = useRef()

  const handleAddGroup = () => {
    if(newGroupName.length > 0) {
      addGroup(newGroupName)
      setFormActive(false)
      setNewGroupName('')
    }
  }

  const handleCencel = () => {
    setFormActive(false)
    setNewGroupName('')
  }

  useEffect(() => {

    if(formActive && formNameRef.current) {
      formNameRef.current.focus();
    }
  }, [formActive])

  return (
    <div>
      <div className="my-4 text-xs font-medium text-gray-500">Groups</div>

      {/* Group list */}
      {groups.map(group => <GroupItem key={group.id} group={group} changeColor={changeColor} deleteGroup={deleteGroup} clearGroupInFlows={clearGroupInFlows}/>)}

      {/* Group form */}
      {
        formActive &&
        <div className='flex mt-2 border rounded-md h-7 overflow-hidden bg-white'>
          <input ref={formNameRef} className='w-full p-2 outline-none' value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddGroup()}></input>
          <button onClick={handleAddGroup} className='border-l text-xs hover:bg-gray-50 active:bg-gray-100 px-2.5'>
            Add
          </button>
          <button onClick={handleCencel} className='border-l hover:bg-gray-50 active:bg-gray-100 px-1'>
            <PiXBold />
          </button>
        </div>
      }

      {/* Add group */}
      <button onClick={() => setFormActive(true)} className='flex items-center gap-1 mt-3 bg-white px-2 py-1 rounded-md border w-full justify-center text-xs hover:bg-gray-50 active:bg-gray-100'>
        <PiPlusBold />Add new group
      </button>

    </div>
  )
}

const GroupItem = ({group, changeColor, deleteGroup, clearGroupInFlows}) => {
  
  const [showMenu, setShowMenu] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const menuRef = useRef();

  const handleChangeColor = (e, color) => {
    e.stopPropagation()
    if(colors[color]) {
      changeColor(group.id, color)
      setShowMenu(false)
    }
  }

  const handleDelete = () => {
    deleteGroup(group.id)
    clearGroupInFlows(group.name)
  }

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }

  },[])

  useEffect(() => {
    setSelectedColor(group.color)
  }, [group])

  return(
    <div key={group.id} className='flex items-center justify-between my-1'> 
      <NavLink className="[&.active]:bg-gray-100 hover:bg-gray-100 px-2 py-1 rounded-md flex items-center gap-2" to={`group/${group.name}`} >
        <div className={`h-2.5 w-2.5 mx-0.5 rounded-full ${colors[group.color].previewClass}`}></div> 
        {group.name}
      </NavLink>
      <button ref={menuRef} className='p-1 relative group' onClick={() => setShowMenu(true)}>
        <PiDotsThreeVertical className='group-hover:hidden'/>
        <PiDotsThreeVerticalBold className='hidden group-hover:block' />
        {showMenu && 
        <div className='absolute top-5 right-0 z-10 w-28'>
          <div className='bg-white border shadow-md rounded-md text-xs flex flex-col'>
            <div className='p-3 grid grid-cols-4 gap-1.5'>
              {Object.entries(colors).map(([key, val]) => {
                return (
                <div key={key} className={`h-4 w-4 rounded-full ${val.previewClass} flex items-center justify-center group/color` + (selectedColor === key && ' border')} onClick={(e) => handleChangeColor(e, key)}>
                </div>
              )})}
            </div>
            <hr className='w-full my-0'/>
            <div className='p-3 flex items-center justify-end gap-1 hover:bg-gray-100 active:bg-gray-200 w-full text-right' onClick={handleDelete}><LuTrash2 /> Delete</div>
          </div>
        </div>
        }
      </button>
    </div>
  )
}

export default Groups