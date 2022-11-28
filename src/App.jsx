import React from 'react';

import Timer from './container/Timer';
import Modal from './container/Modal';

function App() {

  return (
    <div className="App flex flex-row justify-center items-center h-screen bg-gray-700">
      <Timer />
      <Modal />
    </div>
  )
}

export default App
