import { 
    LOGGING_START, 
    LOGGING_FAILURE, 
    LOGGING_SUCCESS, 
    SIGNUP_START, 
    SIGNUP_FAILURE, 
    SIGNUP_SUCCESS
  } from '../components/actions/actions';

  const initialState = {
    isLogging: false,
    loginError: null,
    isSignUp: false,
    signUpError: null

}

export const login = (state=initialState, action) => {
    switch(action.type) {
        case LOGGING_START:
        return {
            ...state, 
            isLogging: true,
        }

        case LOGGING_SUCCESS:
        return{
            ...state,
            isLogging: false,
            loginError: null
        }


        case LOGGING_FAILURE:
        return {
            ...state,
            isLogging: false,
            loginError: action.payload
        }

        
        default:
        return state;
    }
}

export const signup = (state=initialState, action) => {
    switch(action.type) {
        case SIGNUP_START:
        return {
            ...state, 
            isSignUp: true,
        }

        case SIGNUP_SUCCESS:
        return{
            ...state,
            isSignUp: false,
            signUpError: null
        }


        case SIGNUP_FAILURE:
        return {
            ...state,
            isSignUp: false,
            signUpError: action.payload
        }

        
        default:
        return state;
    }
}