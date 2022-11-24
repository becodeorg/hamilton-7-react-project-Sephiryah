import React from 'react'

const Time = ({minute, secondeTen, secondeUnit}) => {

  return (
    <div className="bg-black text-red-600">
        <p className="text-9xl p-4 font-digital">
          {minute[0]}{minute[1]}:{secondeTen}{secondeUnit}
        </p>
    </div>
  )
}

export default Time