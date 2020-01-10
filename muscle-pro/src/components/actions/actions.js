import axios from 'axios';

const token = localStorage.getItem('token');

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAILURE = 'ADD_EXERCISE_FAILURE';

export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAILURE = 'DELETE_EXERCISE_FAILURE';

export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAILURE = 'EDIT_EXERCISE_FAILURE';

export const FETCH_EXERCISES_SUCCESS = 'FETCH_EXERCISES_SUCCESS';

export const setExercises = exercises => dispatch => {
  dispatch({ type: FETCH_EXERCISES_SUCCESS, payload: exercises })
}

export const addExercise = (exercise) => dispatch => {
  console.log('addExercise firing from actions')
  dispatch({ type: ADD_EXERCISE_START });
  axios
    .post('https://weight-lifting1.herokuapp.com/api/exercises', exercise, {authorization: token})
    .then(res => {
      dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({ type: ADD_EXERCISE_FAILURE, payload: error.response })
    })
}

export const deleteExercise = (id) => dispatch => {
  console.log('deleteExercise firing from actions.js')
  dispatch({ type: DELETE_EXERCISE_START });
  axios
    .delete(`https://weight-lifting1.herokuapp.com//api/exercises/${id}`, {authorization: token})
    .then(res => {
      dispatch({ type: DELETE_EXERCISE_SUCCESS, payload: id })
    })
    .catch(error => {
      dispatch({ type: DELETE_EXERCISE_FAILURE, payload: error.response })
    })
}

export const editExercise = (exercise) => dispatch => {
  dispatch({ type: EDIT_EXERCISE_START })
  axios
    .put(`https://weight-lifting1.herokuapp.com/api/user/update`, exercise, {authorization: token})
    .then(res => {
      console.log('response from inside redux editExercise', res)
      dispatch({ type: EDIT_EXERCISE_SUCCESS, payload: exercise })
    })
    .catch(error => {
      dispatch({ type: EDIT_EXERCISE_FAILURE, payload: error.response })
    })
} 