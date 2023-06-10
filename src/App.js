import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Snignup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';

import Home from './Pages/Home';
import { AuthContext } from './store/FirebaseContext';

function App() {
  const {user}=useContext(AuthContext)
  useEffect(()=>{

  })
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
