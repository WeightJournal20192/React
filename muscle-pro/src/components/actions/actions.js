import axios from 'axios';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const token = localStorage.getItem('token');

// api/auth/login - Log In (Post)
export const LOGGING_START = "LOGGING_START";
export const LOGGING_FAILURE = "LOGGING_FAILURE";
export const LOGGING_SUCCESS = "LOGGING_SUCCESS";
// api/auth/register  - Sign Up (Post)
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";


// POST       api/user/exercise
export const POST_EXERCISE_START = 'POST_EXERCISE_START';
export const POST_EXERCISE_SUCCESS = 'POST_EXERCISE_SUCCESS';
export const POST_EXERCISE_FAILURE = 'POST_EXERCISE_FAILURE';
// DELETE     api/user/delete
export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAILURE = 'DELETE_EXERCISE_FAILURE';
// PUT  api/user/update
export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAILURE = 'EDIT_EXERCISE_FAILURE';
// GET/FETCH/CREATE    api/user/all
export const GET_EXERCISES_START = 'GET_EXERCISES_START';
export const GET_EXERCISES_SUCCESS = 'GET_EXERCISES_SUCCESS';
export const GET_EXERCISES_FAILURE = 'GET_EXERCISES_FAILURE';


export const login = credentials => dispatch => {
  dispatch({ type: LOGGING_START });
  return axios
    .post("https://weight-lifting1.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGGING_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGGING_FAILURE, payload: err });
    });
};

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://weight-lifting1.herokuapp.com/api/auth/register", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

// crud

export const getExercises = () => dispatch => {
  dispatch({ type: GET_EXERCISES_START });
  AxiosWithAuth()
  .get("https://weight-lifting1.herokuapp.com/api/user/all")
  .then(res => dispatch({type: GET_EXERCISES_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: GET_EXERCISES_FAILURE, payload: err.data}))
}


export const postExercise = (exercise) => dispatch => {
  console.log('postExercise firing from actions')
  dispatch({ type: POST_EXERCISE_START });
  axios
    .post('https://weight-lifting1.herokuapp.com/api/user/exercise', exercise)
    .then(res => {
      dispatch({ type: POST_EXERCISE_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({ type: POST_EXERCISE_FAILURE, payload: error.response })
    })
}

export const deleteExercise = (id) => dispatch => {
  console.log('deleteExercise firing from actions.js')
  dispatch({ type: DELETE_EXERCISE_START });
  axios
    .delete(`https://weight-lifting1.herokuapp.com/api/user/delete${id}`)
    .then(res => {
      dispatch({ type: DELETE_EXERCISE_SUCCESS, payload: res.id })
    })
    .catch(error => {
      dispatch({ type: DELETE_EXERCISE_FAILURE, payload: error.response })
    })
}

export const editExercise = (exercise) => dispatch => {
  dispatch({ type: EDIT_EXERCISE_START })
  axios
    .put(`https://weight-lifting1.herokuapp.com/api/user/update`, exercise)
    .then(res => {
      console.log('response from inside redux editExercise', res)
      dispatch({ type: EDIT_EXERCISE_SUCCESS, payload: res.exercise })
    })
    .catch(error => {
      dispatch({ type: EDIT_EXERCISE_FAILURE, payload: error.response })
    })
} 