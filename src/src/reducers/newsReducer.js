import {FETCH_NEWS, FETCH_ARTICLE} from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS: 
            return Object.assign({},state, {items: action.payload});
        case FETCH_ARTICLE: 
            return Object.assign({},state, {item: action.payload});
        default: 
            return state;
    }
}