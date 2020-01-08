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

        setUserExercise({...userExercise, [event.target.name]: event.target.value });
        //console.log('this is the handlechange userExercise: ', {userExercise});
    };

    const submitForm = event => {
        event.preventDefault();
        //history.push(`/WelcomePage/${userName}`);
        history.push(`/WelcomePage`);
        setUserExercise({date: '', muscle_group: '', exercise_name: '', weight_number: '', sets: '', reps: '', goals: ''});
    };
    
    console.log('this is assigned to userExercise: ', {userExercise});
    
    return (
        <div>
            <nav>
                <Link to={`/WelcomePage/${userName}`}>Back to Results Page</Link>
            </nav>
            <FormHeading>Enter Exercise Information</FormHeading>
            <FormSetup onSubmit={submitForm}>
                <label htmlFor='date'>Date</label>
                <EnterInput
                    id='date'
                    type='text'
                    name='date'
                    placeholder='Enter Date'
                    onChange={handleChange}
                    value={userExercise.date}
                />
                <label htmlFor='muscle_group'>Muscle Group</label>
                <EnterInput
                    id='muscle_group'
                    type='text'
                    name='muscle_group'
                    placeholder='Enter Muscle Group'
                    onChange={handleChange}
                    value={userExercise.muscle_group}
                />
                <label htmlFor='exercise_name'>Exercise Name</label>
                <EnterInput
                    id='exercise_name'
                    type='text'
                    name='exercise_name'
                    placeholder='Exercise Name'
                    onChange={handleChange}
                    value={userExercise.exercise_name}
                />
                <label htmlFor='weight_number'>Weight Lifted</label>
                <EnterInput
                    id='weight_number'
                    type='text'
                    name='weight_number'
                    placeholder='Weight'
                    onChange={handleChange}
                    value={userExercise.weight_number}
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
                <label htmlFor='goals'>Exercise Goals</label>
                <EnterInput
                    id='goals'
                    type='text'
                    name='goals'
                    placeholder='Enter Goals'
                    onChange={handleChange}
                    value={userExercise.goals}
                />
                <LoginButton type='submit'>Submit Exercise</LoginButton>
            </FormSetup>
            <WelcomePage id={userName} exercise={userExercise} />
        </div>
    );
};

export default Exercises;
