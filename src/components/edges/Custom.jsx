import {  getBezierPath, BaseEdge, EdgeLabelRenderer, getStraightPath, getSmoothStepPath } from '@xyflow/react'
import { colors } from '../colors';

const Custom = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, label, markerEnd, markerStart}) => {

  const [edgePath, labelX, labelY] = (() => {
    switch(data.pathStyle) {
      case "smooth" :
        return getBezierPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
        });
      case "straight" :
        return getStraightPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        });
      case "step" : 
        return getSmoothStepPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
      });
      default:
        return getBezierPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
        });
    }
  })();

  const getBorderColor = () => {
    if(colors[data.color]) {
      return colors[data.color].stroke
    }
  }
  
  return (
    <>
      <BaseEdge id={id} type={data.pathStyle} path={edgePath} style={{stroke: getBorderColor(), strokeWidth: data.strokeWidth}} markerEnd={markerEnd} markerStart={markerStart}/>
      <EdgeLabelRenderer>
        {label && (
        <div
          style={{position: 'absolute',transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,}}
          className={"nodrag nopan border rounded p-1 text-[10px] " + (`border-${data.color}-400 bg-${data.color}-50`)}
        >
          {label} 
        </div>
        )}
      </EdgeLabelRenderer>
    </>
  )

}

export default Custom