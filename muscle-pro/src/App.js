import React from 'react';
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import './App.css';

function App() {

  return (
    <div className="App">
      <nav>
        <h1 className="App-name">Muscle Pro</h1>
        <div className="Nav-links">
          <h2>Exercises</h2>
          <h2>Profile</h2> 
          {/* this would include goals, measurments, progress pics? */}
        </div>
      </nav>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
