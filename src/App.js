import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <div>
    <h1>Hats</h1>
  </div>
);

// Route exact is same as exact={true} exact as in exact path
// Switch allows only one route to execute

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />      
      </Switch>
    </div>
  );
}

export default App;
