import React from 'react'
import FlowViewer from '../components/view/FlowViewer'
import { useParams } from 'react-router-dom'
import useFlow from '../hooks/useFlow'
import { ReactFlowProvider } from '@xyflow/react'
import ViewportControls from '../components/editor/ViewportControls'

const View = () => {

  const { flowId } = useParams()
  const { flow, nodes, edges, loading } = useFlow(flowId)

  if(loading) return 
  if(!flow) return <div>Not found page</div>

  return (
    <div className='h-screen relative bg-gray-50 select-none'>
        <div className='absolute top-6 left-6'>
            <div className='font-semibold text-lg'>{flow.name}</div>
        </div>
        <ReactFlowProvider>
            <FlowViewer nodes={nodes} edges={edges}/>
          <ViewportControls />
        </ReactFlowProvider>
      </div>
  )
}

export default View