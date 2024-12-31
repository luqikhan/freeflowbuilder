/*

Groups Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
color             TEXT

*/

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { initialGroups } from "../data/initialGroups";

const useGroups = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const storageGroups = JSON.parse(localStorage.getItem("flow_lite_groups"))
        if(storageGroups === null) { 
          localStorage.setItem("flow_lite_groups", JSON.stringify(initialGroups)) 
          setGroups(initialGroups) 
          return
        }
        setGroups(storageGroups)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const addGroup = (name) => {
    const id = nanoid(8)
    const newGroup = {id: id, name: name, color: "gray"}
    setGroups(prev => {
      const updatedGroups = [...prev, newGroup] 
      updateStorage(updatedGroups)
      return updatedGroups
    })
  }

  const changeColor = (groupId, color) => {

    setGroups(prev => {
      const updatedGroups = prev.map(group => {
        if(group.id === groupId) {
          return {...group, color: color}
        }
        return group
      })

      updateStorage(updatedGroups)
      return updatedGroups
    })

  }

  const deleteGroup = (groupId) => {

    setGroups(prev => {
      const updatedGroups = prev.filter(group => group.id !== groupId)
      updateStorage(updatedGroups)
      return updatedGroups
    })

  }

  // Update to localStorage
  const updateStorage = (updatedGroups) => {
    localStorage.setItem("flow_lite_groups", JSON.stringify(updatedGroups))
  }

  return {groups, addGroup, changeColor, deleteGroup, loading, error}
}

export default useGroups;