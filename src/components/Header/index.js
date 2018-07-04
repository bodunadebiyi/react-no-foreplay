import React from 'react';
import './style.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

export default () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React No Foreplay</h1>
        </header>
        <p className="page-links text-center">
            <NavLink to="/page1" activeStyle={{color: 'pink'}}>
                Page One
            </NavLink> | <NavLink to="/page2" activeStyle={{color: 'pink'}}>
                Page Two
            </NavLink>
        </p>
    </div>
)