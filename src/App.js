import React from 'react';
<<<<<<< HEAD
import {Switch, Route} from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';

>>>>>>> dc70a94462a1ea84e12eb353d8d6b75eef62fa59
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

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
<<<<<<< HEAD
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
=======
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />      
>>>>>>> dc70a94462a1ea84e12eb353d8d6b75eef62fa59
      </Switch>
    </div>
  );
}

export default App;
