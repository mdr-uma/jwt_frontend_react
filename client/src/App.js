import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import MainContainer from './containers/MainContainer'
function App() {
  return (
    <div className="App">
        <MainContainer />
    </div>
  );
}

export default App;
