import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/Navigation';
import { Router } from 'react-router';
import { Routes } from './Components/Routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
function App(): JSX.Element {
  return (
    <Router history={history}>
    <div className="App">
        <Navigation />
        <Routes/>
    </div>
    </Router>
  );
}

export default App;
