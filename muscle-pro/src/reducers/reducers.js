import { 
  GET_EXERCISES_START,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
  DELETE_EXERCISE_START,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  POST_EXERCISE_START,
  POST_EXERCISE_SUCCESS,
  POST_EXERCISE_FAILURE,
  EDIT_EXERCISE_START,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
} from '../components/actions/actions';

export const initialState = {
  exercises: [],
  userID: 0,
  isGetting: false,
  isEditing: false,
  isPosting: false,
  isDeleting: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  console.log('payload from before the switch cases', action.payload)
  switch(action.type) {
    case GET_EXERCISES_START:
      return {
        ...state,
        exercises: action.payload
      }
      case GET_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isGetting: false,
      }
    case GET_EXERCISES_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.payload,
      }
    case DELETE_EXERCISE_START:
      return {
        ...state,
        isDeleting: true,
      }
    case DELETE_EXERCISE_SUCCESS:
      const filteredExercises = state.exercises.filter(exercise => exercise.id !== action.payload)
      return {
        ...state,
        exercises: filteredExercises,
        isDeleting: false,
      }
    case DELETE_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeleting: false,
      }
    case POST_EXERCISE_START:
      return {
        ...state,
        isPosting: true,
      }
    case POST_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isPosting: false,
      }
    case POST_EXERCISE_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      }
    case EDIT_EXERCISE_START:
      return {
        ...state,
        isEditing: true,
      }
    case EDIT_EXERCISE_SUCCESS:
      const updatedExercises = state.exercises.map(exercise => (exercise.id === action.payload.id ? action.payload : exercise))
      return {
        ...state,
        exercises: updatedExercises,
        isEditing: false,
      }
    case EDIT_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isEditing: false,
      }
    default:
      return state;
  }
}
