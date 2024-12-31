import React from 'react'
import Toolbox from '../components/editor/Toolbox'
import FlowEditor from '../components/editor/FlowEditor'
import Nav from '../components/editor/Nav'
import { useParams } from 'react-router-dom'
import useFlow from '../hooks/useFlow'
import { ReactFlowProvider } from '@xyflow/react'
import { DDProvider } from '../context/DragDropContext' 
import GridControls from '../components/editor/GridControls'
import ViewportControls from '../components/editor/ViewportControls'

const Editor = () => {

  const { flowId } = useParams()
  const { flow, addNode, updateNode, updateEdge, updateDataEdge, changeName, nodes, edges, onNodesChange, onEdgesChange, onConnect,  loading } = useFlow(flowId)

  if(loading) return 
  if(!flow) return <div>Not found page</div>

  return (
    <div>
      <div className='h-screen relative bg-gray-50 select-none'>
        <Nav flow={flow} changeName={changeName}/>
        <ReactFlowProvider>
          <DDProvider>
            <Toolbox addNode={addNode} updateNode={updateNode} updateEdge={updateEdge} updateDataEdge={updateDataEdge}/>
            <FlowEditor nodes={nodes} addNode={addNode} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} />
          </DDProvider>
          <GridControls />
          <ViewportControls />
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default Editor