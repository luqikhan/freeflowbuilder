import React from 'react'
import { Handle, Position} from '@xyflow/react'

const Wrapper = ({data, children, id, selected}) => {

  const DEFAULT_HANDLE_STYLE = {
    width: 8,
    height: 8,
    opacity: selected ? 1 : 0
  };

  const preview = data?.preview || false;
  const pointers = data?.pointers || true;

  return (
    <>
      {!preview && 
      <>
        <Handle id={'a' + id} type="target" position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
        <Handle id={'b' + id} type="target" position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
        <Handle id={'c' + id} type="source" position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
        <Handle id={'d' + id} type="source" position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE,  pointerEvents: pointers}}/>
      </>
      }
      {children}
    </>
  )
}

export default Wrapper