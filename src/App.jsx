import './App.css';
import { Route,Routes } from 'react-router-dom';

import React from 'react'
import Feedback from './Componets/Feedback';
import Submited from './Componets/Submited';

function App  ()  {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feedback/>} />
        <Route path="/submited" element={<Submited/>} />


      </Routes>
    </div>
  )
}

export default App