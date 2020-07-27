import axios from 'axios';
import store from '../store';
import {SIGN_UP,LOGIN,LOGOUT,SET_USER} from '../types/users';

export const register = async(user)=>{
    try {
        const res = await axios.post('http://localhost:3001/users/register',user);
        store.dispatch({
            type:SIGN_UP
        });
        console.log(store);
        return res;
    } catch (error) {
        console.log('Error al registrar', error);
    }
};

export const login = async(userData) =>{
    try {
        // console.log('user sin loguear',user);
        // console.log('datos enviados para login', userData);
        const res = await axios.post('http://localhost:3001/users/login',userData);
        store.dispatch({
            type:LOGIN,
            payload: res.data.user,
            //  payload:store.userAuth
        });
        localStorage.setItem('authToken',res.data.user.tokens[0].token);
        store.subscribe(()=>{
            console.log('cambio en store', store.getState());
          })
         
        //  console.log('token',res.data.token);
         return res;
    } catch (error) {
        
    }
}