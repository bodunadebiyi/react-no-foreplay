import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from  'history/createBrowserHistory';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Main />
    </Router>, rootEl
);

if (module.hot) {
    module.hot.accept('./Main', () => {
        const NextApp = require('./Main').default
        ReactDOM.render(
            <Router history={createBrowserHistory()}>
                <NextApp />
            </Router>, rootEl
        );
    });
}

registerServiceWorker();
 