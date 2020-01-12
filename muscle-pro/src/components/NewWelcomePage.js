import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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

const NewExercises = ({ addNewExercise, history }) => {
    
    const [exercise, setExercise] = useState({
        date: '',
        muscle_group: '',
        exercise_name: '',
        weight_number: '',
        sets: '',
        reps: '',
        goals: ''
    });

    const { register, handleSubmit, errors } = useForm();

    const handleChange = event => {
        //console.log('event', event.target.value);

        setExercise({...exercise, [event.target.name]: event.target.value });
        //console.log('this is the handlechange userExercise: ', {userExercise});
    };

    const submitForm = event => {
        //event.preventDefault();
        //history.push(`/WelcomePage/${userName}`);
        addNewExercise(exercise);
        history.push('/NewWelcomePage');
        setExercise({date: '', muscle_group: '', exercise_name: '', weight_number: '', sets: '', reps: '', goals: ''});
    };
    
    console.log('this is assigned to exercise: ', {exercise});
    
    return (
        <div>
            <nav className="navLinks">
                <Link className="linkTwo" to='/NewWelcomePage'>Back to Results Page</Link>
                <Link className="linkTwo" to='/'>Logout</Link>
            </nav>
            <FormHeading>Enter Exercise Information</FormHeading>
            <FormSetup onSubmit={handleSubmit(submitForm)}>
                <label htmlFor='date'>Date</label>
                <EnterInput
                    id='date'
                    type='text'
                    name='date'
                    placeholder='Enter Date'
                    onChange={handleChange}
                    value={exercise.date}
                    ref={register({ required: true })}
                />
                {errors.date && errors.date.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='muscle_group'>Muscle Group</label>
                <EnterInput
                    id='muscle_group'
                    type='text'
                    name='muscle_group'
                    placeholder='Enter Muscle Group'
                    onChange={handleChange}
                    value={exercise.muscle_group}
                    ref={register({ required: true })}
                />
                {errors.muscle_group && errors.muscle_group.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='exercise_name'>Exercise Name</label>
                <EnterInput
                    id='exercise_name'
                    type='text'
                    name='exercise_name'
                    placeholder='Enter Exercise Name'
                    onChange={handleChange}
                    value={exercise.exercise_name}
                    ref={register({ required: true })}
                />
                {errors.exercise_name && errors.exercise_name.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='weight_number'>Weight Lifted</label>
                <EnterInput
                    id='weight_number'
                    type='text'
                    name='weight_number'
                    placeholder='Enter Weight'
                    onChange={handleChange}
                    value={exercise.weight_number}
                    ref={register({ required: true })}
                />
                {errors.weight_number && errors.weight_number.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='sets'>Number of Sets</label>
                <EnterInput
                    id='sets'
                    type='text'
                    name='sets'
                    placeholder='Enter Num Sets'
                    onChange={handleChange}
                    value={exercise.sets}
                    ref={register({ required: true })}
                />
                {errors.sets && errors.sets.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='reps'>Repetitions</label>
                <EnterInput
                    id='reps'
                    type='text'
                    name='reps'
                    placeholder='Enter Num Reps'
                    onChange={handleChange}
                    value={exercise.reps}
                    ref={register({ required: true })}
                />
                {errors.reps && errors.reps.type === 'required' && (
                    <p>This is required</p>
                )}
                <label htmlFor='goals'>Exercise Goals</label>
                <EnterInput
                    id='goals'
                    type='text'
                    name='goals'
                    placeholder='Enter Goals'
                    onChange={handleChange}
                    value={exercise.goals}
                    ref={register({ required: true })}
                />
                {errors.goals && errors.goals.type === 'required' && (
                    <p>This is required</p>
                )}
                <LoginButton type='submit'>Submit Exercise</LoginButton>
            </FormSetup>
        </div>
    );
};

export default NewExercises;