import { combineReducers } from 'redux';
import users from './user';
import post from './post';
const reducer = combineReducers({
    users,
    post
 
});
export default reducer;