import { FETCH_NEWS, LOGIN_SUCCESS, FETCH_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE, CREATE_ARTICLE, FETCH_NEWS_REQUEST, FETCH_ARTICLE_REQUEST } from './types';
import { BASE_URL } from '../config';
import axios from 'axios';

export const fetchNews = () => dispatch => {
    dispatch({type: FETCH_NEWS_REQUEST});
    return axios.get(`${BASE_URL}/feeds`)
        .then(news => {
                dispatch({
                    type: FETCH_NEWS,
                    payload: news.data.feeds,
                });
            }
        );
}

export const postToken = (token) => dispatch => {
    axios.post(`${BASE_URL}/auth/google`, {token:token})
    .then(response => {
        const token = response.data.token;
        dispatch(loginSuccess(token));
    })
}

export const fetchArticle = (id) => async dispatch => {
    await dispatch({type: FETCH_ARTICLE_REQUEST})
    return await axios.get(`${BASE_URL}/feeds/${id}`)
        .then(news => {
            dispatch({
                type: FETCH_ARTICLE,
                payload: news.data.feed,
            });
        })
}

export const editArticle = (id, editData) => dispatch => {
    console.log('dispatching')
    return axios.put(`${BASE_URL}/feeds/${id}`, editData,  {headers: {'x-access-token': localStorage.getItem('token')}})
        .then(response => {
            dispatch({
                type: EDIT_ARTICLE,
                payload: response.data.feed
            })
        })
        .catch(err => console.log(err.response.data))
}

export const deleteArticle = (id) => dispatch => {
    console.log('dispatching')
    return axios.delete(`${BASE_URL}/feeds/${id}`, {headers: {'x-access-token': localStorage.getItem('token')}})
        .then (response => { 
            dispatch({
                type: DELETE_ARTICLE,
                deletedNews: response.data
            }) 
        })
}

export const createArticle = (postData) => dispatch => {
    console.log('dispatching')
    return axios.post(`${BASE_URL}/feeds`, postData, {headers: {'x-access-token': localStorage.getItem('token')}})
        .then(response => {
            dispatch({
                type: CREATE_ARTICLE,
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
