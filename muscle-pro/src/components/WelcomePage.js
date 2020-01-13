import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Exercises from './Exercises';
import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';
import styled, { css } from 'styled-components';

// styled-components
const Container = styled.section`
    padding-top: 15px;
    padding-bottom: 25px;
    margin: 0px;
    background-color: #d9d7d6;
`

const Nav = styled(Link)`
    color: #282c34;
    &:hover {color: #FFC300;}
    font-size: 1.25rem;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin-left: 35%;
    margin-right: 35%;
`

const Card = styled.div`
  border: solid black 2px;
  border-radius: 7px;
  margin: 30px 250px 0px 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFC300;
  background-color: #282c34;
`

const Date = styled.h1`
  color: #FFC300;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

const Info = styled.ul`
  list-style-type: none;
`;

const ListItems = styled.li`
  color: #FFC300;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;
// end styled-components

const WelcomePage = ({ userName, setUserName, exercise, exercises, setExercises }) => {
    
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
        console.log(response.data);
        setExercises(response.data);
      })
      .catch(error => {
        console.log("Did not connect to API", error);
      })
  }, []);

    return (
        <Container>
                <header>
                    <h2>Weight Lifting Journal</h2>
                </header>
                <Nav>
                    <Link to='/Exercises'>Add New Exercises</Link>
                    <Link to='/'>Logout</Link> 
                </Nav>  
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
                        </Card>
                    )
                })}
        </Container>
    );
};

export default WelcomePage;
