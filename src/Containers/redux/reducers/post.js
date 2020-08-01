import {
    GET_POSTS,
    ADD_POST,
    UPDATE_POST,
    REMOVE_POST
} from "../types/posts";

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
            default:
                return state;

    }
}
export default postReducer;