import React, { useMemo} from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactFlow} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import nodesTypes from '../nodes'
import edgeTypes from '../edges'
import TimeAgo from 'react-timeago'
import { motion } from "framer-motion"

const Card = ({flow}) => {

  const navigate = useNavigate()

  const customNodes = useMemo(() => 
    Object.fromEntries(
      Object.entries(nodesTypes).map(([key, val]) => [key, val.component])
    ), 
    [nodesTypes]
  );

  // Clear nodes for preview mode
  const previewNodes = flow.nodes.map(node => ({...node, data: {...node.data, pointers : 'none'}, selected: null }))

  const handleOpenFlow = () => {
    navigate(`/editor/${flow.id}`)
  }

 

  return(

    <div className='relative'>
    <div key={flow.id} className='border rounded p-1.5 select-none hover:border-blue-600 cursor-pointer' onClick={handleOpenFlow}>
        <div className='w-full h-28 bg-gray-50 relative'>
          <motion.div 
          initial={{ opacity: 0}} 
          animate={{ opacity: 1}} 
          transition={{ duration: .1, delay: 0.1 }} className='w-full h-full'>
          <ReactFlow
            fitView
            nodes={previewNodes}
            edges={flow.edges}
            nodeTypes={customNodes}
            edgeTypes={edgeTypes}
            elevateEdgesOnSelect={false}
            edgesReconnectable={false}
            edgesFocusable={false}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            draggable={false}
            elementsSelectable={false}
            selectNodesOnDrag={false}
            panOnDrag={false}
            fitViewOptions={{ padding: 0.5, maxZoom:20}}
            minZoom={false}
            >
          </ReactFlow>
            </motion.div>
        </div>
        <div className='px-1.5'>
          <div className='text-xs text-gray-500 mt-2'>
            <TimeAgo date={flow.updatedAt}/>
          </div>
          <div className='flex items-center justify-between gap-2'>
          <div className='text-sm font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden pr-4'>
            {flow.name}
          </div>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Card;