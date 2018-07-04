import { CHANGE_PAGE_TWO_HEADER } from '../constants';

export function changePage2Header(payload) {
    return {
        type: CHANGE_PAGE_TWO_HEADER,
        payload
    }
}