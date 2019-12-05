import {combineReducers} from 'redux';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

export default combineReducers({
    news: newsReducer,
    user: userReducer
});

