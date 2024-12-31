import React, { useEffect, useRef, useState } from 'react'
import { LuTrash2 } from 'react-icons/lu';
import { PiDotsThreeVertical, PiDotsThreeVerticalBold } from 'react-icons/pi'

const Actions = ({flow, deleteFlow, groups, updateFlow}) => {
  const [position, setPosition] = useState('bottom')
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef();

  const handleDelete = () => {
    deleteFlow(flow.id)
  }

  const handleShowMenu = (e) => {
    if(document.documentElement.clientHeight - e.clientY < 210) {
      setPosition('bottom')
    } else {
      setPosition('top')
    }
    setShowMenu(true)
  }

  const handleChangeGroup = (e, group) => {
    e.stopPropagation()
    updateFlow(flow.id, {group: group})
    setShowMenu(false)
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

  return (
    <div className='absolute bottom-1 right-1' ref={menuRef}>
        <button  className='p-1 relative group' onClick={handleShowMenu}>
        <PiDotsThreeVertical className='group-hover:hidden'/>
        <PiDotsThreeVerticalBold className='hidden group-hover:block' />
        </button>
        {showMenu && 
        <div className={'absolute min-w-32 right-0 z-10 w-fit ' + (position === 'bottom' ? 'bottom-6' : 'top-6')}>
          <div className='bg-white border shadow-md rounded-md text-xs flex flex-col'>
            <div className='py-2 px-3 flex flex-col items-end font-semibold bg-gray-50 border-b'>Select group</div>
            <div className='p-2 py-2 flex flex-col items-end max-h-32 overflow-y-auto gap-1'>
              {/* No group message */}
              { groups.length === 0 && 
                <div className='text-xs text-gray-500 font-normal italic my-1 text-center'>
                  no groups
                </div>
              }
              {groups.map(group => (
                <button key={group.name} className={`hover:bg-gray-100 rounded text-nowrap px-2 py-0.5 ` + (group.name === flow.group && ' font-semibold bg-gray-100')} onClick={(e) => handleChangeGroup(e, group.name)}>
                  {group.name}
                </button>
              ))}
            </div>
            <hr className='w-full my-0'/>
            <button className='p-3 flex items-center justify-end gap-1 hover:bg-gray-100 active:bg-gray-200 w-full text-right' onClick={handleDelete}><LuTrash2 /> Delete flow</button>
          </div>
        </div>
        }

    </div>
  )
}

export default Actions