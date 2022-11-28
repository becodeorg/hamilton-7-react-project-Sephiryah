import React from 'react'

const ControlPanel = ({addMinutes, removeMinutes, play, reset, playStop }) => {

  return (
    <div className="flex flex-col text-2xl bg-gray-200">
        <button onClick={addMinutes} className="shadow-inner px-2 py-1">+</button>
        <button onClick={play} className="shadow-inner px-2 py-1">{playStop}</button>
        <button onClick={reset} className="shadow-inner px-2 py-1">Reset</button>
        <button onClick={removeMinutes} className="shadow-inner px-2 py-1">-</button>
    </div>
  )
}

export default ControlPanel