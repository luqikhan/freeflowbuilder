import React from 'react'
import { Handle, Position} from '@xyflow/react'
import { colors } from '../../colors';

const DEFAULT_HANDLE_STYLE = {
  width: 8,
  height: 8,
  bottom: -4,
  leftt: -4
};

const Browser = ({children, data, selected}) => {

  const preview = data?.preview || false;
  const pointers = data?.pointers || true;

  return (
    <>
      {preview ? (
      <div className="bg-white p-1 min-w-20 text-[10px] flex flex-col gap-1 border rounded ">
        {children}
      </div>
      ) : (
      <div className={'bg-white border rounded cursor-pointer overflow-hidden ' + (colors[data.color].borderClass) + " " + (selected && ' ring-4 ring-gray-300 ring-opacity-40')}>
        <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
          <span className='font-bold text-[10px] text-nowrap'>
            {data.label} 
          </span>
        </div>
        <Handle type='target' position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE, background: '#313131', pointerEvents: pointers  }}/>
        <div>
          <div className={"h-4 flex justify-start items-center space-x-0.5 px-1.5 " + (colors[data.color].bgClass)}>
              <span className="w-1 h-1 rounded-full bg-red-400"></span>
              <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-white p-1 min-w-20 text-[10px] flex flex-col gap-1">
            {children}
          </div>
        </div>
        <Handle type='source' position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE, background: '#313131', pointerEvents: pointers }}/>
      </div>
      )}
    </>
    
  )
}

export default Browser