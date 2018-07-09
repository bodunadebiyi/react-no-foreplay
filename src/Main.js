import React, { Component } from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
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
              path="/page2"
              component={PageTwo} />
          </Switch>
      </div>
    );
  }
}

export default App;
