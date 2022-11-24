import React from 'react'

const Time = ({minute, seconde}) => {

  return (
    <div className="bg-black text-red-600">
        <p className="text-9xl p-4 font-digital">
          {minute}:{seconde}
        </p>
    </div>
  )
}

export default Time