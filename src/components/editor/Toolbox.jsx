import React, { useEffect, useState, useCallback } from 'react'
import { useKeyPress, useOnSelectionChange, useReactFlow } from '@xyflow/react'
import NodeEdit from './NodeEdit'
import TextEdit from './TextEdit'
import EdgeEdit from './EdgeEdit'
import NodeSelect from './NodeSelect'
import { PiPlusBold, PiTextTBold } from 'react-icons/pi'

const Toolbox = ({addNode, updateNode, updateEdge, updateDataEdge}) => {

  const [nodeSelection, setNodeSelection] = useState(false)
  const [selected, setSelected] = useState({node: null, type: null})
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);
  const { screenToFlowPosition, deleteElements} = useReactFlow()
 

  const spacePressed = useKeyPress('Space');
  const escPressed = useKeyPress('Escape');

  const handleShowNodeSelection = () => {
    setSelected({node: null, type: null})
    setNodeSelection(prev => !prev)
  }

  const handleAddElement = (type) => {
    // Cacluclate position of the flow
    // When added by click/tap add new node on fixed position just right to the toolbox
    const position = screenToFlowPosition({x: 350,y: 100})
    addNode(type, position)
  }

  const handleAddAnnotation = () => {
    const position = screenToFlowPosition({x: 350,y: 100})
    addNode('annotation', position)
  }

  // the passed handler has to be memoized, otherwise the hook will not work correctly
  const onChange = useCallback(({ nodes, edges }) => {
    setSelectedNodes(nodes);
    setSelectedEdges(edges);
  }, []);
  
  useOnSelectionChange({onChange});

  useEffect(() => {
    // Get last selected node or edge
    if(selectedNodes.length > 0) {
      const lastSelectedNode = selectedNodes.at(-1)
      const isTextNode = lastSelectedNode.type === 'annotation'
      setNodeSelection(false)
      setSelected({node: selectedNodes.at(-1), type: isTextNode ? 'text' : 'node'})
    } else if(selectedEdges.length > 0) {
      setNodeSelection(false)
      setSelected({node: selectedEdges.at(-1), type: 'edge'})
    } else {
      setSelected({node: null, type: null})
    }

  }, [selectedNodes, selectedEdges])

  useEffect(() => {
    return() => {
      setSelected({node: null, type: null})
    }

  }, [])

  useEffect(() => {

    if(spacePressed) {
      setNodeSelection(prev => !prev)
      setSelected({node: null, type: null})
    } 

    if(escPressed) {
      setNodeSelection(false)
    }

  },[spacePressed, escPressed] )

  return (
    <div className={'absolute left-4 top-[72px] overflow-hidden flex items-start z-10 ' + (nodeSelection && 'bottom-[74px]')}>

      {/* Toggle node adding  */}
      <div className='bg-white border p-1 rounded-md flex flex-col gap-1'>
        <button className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-2'  onClick={handleShowNodeSelection} >
          <PiPlusBold size={16}/> 
        </button>
        <button className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-2' onClick={handleAddAnnotation}>
          <PiTextTBold size={16}/> 
        </button>
      </div>


      {/* Node adding  */}
      { nodeSelection && <NodeSelect handleAddElement={handleAddElement} />}
      
      {/* Node and edge editor */}
      {selected.node && 
        <div className='bg-white rounded-lg mt-0 ml-2 border w-66'>
          {selected.type === "text" && <TextEdit node={selected.node} updateNode={updateNode} deleteElements={deleteElements}/> }
          {selected.type === "node" && <NodeEdit node={selected.node} updateNode={updateNode} deleteElements={deleteElements}/> }
          {selected.type === "edge" && <EdgeEdit edge={selected.node} updateEdge={updateEdge} updateDataEdge={updateDataEdge} deleteElements={deleteElements} /> }
        </div>
      }
    </div>
  )
}

export default Toolbox