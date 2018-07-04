import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import './index.css';
import Main from './Main';
import { ConnectedRouter } from 'connected-react-router'
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>, rootEl
);

if (module.hot) {
    module.hot.accept('./Main', () => {
        const NextApp = require('./Main').default
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NextApp />
                </ConnectedRouter>
            </Provider>, rootEl
        );
    });
}

registerServiceWorker();
 