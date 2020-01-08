import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import NewUser from './components/NewUser';
import WelcomePage from './components/WelcomePage';
import Exercises from './components/Exercises';
import './App.css';
import {createStore} from "redux";
// import {FamilyProvider} from "./components/FamilyContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    // <FamilyProvider value={newuser}>
      <div className="App">
        <header className="App-header">
          <h1>Muscle Pro</h1>
        </header>
        <Route exact path='/' component={Login} />
        <Route path='/newuser' component={NewUser} />
        <PrivateRoute exact path='/WelcomePage' component={WelcomePage} />
        <PrivateRoute exact path='/Exercises' component={Exercises} />
      </div>
    // </FamilyProvider>
  );
}

// const store = createStore();

export default App;
