import {LOGIN_SUCCESS} from '../actions/types';

const initialState = { 
    users: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: 
            return Object.assign({},state, {users: action.payload});
        default:
            return state; 
    }
}