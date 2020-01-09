import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import NewUser from './components/NewUser';
import WelcomePage from './components/WelcomePage';
import Exercises from './components/Exercises';
import { userName } from './components/Login';
import { addNewExercise } from './components/WelcomePage';
import './App.css';
import {createStore} from "redux";
// import {FamilyProvider} from "./components/FamilyContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Muscle Pro</h1>
      </header>
     {/*} <Route
        exact path='/'
        render={routeProps => {
          return <WelcomePage {...routeProps} id={userName.username} />;
        }}
      />
      <Route
        exact path='/NewUser'
        render={routeProps => {
          return <WelcomePage {...routeProps} id={userName.username} />;
        }}
      />
      */}
     {/* <Route
        exact path='/WelcomePage'
        render={routeProps => {
          return <Exercises {...routeProps} addNewExercise={addNewExercise} />;
        }}
      /> */}
      <Route exact path='/Exercises' component={Exercises} /> 
    </div>
  );
}

// const store = createStore();

export default App;
