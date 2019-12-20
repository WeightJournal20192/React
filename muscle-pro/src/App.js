import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
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
    </div>
  );
}

export default App;
