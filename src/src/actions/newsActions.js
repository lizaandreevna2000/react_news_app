import {FETCH_NEWS, LOGIN_SUCCESS, FETCH_ARTICLE} from './types';
import axios from 'axios';

axios.defaults.headers.common["x-access-token"] = localStorage.getItem('token') || null;

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
        .then( news => {
            dispatch({
                type: FETCH_ARTICLE,
                payload: news.data.feed,
            });
        })
}

function loginSuccess(token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common["x-access-token"] = token;
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}
