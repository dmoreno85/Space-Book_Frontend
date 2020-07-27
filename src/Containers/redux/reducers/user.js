import {LOGIN,LOGOUT,SET_USER} from '../types/users'

const initialState = {
    user: {},
    userAuth:false
}
export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                // userAuth:true + action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}