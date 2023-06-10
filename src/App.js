import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Snignup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';



import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
      <Home />
      </Route >
      <Route path='/signup'>
        <Snignup/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
