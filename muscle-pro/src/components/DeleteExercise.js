import React, { useState, useEffect } from 'react'

import  axiosWithAuth  from '../components/utils/AxiosWithAuth';

function DeleteExercise(props) {

    const [exerciseDelete, setExerciseDelete] = useState('');
    const [exercise, setExercise] = useState();

    console.log('delete', exercise)

    useEffect(() => {
        if(exerciseDelete)
        axiosWithAuth()
            .get(`https://weight-lifting1.herokuapp.com/api/user/delete`)
            .then(res => {
                console.log(res)
                setExerciseDelete(res.data)
            })
            .catch(err => console.log(err))
    }, [ exerciseDelete ]);

    const deleteExercise = (event, exercise) => {
        event.preventDefault()
        axiosWithAuth()
            .delete(`https://weight-lifting1.herokuapp.com/api/user/delete`, exercise)
            .then(res => {
                console.log(res)
                // props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <form>
            <button onClick={(event) => deleteExercise(event, exercise)}>Delete Exercise</button>
        </form>
    )
}

export default DeleteExercise