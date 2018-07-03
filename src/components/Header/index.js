import React from 'react';
import './style.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="page-links text-center">
          <Link to="/">Page One</Link> | <Link to="/page2">Page Two</Link>
        </p>
    </div>
)