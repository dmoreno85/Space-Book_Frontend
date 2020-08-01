import axios from 'axios';
import store from '../store';
import {
    SIGN_UP,
    LOGIN,
    LOGOUT,
    GET_USERS
} from '../types/users';

export const register = async (user) => {
    try {
        const res = await axios.post('http://localhost:3001/users/register', user);
        store.dispatch({
            type: SIGN_UP
        });

        return res;
    } catch (error) {
        console.log('Error al registrar', error);
    }
};

export const login = async (user) => {
    try {

        const res = await axios.post('http://localhost:3001/users/login', user);
        store.dispatch({
            type: LOGIN,
            payload: res.data.user,
        });
        localStorage.setItem('authToken', res.data.token);
        return res;
    } catch (error) {

    }
};

export const logout = async (user) => {
    try {
        store.dispatch({
            type: LOGOUT
        });
        localStorage.removeItem('authToken')
    } catch (error) {

    }
};

export const getUsers = async () => {
    try {
        const token = localStorage.getItem('authToken');
        const res = await axios.get('http://localhost:3001/users/', {
            headers: {
                Authorization: token
            }
        });
        store.dispatch({
            type: GET_USERS,
            payload: res.data
        });
        return res;

    } catch (error) {
        console.error(error);
    }
};