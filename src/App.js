import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Snignup from './Pages/Signup'
import Login from './Pages/Login'
import View from './Pages/ViewPost'
import './App.css';
import Create from './Pages/Create'
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

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
      <Route path='/create'>
        <Create/>
      </Route>
      <Route path='/view'>
        <View/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
