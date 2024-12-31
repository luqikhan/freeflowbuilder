/*

Flows Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
group             TEXT
nodes             JSON
edges             JSON
updatedAt         TIMESTAMP


*/

import { useEffect, useState, useCallback } from "react";
import { useEdgesState, useNodesState, addEdge} from "@xyflow/react";
import { nanoid } from "nanoid";
import useDebounce from "./useDebounce";

const useFlow = (flowId) => {

  const [flow, setFlow] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchFlow = async () => {
      try {
        const flows = JSON.parse(localStorage.getItem("flow_lite_projects")) || []
        const flowData = flows.find(e => e.id === flowId);
        if(flowData === null) return

        setFlow({id: flowData.id, name: flowData.name, group: flowData.group, updatedAt: flowData.updatedAt});
        setNodes(flowData.nodes);
        setEdges(flowData.edges);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlow();
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({...params, type: 'custom', animated: true, data: {color: "gray", strokeWidth: 1}}, eds)),
    [setEdges],
  );

  const addNode = (type, position) => {
    const id = nanoid(8)
    const label = type.charAt(0).toUpperCase() + type.slice(1)
    // Default node
    const newNode = {id: id, type: type, position: {x: position.x, y:position.y}, data: {label: label, color: "gray"}}
    setNodes(prev => {
      const updatedNodes = [...prev, newNode] 
      updateStorage({nodes: updatedNodes})
      return updatedNodes
    })
  }

  const changeName = (updatedName) => {
    setFlow(prev => ({...prev, name: updatedName}))
  }

  const updateNode = (nodeId, data) => {
    setNodes(prev => prev.map(node => {
      if(node.id === nodeId) {
        return {...node, data: {...node.data, ...data}}
      } 
      return node
    }))
  }

  const updateEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, ...data}
      } 
      return edge
    }))
  }

  const updateDataEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, data: {...edge.data, ...data}}
      } 
      return edge
    }))
  }
  
  // Update to localStorage on flow change
  const updateStorage = () => {

    const flows = JSON.parse(localStorage.getItem("flow_lite_projects"))
    const updatedFlows = flows.map((f) =>
      f.id === flowId ? {...f, ...flow, nodes: nodes, edges: edges, updatedAt: Date.now()} : f
    )
    localStorage.setItem("flow_lite_projects", JSON.stringify(updatedFlows))
  }

  const debounceUpdate = useDebounce(updateStorage, 400)

  useEffect(() => {
    debounceUpdate()
  }, [nodes, edges, flow])

  return {
    flow,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    changeName,
    onConnect,
    addNode,
    updateNode,
    updateEdge,
    updateDataEdge,
    loading, 
    error
  }
}

export default useFlow;