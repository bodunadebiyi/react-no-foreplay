import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SubA from './subA';
import SubB from './subB';

export default () => {
    return (
        <Switch>
            <Route 
                path="/"
                component={SubA} />
            <Route
                exact
                path="/subA"
                component={SubA} />
            <Route
                exact
                path="/subB"
                component={SubB} />
        </Switch>
    )
}