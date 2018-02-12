import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Home from './home';
import { Route, Link } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import ApiTest from './api_test';

const App = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/api-test">Api Test</Link>
            </li>
            
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/api-test" component={ApiTest}/>
            
    </div>
);

export default App;
