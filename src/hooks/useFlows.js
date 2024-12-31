/*

Flow Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
group             TEXT
nodes             JSON
edges             JSON
updatedAt         TIMESTAMP


*/
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { initialFlows } from "../data/initialFlows";

const useFlows = () => {

  const [flows, setFlows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const storageFlows = JSON.parse(localStorage.getItem("flow_lite_projects"))
        if(storageFlows === null) { 
          localStorage.setItem("flow_lite_projects", JSON.stringify(initialFlows)) 
          setFlows(initialFlows) 
          return
        }
        setFlows(storageFlows)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const addFlow = () => {
    const id = nanoid(8)
    const number = flows.length + 1
    const newFlow = {id: id, name: `Flow ${number}`, nodes: [], edges: [], group: null, updatedAt: Date.now()}
    setFlows(prev => {
      const updatedFlows = [...prev, newFlow] 
      updateStorage(updatedFlows)
      return updatedFlows
    })

    return {id: id}
  }

  const deleteFlow = (flowId) => {
    setFlows(prev => {
      const updatedFlows = prev.filter(flow => flow.id !== flowId)
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  const updateFlow = (flowId, data) => {
    setFlows(prev => {
      const updatedFlows = prev.map(flow => {
        if(flow.id === flowId) {
          return {...flow, ...data}
        }
        return flow
      })
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  const clearGroupInFlows = (groupId) => {
    setFlows(prev => {
      const updatedFlows = prev.map(flow => {
        if(flow.group === groupId) {
          return {...flow, group: null}
        }
        return flow
      })
      updateStorage(updatedFlows)
      return updatedFlows
    })
  }

  // Update to localStorage
  const updateStorage = (updatedFlows) => {
    localStorage.setItem("flow_lite_projects", JSON.stringify(updatedFlows))
  }

  return {flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows, loading, error}
}

export default useFlows;