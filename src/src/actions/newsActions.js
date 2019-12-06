import {FETCH_NEWS, LOGIN_SUCCESS, FETCH_ARTICLE, EDIT_ARTICLE} from './types';
import axios from 'axios';

export const fetchNews = () => dispatch => {
    return axios.get('http://127.0.0.1:5000/api/v1/feeds')
        .then(news => {
                dispatch({
                    type: FETCH_NEWS,
                    payload: news.data.feeds,
                });
            }
        );
}

export const postToken = (token) => dispatch => {
    axios.post('http://127.0.0.1:5000/api/v1/auth/google', {token:token})
    .then(response => {
        const token = response.data.token;
        dispatch(loginSuccess(token));
    })
}

export const fetchArticle = (id) => dispatch => {
    return axios.get(`http://127.0.0.1:5000/api/v1/feeds/${id}`)
        .then(news => {
            dispatch({
                type: FETCH_ARTICLE,
                payload: news.data.feed,
            });
        })
}

export const editArticle = (id, editData) => dispatch => {
    console.log('dispatching')
    return axios.put(`http://127.0.0.1:5000/api/v1/feeds/${id}`, editData,  {headers: {'x-access-token': localStorage.getItem('token')}})
        .then(response => {
            dispatch({
                type: EDIT_ARTICLE,
                payload: response.data.feed
            })
        })
        .catch(err => console.log(err.response.data))
}

function loginSuccess(token) {
    localStorage.setItem('token', token);
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}
