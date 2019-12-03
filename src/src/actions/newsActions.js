import {FETCH_NEWS} from './types'
import axios from 'axios';

export const fetchNews = () => dispatch => {
    return axios.get('http://127.0.0.1:5000/api/v1/feeds')
        .then(news => {
                dispatch({
                    type: FETCH_NEWS,
                    payload: news.data.feeds,
                })
            }
        );
}