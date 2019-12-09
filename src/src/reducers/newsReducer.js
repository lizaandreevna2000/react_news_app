import { FETCH_NEWS, FETCH_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE, CREATE_ARTICLE } from '../actions/types';


const initialState = {
    items: [],
    item: {},
    isFetching: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return Object.assign({}, state, { items: action.payload });
        case FETCH_ARTICLE:
            return Object.assign({}, state, { item: action.payload });
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