import React, { useState } from "react";
import { BrowserRouter as Route, Link, Switch  } from "react-router-dom";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import WelcomePage from "./components/WelcomePage";
import Exercises from "./components/Exercises";
import Nav from "./components/Nav";
//import { userName } from './components/Login';
//import { addNewExercise } from './components/WelcomePage';
import "./App.css";
// import {createStore} from "redux";
// import { UserContext } from "./utils/UserContext";
// import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div>
   
      <Login />
      
  

    </div>
  );
}

export default App;