import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from './utils/AxiosWithAuth';
import Exercises from './Exercises';
import axios from 'axios';
import styled from 'styled-components';
import DeleteExercise from './DeleteExercise';

// styled-components
const Card = styled.div `
  border: solid black 2px;
  margin: 50px 250px 50px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Date = styled.h1 `
  color: yellow;
  font-weight: bold;
`;

const Info = styled.ul `
  list-style-type: none;
`;

const ListItems = styled.li `
  color: white;
`;

const Form = styled.form`
  /* padding: 15%; */
`;

// end styled-components

const WelcomePage = ({ userName, setUserName, exercise, exercises, setExercises }) => {

const [exerciseEdit, setExerciseEdit] = useState();


useEffect(() => {
  axiosWithAuth()
  .get(`https://weight-lifting1.herokuapp.com/api/user/all`)
    .then(response => {
      console.log(response.data);
      setExercises(response.data);
    })
    .catch(error => {
      console.log("Did not connect to API", error);
    })
}, []);
const [display, setDisplay] = useState('no-display');
const changeClass = e => {
  if (setDisplay('display')) {
    setDisplay('no-display')
  } else {
    setDisplay('display')
  }
}
const changeExercise = e => {
  
}
  return (
      <div>
          <header>
              <h1>Muscle Pro</h1>
              <h2>Weight Lifting Journal</h2>
          </header>
          <nav>
              <Link to='/Exercises'>Add New Exercises</Link>
              <Link to='/'>Logout</Link>
          </nav>
        {/*  <Exercises addNewExercise={addNewExercise} /> */}
          {/* exercises.map over data here and render to UI */}
          {exercises.map(exercise => {
       
              return (
                  <Card>
                      <Date>Date: {exercise.date}</Date>
                      <Info>
                          <ListItems>Muscle Group: {exercise.muscle_group}</ListItems>
                          <ListItems>Name of Exercise: {exercise.exercise_name}</ListItems>
                          <ListItems>Weight Lifted: {exercise.weight_number}</ListItems>
                          <ListItems>Sets: {exercise.sets}</ListItems>
                          <ListItems>Reps: {exercise.reps}</ListItems>
                          <ListItems>Goals: {exercise.goals}</ListItems>
                      </Info>
                  
                  <Form className={display}>
                    <input
                      value={exercise.muscle_group}
                    />
                    <input
                      value={exercise.exercise_name}
                    />
                    <input
                      value={exercise.weight_number}
                    />
                    <input
                      value={exercise.sets}
                    />
                    <input
                      value={exercise.reps}
                    />
                    <input
                      value={exercise.goals}
                      
                    />
                    <button onSubmit={changeExercise}>Submit Changes</button>
                    
                  </Form>
                  <button onClick={changeClass} >Edit</button>
                  <button>delete</button>
                  </Card>
           
              )
          })}
      </div>
  );
};
export  default WelcomePage;