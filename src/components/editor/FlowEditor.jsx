import React, {useCallback, useMemo} from 'react'
import { ReactFlow, Background, useReactFlow} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import nodesTypes from '../nodes'
import edgeTypes from '../edges'
import { useDragDrop } from '../../context/DragDropContext'
import { useAppStore } from '../../store/app'
import { useShallow } from 'zustand/shallow'

const FlowEditor = ({nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode}) => {

  const { screenToFlowPosition } = useReactFlow();
  const {type} = useDragDrop();

  const { showGrid, snapToGrid} = useAppStore(useShallow((state) => ({showGrid: state.showGrid, snapToGrid: state.snapToGrid})))

  const customNodes = useMemo(() => 
    Object.fromEntries(
      Object.entries(nodesTypes).map(([key, val]) => [key, val.component])
    ), 
    [nodesTypes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
 
  const onDrop = useCallback((event) => {
    event.preventDefault();
 
    if (!type) {
      return;
    }

    const position = screenToFlowPosition({
      x: event.clientX - 40,
      y: event.clientY - 35,
    });

    addNode(type, position)
    },[screenToFlowPosition, type]);

  return (
    <div className='h-full w-full p-5 pt-0'>
      <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={customNodes}
          edgeTypes={edgeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          fitViewOptions={{ padding: 0.4,maxZoom:1.4}}
          defaultViewport={{zoom: 1.4, x: 0, y: 0}}
          snapToGrid={snapToGrid}
          >
        {showGrid && <Background gap={15} /> }
      </ReactFlow>

    </div>
  )
}

export default FlowEditor