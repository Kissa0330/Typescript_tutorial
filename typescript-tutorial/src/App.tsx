import { basename } from 'path';
import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="header">Taskify</span>
      <Inputfield />
    </div>
  );
}

export default App;
