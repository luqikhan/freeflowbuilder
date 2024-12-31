import React from 'react'
import FlowList from '../components/workspace/FlowList'
import { useOutletContext } from 'react-router-dom'

const AllFlows = () => {

  const {flows, addFlow, groups, deleteFlow, updateFlow} = useOutletContext()

  const sortByKey = (array, key) => {
    return array.sort((a, b) => b[key] - a[key])
  }
  // Get only 4 latest projects
  const recentProjects = sortByKey([...flows], 'updatedAt').slice(0,4)

  return (
    <div>
      <div className='mb-4'>
        <div className='text-xl font-semibold'>Flows</div>
        <div className='text-sm text-gray-500'> Create a new flow or modify your recent work.</div>
      </div>

      {/* Cards */}
      <FlowList flows={recentProjects} addFlow={addFlow} deleteFlow={deleteFlow} groups={groups} updateFlow={updateFlow}/>
      <hr className='my-8'/>
      <div className='mb-4'>
        <div className='text-xl font-semibold'>All</div>
        <div className='text-sm text-gray-500'> View, manage, or update your flows.</div>
      </div>

      {/* List */}
      <FlowList flows={flows} listDisplay deleteFlow={deleteFlow} groups={groups} updateFlow={updateFlow}/>
    </div>
  )
}

export default AllFlows