import React from 'react'
import { PiPlusBold } from 'react-icons/pi'
import {  useNavigate } from 'react-router-dom'
import Card from './Card'
import Actions from './Actions'
import { colors } from '../colors'

const FlowList = ({flows, addFlow, listDisplay = false, deleteFlow, groups, updateFlow}) => {

  const navigate = useNavigate()

  const handleAddNewFlow = async () => {
    const newFlow = await addFlow();
    navigate(`/editor/${newFlow.id}`)
  }

  const handleOpenFlow = (flowId) => {
    navigate(`/editor/${flowId}`)
  }

  const groupColor = (flowGroup) => {
    const group = groups.find(group => group.name === flowGroup)
    if(group) {
      const color = group.color
      return colors[color].bgClass + ' border ' + colors[color].borderClass
    }

    return ''
  }

  return (
    <div>
    {listDisplay ? 
    <>
    {/* List */}
      <div className='flex flex-col gap-1'>
      {
        flows.length === 0 && <div className='text-sm text-gray-500 font-normal mt-2'>Empty list</div>
      }
      {flows.map(flow => 
      <div className='relative' key={flow.id}>
        <div onClick={() => handleOpenFlow(flow.id)}  className='border rounded-md p-2 px-4 hover:border-blue-600 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <div className='text-sm font-semibold'>
              {flow.name}
            </div>
            <div className={'text-xs py-0.5 px-1 rounded ' + groupColor(flow.group)}>
              {flow.group}
            </div>
          </div>
        </div>
        <Actions flow={flow} deleteFlow={deleteFlow}  groups={groups} updateFlow={updateFlow}/>
        </div>
      )}
      </div>

    </> : 
    <>
    {/* Cards */}
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <button onClick={handleAddNewFlow} className='border rounded-md h-[172px] p-2 w-full flex flex-col items-center justify-center gap-2 hover:border-blue-500'>
          <PiPlusBold />
          <div className='text-xs font-semibold '>
            Create new
          </div>
        </button>
        {flows.map(flow => <Card key={flow.id} flow={flow} deleteFlow={deleteFlow} groups={groups}  updateFlow={updateFlow}/>)}
      </div>
    </>}
    </div >
  )
}



export default FlowList