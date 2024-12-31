import React from 'react'
import FlowList from '../components/workspace/FlowList'
import { useOutletContext, useParams } from 'react-router-dom'

const AllFlows = () => {

  const { groupName } = useParams()
  const {flows, groups, deleteFlow, updateFlow} = useOutletContext()

  // Get only 4 latest projects
  const flowsByGroup = flows.filter(flow => flow.group === groupName)

  return (
    <div>
      <div className='mb-4'>
        <div className='text-xl font-semibold'>Group</div>
        <div className='text-sm text-gray-500'> View, manage, or update your flows.</div>
      </div>
      <FlowList flows={flowsByGroup} listDisplay deleteFlow={deleteFlow} groups={groups} updateFlow={updateFlow}/>
    </div>
  )
}

export default AllFlows