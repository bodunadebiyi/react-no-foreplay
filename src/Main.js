import React, { Component } from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import PageOne from './pages/page1';
import PageTwo from './pages/page2';
import './assets/styles/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route 
              exact
              path="/"
              component={PageOne} />
            <Route
              exact
              path="/page1"
              component={PageOne} />
            <Route
              exact
              path="/page2"
              component={PageTwo} />
          </Switch>
      </div>
    );
  }
}

export default App;
