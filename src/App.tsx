import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { table } from 'console';
import Demo2103 from './components/demo2103';
import Demo2803 from './components/demo2803';
import LoginComponent from './components/demo2803';
import Demo1104 from './components/demo1104'
function App() {
  return (
    <div>
      {/* {localStorage.getItem('userName') == 'admin' ?
        <Demo1104 /> : <LoginComponent />
      } */}
      <Demo2103/>
    </div>
  );
}

export default App;