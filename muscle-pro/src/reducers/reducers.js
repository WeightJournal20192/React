import { 
  DELETE_EXERCISE_START,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  ADD_EXERCISE_START,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  EDIT_EXERCISE_START,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
} from '../actions/primaryActions';

export const initialState = {
  exercises: [],
  userID: 0,
  isDeleting: false,
  isEditing: false,
  isDeletingExercise: false,
  isAddingExercise: false,
  isEditingExercise: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  console.log('payload from before the switch cases', action.payload)
  switch(action.type) {
    case FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload
      }
    case DELETE_EXERCISE_START:
      return {
        ...state,
        isDeletingExercise: true,
      }
    case DELETE_EXERCISE_SUCCESS:
      const filteredExercises = state.exercises.filter(exercise => exercise.id !== action.payload)
      return {
        ...state,
        exercises: filteredExercises,
        isDeletingExercise: false,
      }
    case DELETE_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeletingExercise: false,
      }
    case ADD_EXERCISE_START:
      return {
        ...state,
        isAddingExercise: true,
      }
    case ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingExercise: false,
      }
    case ADD_EXERCISE_FAILURE:
      return {
        ...state,
        isAddingExercise: false,
        error: action.payload,
      }
    case EDIT_EXERCISE_START:
      return {
        ...state,
        isEditingExercise: true,
      }
    case EDIT_EXERCISE_SUCCESS:
      const updatedExercises = state.exercises.map(exercise => (exercise.id === action.payload.id ? action.payload : exercise))
      return {
        ...state,
        exercises: updatedExercises,
        isEditingExercise: false,
      }
    case EDIT_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isEditingExercise: false,
      }
    default:
      return state;
  }
}