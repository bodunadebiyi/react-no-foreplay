import {  CHANGE_PAGE_ONE_HEADER } from '../constants';

export const defaultState = {
    header: 'THIS IS PAGE ONE'
};

export default function(state=defaultState, action) {
    switch(action.type) {
        case CHANGE_PAGE_ONE_HEADER:
            return {...state, header: action.payload}
        default:
            return state;
    }
}