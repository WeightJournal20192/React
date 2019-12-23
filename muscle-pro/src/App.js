import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import NewUser from './components/NewUser';
import WelcomePage from './components/WelcomePage';
import Exercises from './components/Exercises';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Muscle Pro</h1>
      </header>
      <Route exact path='/' component={Login} />
      <Route path='/newuser' component={NewUser} />
      <Route path='/WelcomePage/:id' component={WelcomePage} />
      <Route path='/Exercises/:id' component={Exercises} />
    </div>
  );
}

export default App;
