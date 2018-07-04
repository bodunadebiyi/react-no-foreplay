import { compose, createStore, applyMiddleware }  from 'redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { defaultState as Page1 } from './reducers/page1';
import { defaultState as Page2 } from './reducers/page2';

export const history = createHistory();
const DEFAULT_STATE = {
    page1: Page1,
    page2: Page2
};

const configureStore = () => {
    return compose(
        applyMiddleware(
            thunk, 
            logger, 
            routerMiddleware(history)
        )
    )
}

export default createStore(connectRouter(history)(rootReducer), DEFAULT_STATE, configureStore());