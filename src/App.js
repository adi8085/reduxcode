import React from 'react';
import Login from './login/Login'
import Home from './Home/Home';
import About from './About/About';
import './App.css';
import Routing from './Router';
function App() {
  return (
    <div className="App">
       <Routing/>
    </div>
  );
}

export default App;
