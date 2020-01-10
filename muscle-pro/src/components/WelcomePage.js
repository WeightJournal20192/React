import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Exercises from './Exercises';
import axios from 'axios';
import {axiosWithAuth} from "./utils/AxiosWithAuth";
import EditExercise from './EditExercise';

// import styled from 'styled-components';

// // styled-components
// const Card = styled.div `
//   border: solid black 2px;
//   margin: 50px 250px 50px 250px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: blue;
// `;

// const Date = styled.h1 `
//   color: yellow;
//   font-weight: bold;
// `;

// const Info = styled.ul `
//   list-style-type: none;
// `;

// const ListItems = styled.li `
//   color: white;
// `;
// // end styled-components

// const WelcomePage = ({ userName, setUserName, exercise, exercises, setExercises }) => {
    
    // set default exercise values to state
  //  const [exercises, setExercises] = useState([]);
  /*
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
  */

  useEffect(() => {
    axiosWithAuth()
    .get(`https://weight-lifting1.herokuapp.com/api/user/all`)
      .then(response => {
        console.log(response);
        setExercises(response);
      })
      .catch(error => {
        console.log("Did not connect to API", error);
      })
  }, []);

  // useEffect(() => {
  //   axios.get(`https://weight-lifting1.herokuapp.com/api/user/all`)
  //     .then(response => {
  //       console.log(response);
  //       setExercises(response);
  //     })
  //     .catch(error => {
  //       console.log("Did not connect to API", error);
  //     })
  // }, []);

    return (
        <div>
            <header>
                <h1>Muscle Pro</h1>
                <h2>Weight Lifting Journal</h2>
            </header>
            <nav>

                <Link to='/Exercises'>Add New Exercises</Link><br />
                <Link to='/'>Logout</Link>
            </nav>
          {/*  <Exercises addNewExercise={addNewExercise} /> */}
            {/* exercises.map over data here and render to UI */}
            {exercises.map(exercise => {
                return (
                   
                )
            })}
        </div>
    );
};

export  default WelcomePage;
