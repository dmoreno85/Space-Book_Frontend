import axios from 'axios';
import store from '../store';
import {
    GET_POSTS,
    ADD_POST,
    UPDATE_POST,
    REMOVE_POST
} from '../types/posts';
import { message } from 'antd';

export const getAllPosts = async () => {
    const token = localStorage.getItem('authToken');
    try {
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

export const removePost = async (post_id) => {
    const token = localStorage.getItem('authToken');
        await axios.delete('http://localhost:3001/posts/'+ post_id, {
            headers: {
                Authorization: token,
            }
        });
        return getAllPosts();
   
}

export const updatePost = async (post_id, post) => {
    const token = localStorage.getItem('authToken');
console.log(token);
        await axios.put(`http://localhost:3001/posts/`+ post_id, post, {
            headers: {
                Authorization: token,
            }
        });
        return getAllPosts();
   
}