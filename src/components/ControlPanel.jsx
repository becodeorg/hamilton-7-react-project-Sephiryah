import React from 'react'

const ControlPanel = ({addMinutes, removeMinutes}) => {

  return (
    <div className="flex flex-col text-2xl bg-gray-900">
        <button onClick={addMinutes} className="shadow-inner px-2 py-1">+</button>
        <button className="shadow-inner px-2 py-1">Play</button>
        <button className="shadow-inner px-2 py-1">Reset</button>
        <button onClick={removeMinutes} className="shadow-inner px-2 py-1">-</button>
    </div>
  )
}

export default ControlPanel