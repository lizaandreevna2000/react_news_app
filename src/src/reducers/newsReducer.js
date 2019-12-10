import { FETCH_NEWS, FETCH_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE, CREATE_ARTICLE, FETCH_NEWS_REQUEST, FETCH_ARTICLE_REQUEST } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case FETCH_NEWS:
            return Object.assign({}, state, { items: action.payload, isFetching: false });
        case FETCH_ARTICLE_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case FETCH_ARTICLE:
            return Object.assign({}, state, { item: action.payload, isFetching: false });
        case EDIT_ARTICLE:
            return Object.assign({}, state, { item: action.payload });
        case DELETE_ARTICLE:
            return Object.assign({}, state, { items: state.items.filter((obj) => obj._id !== action.deletedNews._id) });
        case CREATE_ARTICLE:
            return Object.assign({}, state, { item: action.payload });
        default:
            return state;
    }
}