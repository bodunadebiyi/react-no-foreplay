import {  CHANGE_PAGE_TWO_HEADER } from '../constants';

export const defaultState = {
    header: 'THIS IS PAGE TWO'
};

export default function(state=defaultState, action) {
    switch(action.type) {
        case CHANGE_PAGE_TWO_HEADER:
            return {...state, header: action.payload}
        default:
            return state;
    }
}