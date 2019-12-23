import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import styled from 'styled-components';

// styled-components
const FormHeading = styled.h2 `
    margin-top: 40px;
    margin-bottom: 20px;
`;

const FormSetup = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const EnterInput = styled.input `
    margin-top: 20px;
    margin-bottom: 20px;
`;

const LoginButton = styled.button `
    margin-top: 30px;
`;
// end styled-components

const Exercises = ({ userName, history }) => {
    
    const [userExercise, setUserExercise] = useState({
        muscleGroup: '',
        exercise: '',
        sets: '',
        reps: ''
    });

    const handleChange = event => {
        //console.log('event', event.target.value);

        setUserExercise({...userExercise, [event.target.name]: event.target.value });
        //console.log('this is the handlechange userExercise: ', {userExercise});
    };

    const submitForm = event => {
        event.preventDefault();
        history.push(`/WelcomePage/${userName}`);
        setUserExercise({muscleGroup: '', exercise: '', sets: '', reps: '' });
    };
    
    console.log('this is assigned to userExercise: ', {userExercise});
    
    return (
        <div>
            <nav>
                <Link to={`/WelcomePage/${userName}`}>Back to Results Page</Link>
            </nav>
            <FormHeading>Enter Exercise Information</FormHeading>
            <FormSetup onSubmit={submitForm}>
                <label htmlFor='muscleGroup'>Muscle Group</label>
                <EnterInput
                    id='muscleGroup'
                    type='text'
                    name='muscleGroup'
                    placeholder='Enter Muscle Group'
                    onChange={handleChange}
                    value={userExercise.muscleGroup}
                />
                <label htmlFor='exercise'>Exercise</label>
                <EnterInput
                    id='exercise'
                    type='text'
                    name='exercise'
                    placeholder='Exercise Name'
                    onChange={handleChange}
                    value={userExercise.exercise}
                />
                <label htmlFor='sets'>Number of Sets</label>
                <EnterInput
                    id='sets'
                    type='text'
                    name='sets'
                    placeholder='Num Sets'
                    onChange={handleChange}
                    value={userExercise.sets}
                />
                <label htmlFor='reps'>Repetitions</label>
                <EnterInput
                    id='reps'
                    type='text'
                    name='reps'
                    placeholder='Num Reps'
                    onChange={handleChange}
                    value={userExercise.reps}
                />
                <LoginButton type='submit'>Submit Exercise</LoginButton>
            </FormSetup>
            <WelcomePage id={userName} exercise={userExercise} />
        </div>
    );
};

export default Exercises;
