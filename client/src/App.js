import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/SignUp'
import MainContainer from './containers/MainContainer';
// import MainContainer from './containers/MainContainer'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch> 
          <Route path="/" component={MainContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
