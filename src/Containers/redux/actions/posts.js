import axios from 'axios';
import store from '../store';
import {
    GET_POSTS,
    ADD_POST,
    UPDATE_POST,
    REMOVE_POST
} from '../types/posts';

export const getAllPosts = async () => {
    try {
        const token = localStorage.getItem('authToken');
        const res = await axios.get('http://localhost:3001/posts/', {
            headers: {
                Authorization: token
            }
        });
        store.dispatch({
            type: GET_POSTS,
            payload: res.data.posts
        })
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const addNewPost = async (post) => {
    const token = localStorage.getItem('authToken');
    await axios.post('http://localhost:3001/posts/', post, {
        headers: {
            Authorization: token
        }
    });

    console.log('axios create post');
    return getAllPosts();
}