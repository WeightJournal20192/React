import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from './axiosWithAuth';
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
// end styled-components

const WelcomePage = ({ userName, setUserName, exercise, exercises, setExercises }) => {


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
        <div>
            <header>
                <h1>Muscle Pro</h1>
                <h2>Weight Lifting Journal</h2>
            </header>
            <nav>
                <Link to='/Exercises'>Add New Exercises</Link>
                <Link to='/'>Logout</Link>
                {/* <DeleteExercise /> */}
            </nav>
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
            
        </div>
    );
};

export  default WelcomePage;
