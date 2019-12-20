import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import Login from './components/Login';
import NewUser from './components/NewUser';
import './App.css';

function App() {

  return (
    <div className="App">
      <nav>
        <div className="Nav-links">
          <NavLink to="/" className="App-name">Muscle Pro</NavLink>
          <NavLink to="/Exercises">Exercises</NavLink>
          <NavLink to="/Profile">Profile</NavLink> 
          {/* this would include goals, measurments, progress pics? */}
        </div>
      </nav>
      <header className="App-header">

      </header>
      <Route exact path='/' component={Login} />
      <Route path='/newuser' component={NewUser} />
    </div>
  );
}

export default App;
