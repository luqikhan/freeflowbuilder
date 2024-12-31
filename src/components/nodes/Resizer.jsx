import React from 'react'
import { Handle, Position, NodeResizer } from '@xyflow/react';

const Resizer = ({selected, children, data, id, handles = true}) => {

  const DEFAULT_HANDLE_STYLE = {
    width: 8,
    height: 8,
    background: 'black',
    opacity: selected ? 1 : 0
  };


  const RESIZE_HANDLE_STYLE = {
    width: 10,
    height: 10,
    background: '#fbbf24',
    borderRadius: 10,
    border: '1px solid #f9fafb',
    opacity: selected ? 1 : 0
  };

  const LINE_HANDLE_STYLE = {
    border: '0.5px solid #d1d5db66',
    opacity: selected ? 1 : 0
  };
  
  
  const preview = data?.preview || false;
  const pointers = data?.pointers || true;

  return (
    <>
      {preview ? 
      <>{children}</> 
      : 
      <>
        <NodeResizer
          isVisible={selected}
          minWidth={30}
          minHeight={30}
          handleStyle={{...RESIZE_HANDLE_STYLE}}
          lineStyle={{...LINE_HANDLE_STYLE}}
        />
        {children}
        {handles && <>
          <Handle id={'a' + id} type="target" position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
          <Handle id={'b' + id} type="target" position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
          <Handle id={'c' + id} type="source" position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
          <Handle id={'d' + id} type="source" position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
        </>}
        
      </>
      }
    </>
  )
}

export default Resizer