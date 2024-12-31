import React, {useMemo} from 'react'
import { ReactFlow} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import nodesTypes from '../nodes'
import edgeTypes from '../edges'


const FlowViewer = ({nodes, edges}) => {

  const customNodes = useMemo(() => 
    Object.fromEntries(
      Object.entries(nodesTypes).map(([key, val]) => [key, val.component])
    ), 
    [nodesTypes]
  );

  const previewNodes = nodes.map(node => ({...node, data: {...node.data, pointers : 'none'}, selected: null }))

  return (
    <div className='h-full w-full p-5 pt-0'>
      <ReactFlow
          nodes={previewNodes}
          edges={edges}
          nodeTypes={customNodes}
          edgeTypes={edgeTypes}
          fitView
          edgesFocusable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          draggable={false}
          elementsSelectable={false}
          fitViewOptions={{ padding: 0.4,maxZoom:1.4}}
          defaultViewport={{zoom: 1.4, x: 0, y: 0}}
          >
      </ReactFlow>

    </div>
  )
}

export default FlowViewer