import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/config';
import { FirebaseContext } from './store/FirebaseContext'
ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <App/>
    </FirebaseContext.Provider>


, document.getElementById('root'));
