import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled-components
const Container = styled.section`
    padding-top: 15px;
    padding-bottom: 25px;
    margin: 0px;
    background-color: #d9d7d6;
`

const FormHeading = styled.h2`
    font-size: 2rem;
    color: #282c34;
    margin-top: 30px;
    margin-bottom: 20px;
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

const FormSetup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #282c34;
    font-size: 1.15rem;
    font-weight: 600;
`

const EnterInput = styled.input`
    width: 12%;
    height: 2vh;
    margin-top: 10px;
    margin-bottom: 5px;
`

const LoginButton = styled.button`
    margin-top: 15px;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 1.3rem;
    background: #FFC300;
    border: 1px solid #333;
    border-radius: 5px;
    width: 17.5%;
    height: 5vh;
`

// end styled-components

const Exercises = ({ addNewExercise, history }) => {
    
    const [exercise, setExercise] = useState({
        date: '',
        muscle_group: '',
        exercise_name: '',
        weight_number: '',
        sets: '',
        reps: '',
        goals: ''
    });

    const handleChange = event => {
        //console.log('event', event.target.value);

        setExercise({...exercise, [event.target.name]: event.target.value });
        //console.log('this is the handlechange userExercise: ', {userExercise});
    };

    const submitForm = event => {
        event.preventDefault();
        //history.push(`/WelcomePage/${userName}`);
        addNewExercise(exercise);
        history.push('/WelcomePage');
        setExercise({date: '', muscle_group: '', exercise_name: '', weight_number: '', sets: '', reps: '', goals: ''});
    };
    
    console.log('this is assigned to exercise: ', {exercise});
    
    return (
        <Container>
            <div>
                <Nav>
                    <Link to='/WelcomePage'>Back to Results Page</Link>
                    <Link to='/'>Logout</Link>
                </Nav>
                <FormHeading>Enter Exercise Information</FormHeading>
                <FormSetup onSubmit={submitForm}>
                    <label htmlFor='date'>Date</label>
                    <EnterInput
                        id='date'
                        type='text'
                        name='date'
                        placeholder='Enter Date'
                        onChange={handleChange}
                        value={exercise.date}
                    />
                    <label htmlFor='muscle_group'>Muscle Group</label>
                    <EnterInput
                        id='muscle_group'
                        type='text'
                        name='muscle_group'
                        placeholder='Enter Muscle Group'
                        onChange={handleChange}
                        value={exercise.muscle_group}
                    />
                    <label htmlFor='exercise_name'>Exercise Name</label>
                    <EnterInput
                        id='exercise_name'
                        type='text'
                        name='exercise_name'
                        placeholder='Exercise Name'
                        onChange={handleChange}
                        value={exercise.exercise_name}
                    />
                    <label htmlFor='weight_number'>Weight Lifted</label>
                    <EnterInput
                        id='weight_number'
                        type='text'
                        name='weight_number'
                        placeholder='Weight'
                        onChange={handleChange}
                        value={exercise.weight_number}
                    />
                    <label htmlFor='sets'>Number of Sets</label>
                    <EnterInput
                        id='sets'
                        type='text'
                        name='sets'
                        placeholder='Num Sets'
                        onChange={handleChange}
                        value={exercise.sets}
                    />
                    <label htmlFor='reps'>Repetitions</label>
                    <EnterInput
                        id='reps'
                        type='text'
                        name='reps'
                        placeholder='Num Reps'
                        onChange={handleChange}
                        value={exercise.reps}
                    />
                    <label htmlFor='goals'>Exercise Goals</label>
                    <EnterInput
                        id='goals'
                        type='text'
                        name='goals'
                        placeholder='Enter Goals'
                        onChange={handleChange}
                        value={exercise.goals}
                    />
                    <LoginButton type='submit'>Submit Exercise Entry</LoginButton>
                </FormSetup>
            </div>
        </Container>
    );
};

export default Exercises;