import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import NewUser from './components/NewUser';
import WelcomePage from './components/WelcomePage';
import Exercises from './components/Exercises';
//import { userName } from './components/Login';
//import { addNewExercise } from './components/WelcomePage';
import './App.css';

function App() {

  const [userName, setUserName] = useState({
    username: '',
    password: ''
  });

  const [exercises, setExercises] = useState([]);

   // create function to add new exercises, exercise is passed from Exercises.js
   const addNewExercise = exercise => {
    const newExercise = {
        date: exercise.date,
        muscle_group: exercise.muscle_group,
        exercise_name: exercise.exercise_name,
        weight_number: exercise.weight_number,
        sets: exercise.sets,
        reps: exercise.reps,
        goals: exercise.goals
    }
// use spread operator to include all current exercises so far
// add the newExercise object to a new array
// set state from the new array
const newExerciseArray = [...exercises, newExercise];
setExercises(newExerciseArray);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Muscle Pro</h1>
      </header>
      <Route
        exact path='/' render={routeProps => {
          return <Login {...routeProps} userName={userName} setUserName={setUserName} />;
        }}
      />
       <Route
        exact path='/NewUser' render={routeProps => {
          return <NewUser {...routeProps} userName={userName} setUserName={setUserName} />;
        }}
      />
       <Route
        exact path='/WelcomePage' render={routeProps => {
          return <WelcomePage {...routeProps} userName={userName} setUserName={setUserName} addNewExercise={addNewExercise} exercises={exercises} setExercises={setExercises} />
        }}
      />
      <Route
        exact path='/Exercises' render={routeProps => {
          return <Exercises {...routeProps} addNewExercise={addNewExercise} exercises={exercises} setExercises={setExercises} />
        }}
      />
    </div>
  );
}

export default App;
