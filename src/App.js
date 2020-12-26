import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/Imessage/Imessage';
import { selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser)
  
  
  
  return (
    <div className="app">
      <Imessage />

    </div>
  );
}

export default App;
