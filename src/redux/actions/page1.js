import { CHANGE_PAGE_ONE_HEADER } from '../constants';

export function changePage1Header(payload) {
    return {
        type: CHANGE_PAGE_ONE_HEADER,
        payload
    }
}