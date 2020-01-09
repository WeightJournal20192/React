import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Login from './components/Login';
import NewUser from './components/NewUser';
import WelcomePage from './components/WelcomePage';
import Exercises from './components/Exercises';
import './App.css';
// import {createStore} from "redux";
import { UserContext } from "./utils/UserContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    
    <UserContext.Provider value={{user}}>
      <div className="App">
        <header className="App-header">
          <h1>Muscle Pro</h1>
        </header>


        <Route exact path='/' component={Login} />
        <Route path='/newuser' component={NewUser} />
        <PrivateRoute exact path='/WelcomePage' component={WelcomePage} />
        <PrivateRoute exact path='/Exercises' component={Exercises} user={user}/>
      </div>
    </UserContext.Provider>
  );
}

// const store = createStore();

export default App;
