import {LOGIN,LOGOUT,GET_USERS} from '../types/users'

const initialState = {
    user: {},
    user_logged:false,
   
}
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload,
                user_logged:true
            }
        case GET_USERS:
            return {
                ...state,
                user:action.payload,
                // users: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                user_logged:false
            }
        default:
            return state
    }
}