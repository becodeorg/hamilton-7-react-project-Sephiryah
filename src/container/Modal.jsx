import React, { useState } from 'react'

const Modal = ({closeModal, isActive, resetModal}) => {

  return (
    <div className={`bg-black bg-opacity-50 absolute h-screen w-screen flex justify-center items-center shadow-2xl ${isActive ? "visible":"invisible"}`}>
      <div className="bg-gray-400 w-1/2 h-1/2 flex justify-center items-center m-w-sm flex-col rounded">
          <p className="text-5xl text-center mb-10"><strong>It's time to take a break !</strong></p>
          <div className="flex flex-row justify-evenly w-full mt-16">
            <button onClick={closeModal} className="bg-red-500 w-1/4 h-10 rounded-full">Close</button>
            <button onClick={resetModal} className="bg-red-500 w-1/4 h-10 rounded-full">Reset</button>
          </div>
      </div>
    </div>
  )
}

export default Modal