import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function EditExercise() {

    // const token = localStorage.getItem('token');

    const [exercise, setExercise] = useState({ id: '', exerciseName: ''});
    const [exerciseEdit, setExerciseEdit] = useState();
    const [toggle, setToggle] = useState(false);

    // console.log('id', exercise.id)
    console.log('testing', exerciseEdit)

    const editExercise = (event, exerciseEdit) => {
        console.log('exerciseEdit', exerciseEdit)

        event.preventDefault()
        axiosWithAuth()
            .put(`https://weight-lifting1.herokuapp.com/api/user/update/`, exerciseEdit)
            .then(res => {
                console.log(res)
                // props.history.push('/enterworkout')
            })
            .catch(err => console.log(err))
    }

    const changeHandler = e => {
      e.preventDefault();
      setExerciseEdit({exerciseName: e.target.value})
    }

    const toggleFunc = (event, par) => {
        event.preventDefault();
        return setToggle(par)
    }

    return(
        <form>
            { !toggle 
                ? 
                <button onClick={(event) => toggleFunc(event, true)} >
                    Edit Exercise
                </button> 
                : 
                <button onClick={(event) => {
                        toggleFunc(event, false)
                        editExercise(event, exerciseEdit)
                    }}>
                    Edit Exercise
                </button>
            }
        </form>
    )
}

export default EditExercise