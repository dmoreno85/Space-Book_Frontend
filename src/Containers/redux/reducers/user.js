import {LOGIN,LOGOUT,SET_USER} from '../types/users'

const initialState = {
    user: {},
    user_logged:false
}
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload,
                user_logged:true
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
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